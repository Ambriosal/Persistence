const memoryCards = [
  {
    type: "Short-term",
    ttl: "today only",
    desc: "The active blocks and current conversation. Cleared at midnight. Everything that happened today stays available to reference all day.",
    example: '"you\'re 22 min over on the block you said would take 60"',
  },
  {
    type: "Habit",
    ttl: "indefinite",
    desc: "Long-term things you want to build. Doesn't expire. Offered into free blocks when free time actually appears — not just on a fixed schedule.",
    example:
      '"you said you want to learn figure skating 3 weeks ago. there\'s 40 minutes tonight."',
  },
  {
    type: "Reminder",
    ttl: "until resolved",
    desc: "One-off things you mentioned in passing. Triggered by date, or by opportunity — when a free block appears and a reminder is overdue.",
    example:
      '"you mentioned calling your cousin last Tuesday. want me to slot 15 minutes?"',
  },
  {
    type: "Preference",
    ttl: "always on",
    desc: "The constants: when you wake up, your gym days, how long you like your focus blocks, whether you do NSDR. Always injected. Never expires.",
    example: "applied silently on every plan — you set it once.",
  },
] as const;

export function MemoryModel() {
  return (
    <section className="section" id="memory">
      <div className="section-eyebrow">Memory model</div>
      <div className="memory-grid">
        {memoryCards.map((card) => (
          <div key={card.type} className="memory-card">
            <div className="memory-type">{card.type}</div>
            <div className="memory-ttl">{card.ttl}</div>
            <div className="memory-desc">{card.desc}</div>
            <div className="memory-example">{card.example}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
