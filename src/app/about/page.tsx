import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <nav className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <span>SmartWaste AI</span>
        </div>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="header-actions">
          <Link href="/login" className="secondary-btn link-btn">Login</Link>
          <Link href="/register" className="primary-btn link-btn">Report Waste</Link>
        </div>
      </nav>

      <section className="analytics" style={{ marginTop: '32px' }}>
        <div className="analytics-card">
          <p className="section-kicker">Vision</p>
          <h2>AI-powered waste intelligence for smarter cities.</h2>
          <p className="page-subtitle">
            SmartWaste AI predicts waste demand, verifies pickup completion, rewards verified action,
            and gives cities a live score for cleanliness and response effectiveness.
          </p>
        </div>
        <div className="analytics-card">
          <p className="section-kicker">Mission</p>
          <ul className="milestone-list">
            <li>Reduce overflow and illegal dumping through predictive insights.</li>
            <li>Validate waste collection with GPS, evidence, and AI inspection.</li>
            <li>Reward citizens only after verified collection and segregation quality.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
