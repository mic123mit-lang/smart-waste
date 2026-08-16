import Link from 'next/link';

const steps = [
  'Citizen reports waste or requests pickup.',
  'Municipal command center assigns an optimized route and driver.',
  'Driver verifies arrival, records weight, and uploads evidence.',
  'AI inspection validates the waste and the reward engine credits points.',
  'Citizen views wallet, Waste Passport and environmental impact dashboard.',
];

export default function HowItWorksPage() {
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
          <p className="section-kicker">Workflow</p>
          <h2>From request to verified impact</h2>
          <ul className="milestone-list">
            {steps.map((step, index) => (
              <li key={step}><strong>{index + 1}.</strong> {step}</li>
            ))}
          </ul>
        </div>
        <div className="analytics-card">
          <p className="section-kicker">Core principle</p>
          <h2>Reward verified action, not unverified claims.</h2>
          <p className="page-subtitle">
            Green Points are only generated after collection is completed, evidence is uploaded,
            the GPS route matches, and the waste is validated by the system.
          </p>
        </div>
      </section>
    </main>
  );
}
