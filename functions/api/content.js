const DEFAULT_REPO = "salone1/sana-softs";
const DEFAULT_CONTENT_PATH = "content/site-content.json";

function getHeaders() {
  return {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
    "User-Agent": "sana-softs-admin",
  };
}

async function getGitHubContent(env) {
  const repo = env.GITHUB_REPO || DEFAULT_REPO;
  const contentPath = env.CONTENT_FILE_PATH || DEFAULT_CONTENT_PATH;
  const token = env.GITHUB_TOKEN;

  const response = await fetch(`https://api.github.com/repos/${repo}/contents/${contentPath}`, {
    headers: {
      ...getHeaders(),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub fetch failed: ${response.status}`);
  }

  const payload = await response.json();
  const content = payload.content ? atob(payload.content) : "";
  return JSON.parse(content);
}

async function writeGitHubContent(env, data) {
  const repo = env.GITHUB_REPO || DEFAULT_REPO;
  const contentPath = env.CONTENT_FILE_PATH || DEFAULT_CONTENT_PATH;
  const token = env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("Missing GITHUB_TOKEN");
  }

  const url = `https://api.github.com/repos/${repo}/contents/${contentPath}`;
  const currentResponse = await fetch(url, {
    headers: {
      ...getHeaders(),
      Authorization: `Bearer ${token}`,
    },
  });

  if (!currentResponse.ok && currentResponse.status !== 404) {
    throw new Error(`GitHub metadata failed: ${currentResponse.status}`);
  }

  const currentPayload = currentResponse.status === 404 ? null : await currentResponse.json();
  const content = JSON.stringify(data, null, 2);
  const encodedContent = btoa(unescape(encodeURIComponent(content)));

  const commitBody = {
    message: "Update website content from admin panel",
    content: encodedContent,
    ...(currentPayload?.sha ? { sha: currentPayload.sha } : {}),
    committer: {
      name: env.GITHUB_COMMITTER_NAME || "SANA Softs Admin",
      email: env.GITHUB_COMMITTER_EMAIL || "admin@sanasofts.com",
    },
  };

  const uploadResponse = await fetch(url, {
    method: "PUT",
    headers: {
      ...getHeaders(),
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(commitBody),
  });

  if (!uploadResponse.ok) {
    const errorText = await uploadResponse.text();
    throw new Error(`GitHub write failed: ${uploadResponse.status} ${errorText}`);
  }

  return await uploadResponse.json();
}

export async function onRequest({ request, env }) {
  if (request.method === "GET") {
    try {
      const data = await getGitHubContent(env);
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message || "Unable to load content" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const { content, password } = body || {};

    if (!content || typeof content !== "object") {
      return new Response(JSON.stringify({ error: "Content payload is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const encoder = new TextEncoder();
    const passwordData = encoder.encode(password || "");
    const passwordHashBuffer = await crypto.subtle.digest("SHA-256", passwordData);
    const passwordHash = Array.from(new Uint8Array(passwordHashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const expectedHash = env.ADMIN_PASSWORD_HASH || env.VITE_ADMIN_PASSWORD_HASH;

    if (!expectedHash || passwordHash !== expectedHash) {
      return new Response(JSON.stringify({ success: false, error: "Invalid admin password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    await writeGitHubContent(env, content);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message || "Unable to publish content" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}