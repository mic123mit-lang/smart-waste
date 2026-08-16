import Link from 'next/link';

export default function ContactPage() {
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
          <p className="section-kicker">Contact</p>
          <h2>Built for smart-city pilots, municipal teams and civic innovation challenges.</h2>
          <ul className="milestone-list">
            <li>Email: hello@smartwaste.ai</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: Smart City Innovation Hub, Gandhinagar, Gujarat</li>
          </ul>
        </div>
        <div className="analytics-card">
          <p className="section-kicker">Demo status</p>
          <p className="page-subtitle">
            This demo environment includes a working municipal command center, route optimization,
            citizen wallet tracking, and reward verification workflow designed for SIH presentation.
          </p>
        </div>
      </section>
    </main>
  );
}
