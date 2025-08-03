export type UserTier = 'free' | 'silver' | 'gold' | 'platinum';

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string;
  tier: UserTier;
}

export interface UserMetadata {
  tier: UserTier;
}

export const TIER_HIERARCHY: Record<UserTier, number> = {
  free: 1,
  silver: 2,
  gold: 3,
  platinum: 4,
};

export const TIER_COLORS: Record<UserTier, string> = {
  free: 'bg-gray-100 text-gray-800 border-gray-300',
  silver: 'bg-gray-100 text-gray-700 border-gray-400',
  gold: 'bg-yellow-100 text-yellow-800 border-yellow-400',
  platinum: 'bg-purple-100 text-purple-800 border-purple-400',
};

export const TIER_LABELS: Record<UserTier, string> = {
  free: 'Free',
  silver: 'Silver',
  gold: 'Gold',
  platinum: 'Platinum',
};
