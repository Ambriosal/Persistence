export function LandingHero() {
  return (
    <section className="hero">
      <div className="hero-eyebrow">
        <div className="eyebrow-dot" />
        Private alpha · Toronto
      </div>
      <h1 className="hero-headline">
        The AI that <em>remembers</em>
        <br />
        every version of your day.
      </h1>
      <p className="hero-sub">
        Persistence holds infinite context about who you are, what you&apos;re
        building, and how today is actually going — then quietly keeps your day
        on track without you having to manage it.
      </p>
      <div className="hero-actions">
        <a href="#access" className="btn-primary">
          Request early access
        </a>
        <a href="#how" className="btn-secondary">
          See how it works
        </a>
      </div>
    </section>
  );
}
