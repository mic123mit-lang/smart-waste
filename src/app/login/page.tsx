'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { demoCredentials } from '@/lib/mockData';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('citizen@smartwaste.ai');
  const [password, setPassword] = useState('citizen123');
  const [role, setRole] = useState('Citizen');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok || !data.success) {
      setError(data.message || 'Login failed');
      return;
    }

    if (role === 'Citizen') router.push('/citizen/dashboard');
    else if (role === 'Driver') router.push('/driver/dashboard');
    else if (role === 'Municipal') router.push('/admin/dashboard');
    else router.push('/admin/dashboard');
  }

  return (
    <main className="auth-shell">
      <div className="auth-card auth-card-large">
        <div className="auth-brand">
          <div className="brand-mark">S</div>
          <div>
            <p className="eyebrow">SmartWaste AI</p>
            <h1>Secure access</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Role
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option>Citizen</option>
              <option>Driver</option>
              <option>Municipal</option>
              <option>Administrator</option>
            </select>
          </label>

          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>

          {error ? <p className="form-error">{error}</p> : null}

          <button className="primary-btn full-width" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="demo-list-wrap">
          <p className="demo-label">Demo credentials</p>
          <div className="demo-list">
            {demoCredentials.map((entry) => (
              <div key={entry.role} className="demo-row">
                <strong>{entry.role}</strong>
                <span>{entry.email}</span>
                <small>{entry.password}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-links">
          <Link href="/">Back home</Link>
          <Link href="/register">Create account</Link>
        </div>
      </div>
    </main>
  );
}
