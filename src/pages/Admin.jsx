import React, { useEffect, useMemo, useState } from "react";
import { useSiteContent, saveSiteContent } from "../config/contentStore";

const PASSWORD_STORAGE_KEY = "sana-admin-password-hash";
const ACTION_OPTIONS = [
  {
    id: "general",
    title: "Update general data",
    description: "Brand details, hero sections, about text, footer notes.",
    icon: "🏷️",
  },
  {
    id: "contact",
    title: "Update contact info",
    description: "Email, phone, address, WhatsApp, and social links.",
    icon: "📞",
  },
  {
    id: "blog",
    title: "Add or edit posts",
    description: "Create new articles or update existing blog entries.",
    icon: "📝",
  },
  {
    id: "seo",
    title: "Update SEO settings",
    description: "Meta description and site URL for search visibility.",
    icon: "🔎",
  },
];

function getNewPostTemplate() {
  return {
    id: Date.now(),
    title: "",
    slug: "",
    category: "general",
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    image: "✍️",
    excerpt: "",
    readTime: "5 min read",
    featured: false,
    content: "",
  };
}

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function Admin() {
  const content = useSiteContent();
  const [draft, setDraft] = useState(content);
  const [password, setPassword] = useState("");
  const [setupPassword, setSetupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPasswordSetup, setHasPasswordSetup] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [selectedAction, setSelectedAction] = useState("general");
  const [newPost, setNewPost] = useState(getNewPostTemplate);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = window.sessionStorage.getItem("sana-admin-auth");
      setIsAuthenticated(auth === "true");
      const storedHash = window.localStorage.getItem(PASSWORD_STORAGE_KEY);
      setHasPasswordSetup(Boolean(storedHash));
    }
  }, []);

  useEffect(() => {
    setDraft(content);
  }, [content]);

  const selectedActionMeta = useMemo(
    () => ACTION_OPTIONS.find((option) => option.id === selectedAction) || ACTION_OPTIONS[0],
    [selectedAction]
  );

  const handleSetupPassword = async (event) => {
    event.preventDefault();
    if (!setupPassword.trim() || setupPassword.length < 6) {
      setStatusMessage("Choose a password with at least 6 characters.");
      return;
    }

    if (setupPassword !== confirmPassword) {
      setStatusMessage("The passwords do not match. Try again.");
      return;
    }

    const passwordHash = await hashPassword(setupPassword);
    window.localStorage.setItem(PASSWORD_STORAGE_KEY, passwordHash);
    setHasPasswordSetup(true);
    setSetupPassword("");
    setConfirmPassword("");
    setStatusMessage("Admin password created successfully.");
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        window.sessionStorage.setItem("sana-admin-auth", "true");
        setIsAuthenticated(true);
        setStatusMessage("Access granted.");
        return;
      }
    } catch (error) {
      // Fall back to the local password flow if the backend is not available yet.
    }

    const storedHash = window.localStorage.getItem(PASSWORD_STORAGE_KEY);
    const enteredHash = await hashPassword(password);

    if (!storedHash) {
      window.localStorage.setItem(PASSWORD_STORAGE_KEY, enteredHash);
      setHasPasswordSetup(true);
      setStatusMessage("Admin password created successfully.");
      return;
    }

    if (enteredHash === storedHash) {
      window.sessionStorage.setItem("sana-admin-auth", "true");
      setIsAuthenticated(true);
      setStatusMessage("Access granted.");
    } else {
      setStatusMessage("Incorrect password. Try again.");
    }
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();

    if (!currentPassword.trim() || !newPassword.trim() || !confirmNewPassword.trim()) {
      setStatusMessage("Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 6) {
      setStatusMessage("The new password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setStatusMessage("The new passwords do not match.");
      return;
    }

    const storedHash = window.localStorage.getItem(PASSWORD_STORAGE_KEY);
    const enteredCurrentHash = await hashPassword(currentPassword);

    if (enteredCurrentHash !== storedHash) {
      setStatusMessage("The current password is incorrect.");
      return;
    }

    const nextHash = await hashPassword(newPassword);
    window.localStorage.setItem(PASSWORD_STORAGE_KEY, nextHash);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setStatusMessage("Admin password updated successfully.");
  };

  const updateField = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  const updateNestedField = (section, field, value) => {
    setDraft((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updatePost = (index, field, value) => {
    setDraft((prev) => {
      const blogPosts = [...(prev.blogPosts || [])];
      blogPosts[index] = { ...blogPosts[index], [field]: value };
      return { ...prev, blogPosts };
    });
  };

  const removePost = (index) => {
    setDraft((prev) => ({
      ...prev,
      blogPosts: (prev.blogPosts || []).filter((_, currentIndex) => currentIndex !== index),
    }));
  };

  const handleSaveSection = (event) => {
    event.preventDefault();
    setStatusMessage(`${selectedActionMeta.title} changes are ready. Use final publish to update the website.`);
  };

  const handlePublishChanges = async (event) => {
    event.preventDefault();

    try {
      await saveSiteContent(draft, password);
      setStatusMessage("Website content has been published successfully.");
    } catch (error) {
      setStatusMessage("Publish failed. Please check your password and try again.");
    }
  };

  const handleResetDraft = () => {
    setDraft(content);
    setNewPost(getNewPostTemplate());
    setStatusMessage("Draft reset to the latest published content.");
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    if (!newPost.title.trim() || !newPost.slug.trim()) {
      setStatusMessage("Add a title and a slug before saving this post.");
      return;
    }

    const nextDraft = {
      ...draft,
      blogPosts: [
        {
          ...newPost,
          id: Date.now(),
          date: newPost.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        },
        ...(draft.blogPosts || []),
      ],
    };

    setDraft(nextDraft);
    setNewPost(getNewPostTemplate());
    setStatusMessage("New blog post added to the draft. Publish later to make it visible.");
  };

  const handleExportBackup = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sana-softs-backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    window.URL.revokeObjectURL(url);
    setStatusMessage("Backup downloaded.");
  };

  const handleImportBackup = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const nextContent = saveSiteContent(parsed);
      setDraft(nextContent);
      setStatusMessage("Backup restored successfully.");
    } catch (error) {
      setStatusMessage("The selected backup could not be imported.");
    } finally {
      event.target.value = "";
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4 py-24">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Private admin access</p>
          <h1 className="mt-3 text-3xl font-bold">Sign in to manage content</h1>
          <p className="mt-3 text-slate-300">This area stays hidden from public navigation and is intended for secure content updates. Changes are verified server-side and published through the website backend.</p>
          {!hasPasswordSetup ? (
            <form className="mt-8" onSubmit={handleSetupPassword}>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="setupPassword">
                Create admin password
              </label>
              <input
                id="setupPassword"
                type="password"
                value={setupPassword}
                onChange={(event) => setSetupPassword(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                placeholder="Choose a strong password"
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                placeholder="Confirm password"
              />
              <button type="submit" className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white">
                Create password
              </button>
            </form>
          ) : (
            <form className="mt-8" onSubmit={handleLogin}>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
                placeholder="Enter admin password"
              />
              <button type="submit" className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white">
                Continue
              </button>
            </form>
          )}
          {statusMessage ? <p className="mt-4 text-sm text-amber-300">{statusMessage}</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-4">
            <img src="/img/sanalogo.svg" alt="SANA Softs logo" className="h-16 w-16 rounded-2xl" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Admin panel</p>
              <h1 className="mt-2 text-4xl font-bold">Choose an action, update it, then publish</h1>
              <p className="mt-3 max-w-3xl text-slate-300">
                First select the section you want to manage, edit the details, and save that section. When everything looks right, publish the full draft to update the website.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={handleExportBackup} className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200">
              Export backup
            </button>
            <label className="cursor-pointer rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200">
              Import backup
              <input type="file" accept="application/json" className="hidden" onChange={handleImportBackup} />
            </label>
            <button
              type="button"
              onClick={() => {
                window.sessionStorage.removeItem("sana-admin-auth");
                setIsAuthenticated(false);
              }}
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200"
            >
              Log out
            </button>
          </div>
        </div>

        {statusMessage ? <div className="mb-8 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">{statusMessage}</div> : null}

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Security</p>
            <h2 className="mt-2 text-2xl font-semibold">Change admin password</h2>
          </div>
          <form onSubmit={handleChangePassword} className="mt-4 grid gap-3 md:grid-cols-3">
            <input
              type="password"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
              placeholder="Current password"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
            <input
              type="password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
              placeholder="New password"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(event) => setConfirmNewPassword(event.target.value)}
              placeholder="Confirm new password"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
            />
            <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white md:col-span-3">
              Update password
            </button>
          </form>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ACTION_OPTIONS.map((option) => (
            <button
              type="button"
              key={option.id}
              onClick={() => setSelectedAction(option.id)}
              className={`rounded-2xl border p-5 text-left transition ${
                selectedAction === option.id
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-white/10 bg-white/5 hover:border-blue-400/40 hover:bg-white/10"
              }`}
            >
              <div className="text-2xl">{option.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{option.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{option.description}</p>
            </button>
          ))}
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Selected action</p>
                <h2 className="mt-2 text-2xl font-semibold">{selectedActionMeta.title}</h2>
              </div>
              <button type="button" onClick={handleResetDraft} className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200">
                Reset draft
              </button>
            </div>
          </div>

          <form onSubmit={handleSaveSection} className="space-y-8">
            {selectedAction === "general" && (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-2xl font-semibold">General website content</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Site name</span>
                    <input value={draft.companyName || ""} onChange={(event) => updateField("companyName", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Tagline</span>
                    <input value={draft.siteTagline || ""} onChange={(event) => updateField("siteTagline", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">Hero title</span>
                    <input value={draft.heroTitle || ""} onChange={(event) => updateField("heroTitle", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">Hero subtitle</span>
                    <textarea value={draft.heroSubtitle || ""} onChange={(event) => updateField("heroSubtitle", event.target.value)} rows="3" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Primary CTA</span>
                    <input value={draft.heroPrimaryCta || ""} onChange={(event) => updateField("heroPrimaryCta", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Secondary CTA</span>
                    <input value={draft.heroSecondaryCta || ""} onChange={(event) => updateField("heroSecondaryCta", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">About title</span>
                    <input value={draft.aboutTitle || ""} onChange={(event) => updateField("aboutTitle", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">About body</span>
                    <textarea value={draft.aboutBody || ""} onChange={(event) => updateField("aboutBody", event.target.value)} rows="4" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">Footer note</span>
                    <input value={draft.footerNote || ""} onChange={(event) => updateField("footerNote", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                </div>
                <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
                  Save general section
                </button>
              </div>
            )}

            {selectedAction === "contact" && (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-2xl font-semibold">Contact and social settings</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Contact email</span>
                    <input value={draft.contactEmail || ""} onChange={(event) => updateField("contactEmail", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Phone number</span>
                    <input value={draft.phoneNumber || ""} onChange={(event) => updateField("phoneNumber", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">Address</span>
                    <input value={draft.address || ""} onChange={(event) => updateField("address", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">WhatsApp link</span>
                    <input value={draft.whatsappLink || ""} onChange={(event) => updateField("whatsappLink", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Portfolio link</span>
                    <input value={draft.portfolioLink || ""} onChange={(event) => updateField("portfolioLink", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Telegram</span>
                    <input value={draft.socialLinks?.telegram || ""} onChange={(event) => updateNestedField("socialLinks", "telegram", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">Instagram</span>
                    <input value={draft.socialLinks?.instagram || ""} onChange={(event) => updateNestedField("socialLinks", "instagram", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200">
                    <span className="mb-2 block">GitHub</span>
                    <input value={draft.socialLinks?.github || ""} onChange={(event) => updateNestedField("socialLinks", "github", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                </div>
                <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
                  Save contact section
                </button>
              </div>
            )}

            {selectedAction === "blog" && (
              <>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold">Add a new post</h3>
                    <p className="text-sm text-slate-300">This only adds the post to your draft until you publish.</p>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <label className="text-sm text-slate-200">
                      <span className="mb-2 block">Title</span>
                      <input value={newPost.title || ""} onChange={(event) => setNewPost((prev) => ({ ...prev, title: event.target.value }))} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="text-sm text-slate-200">
                      <span className="mb-2 block">Slug</span>
                      <input value={newPost.slug || ""} onChange={(event) => setNewPost((prev) => ({ ...prev, slug: event.target.value }))} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="text-sm text-slate-200">
                      <span className="mb-2 block">Category</span>
                      <input value={newPost.category || ""} onChange={(event) => setNewPost((prev) => ({ ...prev, category: event.target.value }))} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="text-sm text-slate-200">
                      <span className="mb-2 block">Emoji icon</span>
                      <input value={newPost.image || ""} onChange={(event) => setNewPost((prev) => ({ ...prev, image: event.target.value }))} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="text-sm text-slate-200 md:col-span-2">
                      <span className="mb-2 block">Excerpt</span>
                      <textarea value={newPost.excerpt || ""} onChange={(event) => setNewPost((prev) => ({ ...prev, excerpt: event.target.value }))} rows="2" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="text-sm text-slate-200 md:col-span-2">
                      <span className="mb-2 block">Article content</span>
                      <textarea value={newPost.content || ""} onChange={(event) => setNewPost((prev) => ({ ...prev, content: event.target.value }))} rows="4" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                    </label>
                    <label className="flex items-center gap-3 text-sm text-slate-200">
                      <input type="checkbox" checked={Boolean(newPost.featured)} onChange={(event) => setNewPost((prev) => ({ ...prev, featured: event.target.checked }))} className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
                      Feature this article
                    </label>
                  </div>
                  <button type="button" onClick={handleCreatePost} className="mt-6 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white">
                    Add post to draft
                  </button>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold">Edit existing posts</h3>
                    <p className="text-sm text-slate-300">These updates stay in the draft until you publish.</p>
                  </div>
                  <div className="mt-6 space-y-6">
                    {(draft.blogPosts || []).map((post, index) => (
                      <div key={post.id || index} className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <h4 className="text-lg font-semibold">{post.title || `Post ${index + 1}`}</h4>
                          <button type="button" onClick={() => removePost(index)} className="text-sm text-rose-300">
                            Remove
                          </button>
                        </div>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                          <label className="text-sm text-slate-200">
                            <span className="mb-2 block">Title</span>
                            <input value={post.title || ""} onChange={(event) => updatePost(index, "title", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white" />
                          </label>
                          <label className="text-sm text-slate-200">
                            <span className="mb-2 block">Slug</span>
                            <input value={post.slug || ""} onChange={(event) => updatePost(index, "slug", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white" />
                          </label>
                          <label className="text-sm text-slate-200">
                            <span className="mb-2 block">Category</span>
                            <input value={post.category || ""} onChange={(event) => updatePost(index, "category", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white" />
                          </label>
                          <label className="text-sm text-slate-200">
                            <span className="mb-2 block">Read time</span>
                            <input value={post.readTime || ""} onChange={(event) => updatePost(index, "readTime", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white" />
                          </label>
                          <label className="text-sm text-slate-200 md:col-span-2">
                            <span className="mb-2 block">Excerpt</span>
                            <textarea value={post.excerpt || ""} onChange={(event) => updatePost(index, "excerpt", event.target.value)} rows="2" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white" />
                          </label>
                          <label className="text-sm text-slate-200 md:col-span-2">
                            <span className="mb-2 block">Content</span>
                            <textarea value={post.content || ""} onChange={(event) => updatePost(index, "content", event.target.value)} rows="4" className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white" />
                          </label>
                          <label className="flex items-center gap-3 text-sm text-slate-200">
                            <input type="checkbox" checked={Boolean(post.featured)} onChange={(event) => updatePost(index, "featured", event.target.checked)} className="h-4 w-4 rounded border-slate-700 bg-slate-950" />
                            Feature this article
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
                    Save blog section
                  </button>
                </div>
              </>
            )}

            {selectedAction === "seo" && (
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur">
                <h3 className="text-2xl font-semibold">SEO settings</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">Default description</span>
                    <textarea value={draft.seo?.defaultDescription || ""} onChange={(event) => updateNestedField("seo", "defaultDescription", event.target.value)} rows="3" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                  <label className="text-sm text-slate-200 md:col-span-2">
                    <span className="mb-2 block">Site URL</span>
                    <input value={draft.seo?.siteUrl || ""} onChange={(event) => updateNestedField("seo", "siteUrl", event.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white" />
                  </label>
                </div>
                <button type="submit" className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white">
                  Save SEO section
                </button>
              </div>
            )}
          </form>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Final publish</p>
                <h3 className="mt-2 text-2xl font-semibold">Publish the full draft to the website</h3>
              </div>
              <button type="button" onClick={handlePublishChanges} className="rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white">
                Publish all changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Admin;
