import { NextResponse } from 'next/server';
import { deleteReport, getReportById, updateReport } from '@/lib/mockData';

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const parsedId = Number(id);
  const body = await request.json();
  const report = updateReport(parsedId, body);

  if (!report) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 });
  }

  return NextResponse.json(report);
}

export async function DELETE(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const parsedId = Number(id);
  const report = getReportById(parsedId);

  if (!report) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 });
  }

  deleteReport(parsedId);
  return NextResponse.json({ success: true, id: parsedId });
}
