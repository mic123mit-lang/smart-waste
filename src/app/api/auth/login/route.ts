import { NextResponse } from 'next/server';
import { demoCredentials } from '@/lib/mockData';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email ?? '').trim().toLowerCase();
  const password = String(body.password ?? '');
  const role = String(body.role ?? 'Citizen');

  const credential = demoCredentials.find(
    (item) => item.email.toLowerCase() === email && item.password === password && item.role === role
  );

  if (credential) {
    return NextResponse.json({
      success: true,
      user: {
        name:
          credential.role === 'Citizen'
            ? 'Nina Patel'
            : credential.role === 'Driver'
              ? 'Anil Verma'
              : credential.role === 'Municipal'
                ? 'Maya Chen'
                : 'System Administrator',
        role: credential.role,
        email,
        token: `demo-${credential.role.toLowerCase()}-token`,
      },
    });
  }

  const adminFallback = email === 'admin@smartwaste.com' && password === 'admin123';
  if (adminFallback) {
    return NextResponse.json({
      success: true,
      user: {
        name: 'System Administrator',
        role: 'Administrator',
        email,
        token: 'demo-admin-token',
      },
    });
  }

  const citizenFallback = email === 'citizen@smartwaste.ai' && password === 'citizen123';
  if (citizenFallback) {
    return NextResponse.json({
      success: true,
      user: {
        name: 'Nina Patel',
        role: 'Citizen',
        email,
        token: 'demo-citizen-token',
      },
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: 'Invalid email or password. Use the demo credentials from the login page.',
    },
    { status: 401 }
  );
}
