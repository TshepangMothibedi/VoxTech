const steps = [
  "Clarify the business goal and the highest-value workflow.",
  "Design a premium interface with clear user actions and believable structure.",
  "Build the MVP around the core path first, then expand from a stable base.",
  "Seed realistic demo content and refine the product until it feels sales-ready."
];

export function ProcessSection() {
  return (
    <section id="process" className="website-section">
      <div className="section-intro">
        <div className="eyebrow">Delivery Approach</div>
        <h2>Built for speed without looking rushed.</h2>
      </div>
      <div className="process-list">
        {steps.map((step, index) => (
          <article key={step} className="process-card glass-panel">
            <span className="process-index">0{index + 1}</span>
            <p>{step}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
