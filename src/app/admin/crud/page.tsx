'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CrudPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({
    reporter: '',
    location: '',
    type: 'Plastic',
    volumeKg: 40,
    priority: 'Medium',
    status: 'Open',
  });

  async function loadReports() {
    const response = await fetch('/api/reports');
    const data = await response.json();
    setReports(data);
  }

  useEffect(() => {
    loadReports();
  }, []);

  async function handleSave() {
    if (!editingId) return;

    await fetch(`/api/reports/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        volumeKg: Number(form.volumeKg),
      }),
    });

    setEditingId(null);
    setForm({ reporter: '', location: '', type: 'Plastic', volumeKg: 40, priority: 'Medium', status: 'Open' });
    loadReports();
  }

  async function handleDelete(id: number) {
    await fetch(`/api/reports/${id}`, { method: 'DELETE' });
    loadReports();
  }

  function startEdit(report: any) {
    setEditingId(report.id);
    setForm({
      reporter: report.reporter,
      location: report.location,
      type: report.type,
      volumeKg: report.volumeKg,
      priority: report.priority,
      status: report.status,
    });
  }

  return (
    <main className="crud-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <span>SmartWaste</span>
        </div>

        <nav className="sidebar-nav">
          <Link href="/admin" className="nav-item">Overview</Link>
          <Link href="/admin/crud" className="nav-item active">CRUD Manager</Link>
          <Link href="/report" className="nav-item">Report Waste</Link>
        </nav>
      </aside>

      <section className="crud-main">
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">Waste management</p>
            <h1>CRUD operations</h1>
          </div>
          <Link href="/admin" className="secondary-btn link-btn">Back to dashboard</Link>
        </header>

        <div className="panel form-panel">
          <div className="field-row">
            <label>
              Reporter
              <input value={form.reporter} onChange={(e) => setForm({ ...form, reporter: e.target.value })} />
            </label>

            <label>
              Location
              <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </label>
          </div>

          <div className="field-row">
            <label>
              Type
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option>Plastic</option>
                <option>Organic</option>
                <option>Paper</option>
                <option>Metal</option>
                <option>Mixed Waste</option>
              </select>
            </label>

            <label>
              Volume (kg)
              <input type="number" value={form.volumeKg} onChange={(e) => setForm({ ...form, volumeKg: Number(e.target.value) })} />
            </label>
          </div>

          <div className="field-row">
            <label>
              Priority
              <select value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value as any })}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </label>

            <label>
              Status
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as any })}>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </label>
          </div>

          <button className="primary-btn full-width" onClick={handleSave} disabled={!editingId}>
            {editingId ? 'Save changes' : 'Select a report to edit'}
          </button>
        </div>

        <div className="panel full-panel">
          <div className="panel-head">
            <h3>Report records</h3>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Reporter</th>
                <th>Location</th>
                <th>Type</th>
                <th>Volume</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report: any) => (
                <tr key={report.id}>
                  <td>{report.reporter}</td>
                  <td>{report.location}</td>
                  <td>{report.type}</td>
                  <td>{report.volumeKg} kg</td>
                  <td><span className={`severity ${report.priority.toLowerCase()}`}>{report.priority}</span></td>
                  <td><span className={`status-badge ${report.status.toLowerCase().replace(/\s+/g, '-')}`}>{report.status}</span></td>
                  <td className="action-cell">
                    <button className="secondary-btn small-btn" onClick={() => startEdit(report)}>Edit</button>
                    <button className="secondary-btn small-btn danger" onClick={() => handleDelete(report.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
