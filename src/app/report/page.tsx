'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const initialForm = {
  reporter: '',
  location: '',
  type: 'Plastic',
  volumeKg: 40,
  priority: 'Medium',
};

export default function ReportPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm(initialForm);
    }

    setLoading(false);
  }

  return (
    <main className="report-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <span>SmartWaste</span>
        </div>

        <nav className="sidebar-nav">
          <Link href="/admin" className="nav-item">Overview</Link>
          <Link href="/report" className="nav-item active">Report Waste</Link>
          <Link href="/" className="nav-item">Home</Link>
        </nav>
      </aside>

      <section className="report-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Community reporting</p>
            <h1>Report waste issue</h1>
          </div>
          <Link href="/admin" className="secondary-btn link-btn">Back to dashboard</Link>
        </header>

        <div className="panel form-panel">
          <form onSubmit={handleSubmit} className="report-form">
            <div className="field-row">
              <label>
                Reporter name
                <input
                  type="text"
                  value={form.reporter}
                  onChange={(e) => setForm({ ...form, reporter: e.target.value })}
                  required
                />
              </label>

              <label>
                Location
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  required
                />
              </label>
            </div>

            <div className="field-row">
              <label>
                Waste type
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                  <option>Plastic</option>
                  <option>Organic</option>
                  <option>Paper</option>
                  <option>Metal</option>
                  <option>Mixed Waste</option>
                </select>
              </label>

              <label>
                Estimated volume (kg)
                <input
                  type="number"
                  min={0}
                  value={form.volumeKg}
                  onChange={(e) => setForm({ ...form, volumeKg: Number(e.target.value) })}
                />
              </label>
            </div>

            <label>
              Priority
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value as any })}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <button type="submit" className="primary-btn full-width" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit waste report'}
            </button>

            {submitted ? <p className="success-message">Report submitted successfully.</p> : null}
          </form>
        </div>
      </section>
    </main>
  );
}
