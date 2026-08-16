export type WasteMixEntry = {
  name: string;
  value: number;
  color: string;
};

export type RouteAlert = {
  id: number;
  bin: string;
  location: string;
  fillLevel: number;
  eta: string;
  status: 'Critical' | 'Warning' | 'Scheduled';
};

export type ReportItem = {
  id: number;
  reporter: string;
  location: string;
  type: string;
  volumeKg: number;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Resolved';
  createdAt: string;
};

export function getDashboardData() {
  const wasteMix: WasteMixEntry[] = [
    { name: 'Plastic', value: 46, color: '#34d399' },
    { name: 'Paper', value: 27, color: '#60a5fa' },
    { name: 'Organic', value: 18, color: '#fbbf24' },
    { name: 'Metal', value: 9, color: '#f87171' },
  ];

  const routeAlerts: RouteAlert[] = [
    { id: 1, bin: 'Bin A-12', location: 'City Center', fillLevel: 91, eta: '8 min', status: 'Critical' },
    { id: 2, bin: 'Bin B-05', location: 'Green Park', fillLevel: 73, eta: '16 min', status: 'Warning' },
    { id: 3, bin: 'Bin C-17', location: 'Old Market', fillLevel: 67, eta: '21 min', status: 'Scheduled' },
  ];

  const weeklyTrend = [32, 41, 48, 46, 59, 63, 71];

  return {
    summary: {
      totalBins: 128,
      activeAlerts: 9,
      collectionRate: 94,
      recycledToday: 1840,
      avgRouteTime: 28,
      complianceScore: 88,
    },
    wasteMix,
    routeAlerts,
    weeklyTrend,
    recentReports: [
      { id: 101, title: 'Overflow near bus stop', zone: 'North Gate', severity: 'High' },
      { id: 102, title: 'Unsorted recyclable bags', zone: 'Market Square', severity: 'Medium' },
      { id: 103, title: 'Dustbin damaged', zone: 'Lakeside', severity: 'Low' },
    ],
    topZones: ['Central Plaza', 'Market Square', 'Green Park', 'Old Town'],
  };
}

const initialReports: ReportItem[] = [
  {
    id: 1,
    reporter: 'Nina Patel',
    location: 'Central Plaza',
    type: 'Plastic',
    volumeKg: 120,
    priority: 'High',
    status: 'In Progress',
    createdAt: '2026-08-16T09:20:00Z',
  },
  {
    id: 2,
    reporter: 'Marcus Lee',
    location: 'Market Square',
    type: 'Organic',
    volumeKg: 86,
    priority: 'Medium',
    status: 'Open',
    createdAt: '2026-08-16T08:10:00Z',
  },
  {
    id: 3,
    reporter: 'Aisha Khan',
    location: 'Green Park',
    type: 'Paper',
    volumeKg: 64,
    priority: 'Low',
    status: 'Resolved',
    createdAt: '2026-08-15T16:45:00Z',
  },
];

export function getReports(): ReportItem[] {
  return initialReports;
}

export function getReportById(id: number) {
  return initialReports.find((report) => report.id === id) ?? null;
}

export function updateReport(id: number, updates: Partial<ReportItem>) {
  const index = initialReports.findIndex((report) => report.id === id);

  if (index === -1) {
    return null;
  }

  initialReports[index] = { ...initialReports[index], ...updates };
  return initialReports[index];
}

export function deleteReport(id: number) {
  const index = initialReports.findIndex((report) => report.id === id);

  if (index === -1) {
    return false;
  }

  initialReports.splice(index, 1);
  return true;
}

export function createReport(input: {
  reporter: string;
  location: string;
  type: string;
  volumeKg: number;
  priority: ReportItem['priority'];
}) {
  const newReport: ReportItem = {
    id: Date.now(),
    reporter: input.reporter,
    location: input.location,
    type: input.type,
    volumeKg: input.volumeKg,
    priority: input.priority,
    status: 'Open',
    createdAt: new Date().toISOString(),
  };

  initialReports.unshift(newReport);
  return newReport;
}

export function getAdminOverview() {
  return {
    members: [
      { name: 'Maya Chen', role: 'Operations Manager', active: true },
      { name: 'Daniel Cruz', role: 'Route Coordinator', active: true },
      { name: 'Priya Nair', role: 'Field Inspector', active: false },
    ],
    tasks: [
      'Review North Gate overflow alert',
      'Assign new collection route for Market Square',
      'Confirm recycled volume summary for today',
    ],
  };
}
