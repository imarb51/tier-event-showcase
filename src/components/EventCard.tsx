'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, MapPin, Lock } from 'lucide-react';
import { Event, TIER_COLORS, TIER_LABELS, UserTier } from '@/types';
import { canAccessEvent } from '@/lib/tier-utils';

interface EventCardProps {
  event: Event;
  userTier: UserTier;
}

export function EventCard({ event, userTier }: EventCardProps) {
  const canAccess = canAccessEvent(userTier, event.tier);
  const tierColorClass = TIER_COLORS[event.tier];

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${
      !canAccess ? 'opacity-60' : ''
    }`}>
      <div className="relative">
        <Image
          src={event.image_url || 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop'}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        {!canAccess && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <Lock className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Upgrade to {TIER_LABELS[event.tier]} to access</p>
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${tierColorClass}`}>
            {TIER_LABELS[event.tier]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {format(new Date(event.event_date), 'MMM dd, yyyy')}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            Online Event
          </div>
        </div>
      </div>
    </div>
  );
}
