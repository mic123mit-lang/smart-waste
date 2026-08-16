'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const wasteCategories = [
  'Plastic',
  'Paper',
  'Metal',
  'Glass',
  'Organic',
  'E-waste',
  'Mixed waste',
  'Construction waste',
  'Other',
];

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: 'Nina Patel',
    email: 'nina@smartwaste.ai',
    password: 'citizen123',
    category: 'Plastic',
    location: 'Sector 21, Lane 4',
    notes: 'Plastic packaging and paper bags left near the park',
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reporter: form.name,
        location: form.location,
        type: form.category,
        volumeKg: 5,
        priority: 'Medium',
      }),
    });

    setLoading(false);
    router.push('/citizen/dashboard');
  }

  return (
    <main className="auth-shell">
      <div className="auth-card auth-card-large">
        <div className="auth-brand">
          <div className="brand-mark">S</div>
          <div>
            <p className="eyebrow">SmartWaste AI</p>
            <h1>Citizen registration</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field-row">
            <label>
              Full name
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </label>
            <label>
              Email
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </label>
          </div>

          <div className="field-row">
            <label>
              Password
              <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
            </label>
            <label>
              Waste category
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                {wasteCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Location
            <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
          </label>

          <label>
            Notes
            <textarea rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </label>

          <button className="primary-btn full-width" type="submit" disabled={loading}>
            {loading ? 'Submitting report...' : 'Create account & report waste'}
          </button>
        </form>

        <div className="inline-links">
          <Link href="/login">Existing account</Link>
          <Link href="/">Back home</Link>
        </div>
      </div>
    </main>
  );
}
