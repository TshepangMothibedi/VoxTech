export function HeroSection() {
  return (
    <section className="website-hero">
      <div className="hero-copy">
        <div className="eyebrow">Product Design. Engineering. Delivery.</div>
        <h1>Websites and business systems that make early-stage companies look ready.</h1>
        <p>
          VoxTech builds polished digital products for founders and growing teams. From high-conviction
          marketing websites to operational software, the work is designed to sell, scale, and hold up under use.
        </p>
        <div className="hero-actions">
          <a className="site-cta" href="#contact">Book a Demo</a>
          <a className="site-link" href="#product">See the CRM Showcase</a>
        </div>
      </div>
      <div className="hero-preview glass-panel">
        <div className="preview-window">
          <div className="preview-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="preview-grid">
            <article className="preview-card feature">
              <small>Live pipeline value</small>
              <strong>R968 000</strong>
              <p>Premium CRM demo interface with believable business data.</p>
            </article>
            <article className="preview-card">
              <small>Client-facing quality</small>
              <strong>Enterprise feel</strong>
            </article>
            <article className="preview-card">
              <small>Delivery model</small>
              <strong>Fast MVP builds</strong>
            </article>
            <article className="preview-card wide">
              <small>Positioning</small>
              <strong>Designed to help you win meetings, close demos, and scale operations.</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
