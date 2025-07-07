import { NextRequest, NextResponse } from 'next/server';
import { registerUser } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, password } = await req.json();

    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Register user
    const user = await registerUser({
      firstName,
      lastName,
      email,
      password,
    });

    return NextResponse.json(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        message: 'User registered successfully',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in register route:', error);

    if (error.message === 'User already exists') {
      return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
    }

    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 });
  }
}
