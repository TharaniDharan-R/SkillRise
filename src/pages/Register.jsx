import { useMemo, useState } from "react";
import { ArrowRight, GraduationCap, Lock, LogIn, Sparkles } from "lucide-react";
import { DomainCard } from "../components/DomainCard";

export function Register({ domains, onLogin, onRegister }) {
  const [mode, setMode] = useState("register");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    goal: "",
    domainIds: ["java"],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedCount = useMemo(() => form.domainIds.length, [form.domainIds]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleDomain(domainId) {
    setForm((current) => {
      const exists = current.domainIds.includes(domainId);
      const domainIds = exists
        ? current.domainIds.filter((id) => id !== domainId)
        : [...current.domainIds, domainId];

      return { ...current, domainIds };
    });
  }

  async function submit(event) {
    event.preventDefault();
    setError("");

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (mode === "register" && !form.name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (mode === "register" && form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (mode === "register" && !form.domainIds.length) {
      setError("Select at least one learning domain.");
      return;
    }

    setLoading(true);
    try {
      if (mode === "login") {
        await onLogin({
          email: form.email.trim(),
          password: form.password,
        });
      } else {
        await onRegister({
          ...form,
          name: form.name.trim(),
          email: form.email.trim(),
          goal: form.goal.trim(),
        });
      }
    } catch (caughtError) {
      setError(caughtError.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="register-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <section className="register-hero">
        <span className="eyebrow">
          <GraduationCap size={18} />
          SkillRise learning platform
        </span>
        <h1>Learn skills with a focused roadmap, progress tracking, and saved tasks.</h1>
        <p>
          Register once, choose your domains, and come back anytime to continue from
          your existing roadmap progress.
        </p>
        <div className="hero-badges">
          <span><Sparkles size={16} /> Java roadmap live</span>
          <span><Lock size={16} /> Account progress saved</span>
          <span>Basic to advanced topics</span>
        </div>
      </section>

      <form className="register-panel" onSubmit={submit}>
        <div className="auth-tabs">
          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => {
              setMode("register");
              setError("");
            }}
            type="button"
          >
            Create account
          </button>
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => {
              setMode("login");
              setError("");
            }}
            type="button"
          >
            Login
          </button>
        </div>

        <div className="form-grid">
          {mode === "register" ? (
            <label>
              Full name
              <input
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Enter your name"
                value={form.name}
              />
            </label>
          ) : null}
          <label>
            Email
            <input
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              type="email"
              value={form.email}
            />
          </label>
          <label>
            Password
            <input
              onChange={(event) => updateField("password", event.target.value)}
              placeholder="Minimum 6 characters"
              type="password"
              value={form.password}
            />
          </label>
          {mode === "register" ? (
          <label className="wide">
            Learning goal
            <input
              onChange={(event) => updateField("goal", event.target.value)}
              placeholder="Example: Become job-ready in Java and DSA"
              value={form.goal}
            />
          </label>
          ) : null}
        </div>

        {mode === "register" ? (
          <>
            <div className="section-heading">
              <div>
                <h2>Select learning domains</h2>
                <p>{selectedCount} selected. You can start with Java and add more later.</p>
              </div>
            </div>

            <div className="domain-grid">
              {domains.map((domain) => (
                <DomainCard
                  domain={domain}
                  key={domain.id}
                  onClick={() => toggleDomain(domain.id)}
                  selected={form.domainIds.includes(domain.id)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="login-note">
            <LogIn size={20} />
            <div>
              <h2>Continue your existing roadmap</h2>
              <p>Login with your registered email and password to restore saved XP and completed topics.</p>
            </div>
          </div>
        )}

        {error ? <p className="form-error">{error}</p> : null}

        <button className="primary-button submit-button" disabled={loading} type="submit">
          {loading ? "Please wait..." : mode === "register" ? "Start learning" : "Login and continue"}
          <ArrowRight size={18} />
        </button>
      </form>
    </main>
  );
}
