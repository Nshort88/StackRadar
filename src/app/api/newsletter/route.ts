import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    // In production, integrate with free email tier (e.g. Resend, MailerLite, or Brevo):
    // e.g. await resend.contacts.create({ email, audienceId: '...' });

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully! Watch your inbox for software coupon drops.',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process subscription' }, { status: 500 });
  }
}
