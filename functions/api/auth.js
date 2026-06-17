export async function onRequest({ request, env }) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { password } = await request.json();

    if (!password || typeof password !== "string") {
      return new Response(JSON.stringify({ error: "Password is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const encoder = new TextEncoder();
    const passwordData = encoder.encode(password);
    const passwordHashBuffer = await crypto.subtle.digest("SHA-256", passwordData);
    const passwordHash = Array.from(new Uint8Array(passwordHashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const expectedHash = env.ADMIN_PASSWORD_HASH || env.VITE_ADMIN_PASSWORD_HASH;

    if (!expectedHash || passwordHash !== expectedHash) {
      return new Response(JSON.stringify({ success: false, error: "Invalid password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Unable to verify password" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}