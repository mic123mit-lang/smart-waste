'use client';

import { Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const areaData = [
  { name: 'Mon', collection: 42 },
  { name: 'Tue', collection: 48 },
  { name: 'Wed', collection: 51 },
  { name: 'Thu', collection: 57 },
  { name: 'Fri', collection: 65 },
  { name: 'Sat', collection: 70 },
  { name: 'Sun', collection: 76 },
];

const pieData = [
  { name: 'Plastic', value: 46, fill: '#34d399' },
  { name: 'Paper', value: 27, fill: '#60a5fa' },
  { name: 'Organic', value: 18, fill: '#fbbf24' },
  { name: 'Metal', value: 9, fill: '#f87171' },
];

export default function AnalyticsCharts() {
  return (
    <div className="charts-grid">
      <div className="panel chart-panel">
        <div className="panel-head">
          <h3>Collection trend</h3>
        </div>

        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="collectionFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#6ee7b7" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6ee7b7" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.2)" />
              <XAxis dataKey="name" stroke="var(--muted)" />
              <YAxis stroke="var(--muted)" />
              <Tooltip />
              <Area type="monotone" dataKey="collection" stroke="#6ee7b7" fill="url(#collectionFill)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel chart-panel">
        <div className="panel-head">
          <h3>Waste distribution</h3>
        </div>

        <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={70} innerRadius={28} paddingAngle={3} />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
