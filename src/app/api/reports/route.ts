import { NextResponse } from 'next/server';
import { createReport, getReports } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json(getReports());
}

export async function POST(request: Request) {
  const body = await request.json();

  const report = createReport({
    reporter: body.reporter ?? 'Community Member',
    location: body.location ?? 'Unknown Location',
    type: body.type ?? 'General Waste',
    volumeKg: Number(body.volumeKg ?? 0),
    priority: body.priority ?? 'Medium',
  });

  return NextResponse.json({ success: true, report }, { status: 201 });
}
