import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? '').trim().toLowerCase();
  const password = String(body.password ?? '');

  if (email === 'admin@smartwaste.com' && password === 'admin123') {
    return NextResponse.json({
      success: true,
      user: {
        name: 'Maya Chen',
        role: 'Operations Manager',
        email,
        token: 'demo-admin-token',
      },
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: 'Invalid email or password. Try admin@smartwaste.com / admin123',
    },
    { status: 401 }
  );
}
