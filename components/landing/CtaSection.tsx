export function CtaSection() {
  return (
    <section className="cta-section" id="access">
      <div className="cta-box">
        <div className="cta-left">
          <h2 className="cta-headline">
            Built for people whose days fall apart the real way.
          </h2>
          <p className="cta-sub">
            Persistence is in private alpha. We&apos;re using it on our own days
            first — three cousins in Toronto. If you&apos;re a student or
            builder who recognises the problem, leave your email.
          </p>
        </div>
        <div className="cta-right">
          <div className="email-row">
            <input
              className="email-input"
              type="email"
              placeholder="your@email.com"
            />
            <button
              type="button"
              className="btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              Request access
            </button>
          </div>
          <p className="access-note">
            private alpha · no spam · we&apos;ll reach out personally
          </p>
        </div>
      </div>
    </section>
  );
}
