const stats = [
  { label: 'Waste sorted', value: '87%', trend: '+18%' },
  { label: 'Collection efficiency', value: '94%', trend: '+12%' },
  { label: 'CO₂ reduced', value: '1.9k kg', trend: '+34%' },
];

const features = [
  {
    title: 'Predict waste demand',
    text: 'Forecast waste generation by ward, time, and type to deploy the right vehicle at the right time.',
    icon: '📈',
  },
  {
    title: 'AI route optimization',
    text: 'Minimize travel distance and response time with smart routing across all active collection tasks.',
    icon: '🛰️',
  },
  {
    title: 'Verified Green Rewards',
    text: 'Reward citizens only after collection is verified, geo-validated, and evidence-backed.',
    icon: '🏆',
  },
  {
    title: 'Illegal dumping detection',
    text: 'Cluster repeated violations to detect high-risk dumping zones and trigger municipal action.',
    icon: '🚨',
  },
  {
    title: 'Waste Passport tracking',
    text: 'Every pickup creates a transparent lifecycle from citizen report to recycling outcome.',
    icon: '🧾',
  },
  {
    title: 'Clean City Score',
    text: 'Benchmark every ward using collection coverage, complaints, and recycling performance.',
    icon: '🌿',
  },
];

const wasteTypes = [
  { name: 'Plastic', color: '#22c55e', amount: '46%' },
  { name: 'Paper', color: '#60a5fa', amount: '27%' },
  { name: 'Organic', color: '#f59e0b', amount: '18%' },
  { name: 'Metal', color: '#f87171', amount: '9%' },
];

const milestones = [
  'AI-powered waste intelligence',
  'Verified collection workflow',
  'Rewards tied to real, validated action',
  'Municipal command center and ward tracking',
];

export default function Home() {
  return (
    <main className="page-shell landing-shell">
      <section className="hero">
        <nav className="topbar">
          <div className="brand-wrap">
            <div className="brand-mark">S</div>
            <span>SmartWaste AI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#impact">Impact</a>
            <a href="#community">Community</a>
            <a href="/about">About</a>
          </div>
          <div className="header-actions">
            <a href="/login" className="secondary-btn link-btn">Login</a>
            <a href="/register" className="primary-btn link-btn">Report Waste</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Smart India Hackathon 2026</span>
            <h1>Smart Waste. Smarter Cities.</h1>
            <p>
              An AI-powered waste management ecosystem that predicts waste, optimizes collection,
              verifies pickups, and rewards responsible citizens only for validated action.
            </p>
            <div className="cta-row">
              <a href="/register" className="primary-btn link-btn">Report Waste</a>
              <a href="#features" className="secondary-btn link-btn">Explore Smart City</a>
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
          <p className="section-kicker">Smart city challenge</p>
          <h2>Waste generation keeps rising without precision collection.</h2>
        </div>
        <div className="impact-metrics">
          <div>
            <strong>1.3B+</strong>
            <span>plastic waste tons projected globally by 2040</span>
          </div>
          <div>
            <strong>3.4B+</strong>
            <span>tons expected by 2050 without smarter systems</span>
          </div>
          <div>
            <strong>18%</strong>
            <span>average route distance savings from AI optimization</span>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="section-head">
          <p className="section-kicker">Core ecosystem</p>
          <h2>Designed to connect citizens, workers, and municipal teams in one intelligent loop.</h2>
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
            <p className="section-kicker">AI insights</p>
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
            <p className="section-kicker">System advantages</p>
            <h2>Operational intelligence</h2>
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
          <p className="section-kicker">Demo-ready platform</p>
          <h2>From citizen report to verified reward and smart city analytics.</h2>
        </div>
        <div className="cta-row compact">
          <a href="/login" className="secondary-btn link-btn">Open demo</a>
          <a href="/admin/dashboard" className="primary-btn link-btn">Municipal command center</a>
        </div>
      </section>
    </main>
  );
}
