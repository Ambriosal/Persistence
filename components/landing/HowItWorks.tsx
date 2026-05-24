const steps = [
  {
    num: "01",
    title: "It learns who you actually are",
    body: "A short conversation to start. Your schedule, your goals, the way your days tend to go. It stores this — not as a one-time briefing, but as a living context that deepens every day you use it.",
  },
  {
    num: "02",
    title: "Every morning, a plan built on truth",
    body: "Four or five questions, your stored context, your real constraints. You end with a shape for the day — not a time-grid that collapses on contact, but a picture of what actually needs to happen and in what order.",
  },
  {
    num: "03",
    title: "It watches what actually happens",
    body: "Quiet check-ins as the day moves. Ran over? Finished early? Got a message that changed everything? Persistence re-blocks the rest of your day in under two seconds. The plan is always live.",
  },
  {
    num: "04",
    title: "Things you care about don't fall through the cracks",
    body: "Goals you mentioned in passing. Habits you keep parking. Reminders you said once and forgot. Persistence holds all of it — and surfaces it when the day actually has room.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="section-eyebrow">How it works</div>
      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.num} className="step-cell">
            <div className="step-num">{step.num}</div>
            <div className="step-title">{step.title}</div>
            <div className="step-body">{step.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
