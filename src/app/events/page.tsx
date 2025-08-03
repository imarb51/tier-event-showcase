'use client';

import { useEffect, useState } from 'react';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Event, UserTier } from '@/types';
import { EventCard } from '@/components/EventCard';
import { TierUpgrade } from '@/components/TierUpgrade';
import { supabase } from '@/lib/supabase';
import { getAccessibleEvents, getInaccessibleEvents } from '@/lib/tier-utils';

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [userTier, setUserTier] = useState<UserTier>('free');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && user) {
      const tier = (user.unsafeMetadata?.tier as UserTier) || 'free';
      setUserTier(tier);
    }
  }, [user, isLoaded]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) {
        throw error;
      }

      setEvents(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  const handleTierChange = (newTier: UserTier) => {
    setUserTier(newTier);
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={fetchEvents}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const accessibleEvents = getAccessibleEvents(events, userTier);
  const inaccessibleEvents = getInaccessibleEvents(events, userTier);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                Tier Event Showcase
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.firstName}!</span>
              <UserButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Events</h1>
          <p className="text-gray-600">
            Discover events available to your tier and explore upgrade options.
          </p>
        </div>

        <TierUpgrade currentTier={userTier} onTierChange={handleTierChange} />

        {accessibleEvents.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Available Events ({accessibleEvents.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accessibleEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  userTier={userTier}
                />
              ))}
            </div>
          </section>
        )}

        {inaccessibleEvents.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Premium Events ({inaccessibleEvents.length})
            </h2>
            <p className="text-gray-600 mb-6">
              Upgrade your tier to access these exclusive events.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inaccessibleEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  userTier={userTier}
                />
              ))}
            </div>
          </section>
        )}

        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events available at the moment.</p>
          </div>
        )}
      </main>
    </div>
  );
}
