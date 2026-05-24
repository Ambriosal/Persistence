const quotes = [
  {
    context: "Exam tomorrow. Haven't studied.",
    text: '"There isn\'t enough time to learn this well tonight. Go to sleep. I\'ll wake you at 5:30 with the prep plan."',
  },
  {
    context: "22 minutes over, feeling guilty.",
    text: '"You\'re late. I already moved everything. There\'s nothing to make up — just keep going."',
  },
  {
    context: "Goal mentioned once, a month ago.",
    text: '"You said you want to learn to backflip. There\'s a 40-minute gap Saturday morning. Want me to slot it?"',
  },
] as const;

export function HonestSection() {
  return (
    <section className="section">
      <div className="honest-section">
        <div className="honest-eyebrow">The honesty constraint</div>
        <h2 className="honest-headline">
          It is not nice to you.
          <br />
          It is honest with you.
        </h2>
        <p className="honest-sub">
          Most AI is built to encourage. Persistence is built to tell you the
          truth about your day — including when the truth is that you should
          stop and sleep.
        </p>
        <div className="quotes-grid">
          {quotes.map((quote) => (
            <div key={quote.context} className="quote-card">
              <div className="quote-context">{quote.context}</div>
              <div className="quote-text">{quote.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
