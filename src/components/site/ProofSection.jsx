const proof = [
  {
    title: "Premium visual quality",
    text: "Interfaces are designed to look intentional, sales-ready, and business credible from the first screen."
  },
  {
    title: "Real workflow thinking",
    text: "The work is structured around actual operational use, not just surface-level mockups."
  },
  {
    title: "Future product leverage",
    text: "Projects are shaped so they can evolve into larger systems rather than trapping the business in rewrites."
  }
];

export function ProofSection() {
  return (
    <section id="proof" className="website-section">
      <div className="section-intro">
        <div className="eyebrow">Why It Works</div>
        <h2>What clients should feel when they see the product.</h2>
      </div>
      <div className="proof-grid">
        {proof.map((item) => (
          <article key={item.title} className="proof-card glass-panel">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
