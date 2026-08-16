import { NextResponse } from 'next/server';
import { getDashboardData } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json(getDashboardData());
}
