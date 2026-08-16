const stats = [
  { label: 'Waste sorted', value: '87%', trend: '+18%' },
  { label: 'Collection efficiency', value: '94%', trend: '+12%' },
  { label: 'CO₂ reduced', value: '1.9k kg', trend: '+34%' },
];

const features = [
  {
    title: 'Smart Recycling Education',
    text: 'Learn how to separate waste correctly with easy visual guidance and localized tips.',
    icon: '♻️',
  },
  {
    title: 'AI Disposal Reminders',
    text: 'Get timely nudges for proper disposal habits and collection schedule alerts.',
    icon: '🔔',
  },
  {
    title: 'Gamified Eco Rewards',
    text: 'Earn eco-badges, streaks, and community recognition for sustainable actions.',
    icon: '🏆',
  },
  {
    title: 'Personalized Recycling Tips',
    text: 'Behavior-based recommendations help users recycle more effectively every week.',
    icon: '🎯',
  },
];

const wasteTypes = [
  { name: 'Plastic', color: '#22c55e', amount: '46%' },
  { name: 'Paper', color: '#60a5fa', amount: '27%' },
  { name: 'Organic', color: '#f59e0b', amount: '18%' },
  { name: 'Metal', color: '#f87171', amount: '9%' },
];

const milestones = [
  'AI-driven route optimization',
  'Real-time bin monitoring',
  'Community recycling engagement',
  'Predictive waste forecasting',
];

export default function Home() {
  return (
    <main className="page-shell landing-shell">
      <section className="hero">
        <nav className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <span>SmartWaste</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#impact">Impact</a>
            <a href="#community">Community</a>
          </div>
          <a href="/login" className="primary-btn link-btn">Get Started</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">AI-powered waste intelligence</span>
            <h1>Smarter streets. Cleaner cities. Better recycling habits.</h1>
            <p>
              SmartWaste combines AI, real-time monitoring, and community engagement to
              reduce overflow, improve collection efficiency, and promote sustainable living.
            </p>
            <div className="cta-row">
              <a href="/login" className="primary-btn link-btn">Launch Dashboard</a>
              <a href="#features" className="secondary-btn link-btn">Explore Features</a>
            </div>
            <div className="mini-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="mini-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                  <em>{stat.trend}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-card main-panel">
              <div className="panel-header">
                <span className="live-pill">Live</span>
                <span>Collection status</span>
              </div>

              <div className="route-box">
                <div className="route-summary">
                  <span>Route 04</span>
                  <strong>12 min</strong>
                </div>
                <div className="route-line" />
                <div className="route-dots">
                  <span className="dot active" />
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>

              <div className="bin-grid">
                <div className="bin-card green">
                  <span>Bin A</span>
                  <strong>76%</strong>
                </div>
                <div className="bin-card amber">
                  <span>Bin B</span>
                  <strong>82%</strong>
                </div>
                <div className="bin-card red">
                  <span>Bin C</span>
                  <strong>96%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-band" id="impact">
        <div>
          <p className="section-kicker">Global challenge</p>
          <h2>Waste generation continues to rise</h2>
        </div>
        <div className="impact-metrics">
          <div>
            <strong>1.3B+</strong>
            <span>tons of plastic waste expected by 2040</span>
          </div>
          <div>
            <strong>3.4B+</strong>
            <span>tons projected by 2050, up ~70%</span>
          </div>
          <div>
            <strong>5.6%</strong>
            <span>CAGR in global waste management market</span>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-head">
          <p className="section-kicker">Core features</p>
          <h2>Everything needed for a smarter, cleaner community</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="analytics" id="community">
        <div className="analytics-card">
          <div className="section-head left">
            <p className="section-kicker">Smart insights</p>
            <h2>Waste mix overview</h2>
          </div>

          <div className="mix-chart">
            {wasteTypes.map((type) => (
              <div key={type.name} className="bar-row">
                <span>{type.name}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: type.amount, background: type.color }} />
                </div>
                <strong>{type.amount}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-card alt">
          <div className="section-head left">
            <p className="section-kicker">AI optimization</p>
            <h2>Operational advantages</h2>
          </div>

          <ul className="milestone-list">
            {milestones.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-strip">
        <div>
          <p className="section-kicker">Why invest</p>
          <h2>Build a cleaner future with AI-powered waste management.</h2>
        </div>
        <a href="/admin" className="primary-btn link-btn">Partner With Us</a>
      </section>
    </main>
  );
}
