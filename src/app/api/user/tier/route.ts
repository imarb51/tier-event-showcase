import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { UserTier } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { tier }: { tier: UserTier } = await request.json();

    if (!['free', 'silver', 'gold', 'platinum'].includes(tier)) {
      return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });
    }

    // Note: In this implementation, we'll let the client update the metadata directly
    // through Clerk's user.update() method for simplicity
    return NextResponse.json({ success: true, tier });
  } catch (error) {
    console.error('Error updating user tier:', error);
    return NextResponse.json(
      { error: 'Failed to update tier' },
      { status: 500 }
    );
  }
}
