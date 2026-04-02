const navItems = [
  { href: "#services", label: "Services" },
  { href: "#product", label: "Product" },
  { href: "#process", label: "Process" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-brand">
        <div className="brand-mark">V</div>
        <div>
          <div className="brand-name">VoxTech</div>
          <div className="brand-sub">Startup software systems</div>
        </div>
      </div>
      <nav className="site-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="site-cta" href="#contact">Book a Demo</a>
    </header>
  );
}
