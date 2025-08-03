import { UserTier, TIER_HIERARCHY } from '@/types';

export function canAccessEvent(userTier: UserTier, eventTier: UserTier): boolean {
  return TIER_HIERARCHY[userTier] >= TIER_HIERARCHY[eventTier];
}

export function getAccessibleEvents<T extends { tier: UserTier }>(
  events: T[],
  userTier: UserTier
): T[] {
  return events.filter(event => canAccessEvent(userTier, event.tier));
}

export function getInaccessibleEvents<T extends { tier: UserTier }>(
  events: T[],
  userTier: UserTier
): T[] {
  return events.filter(event => !canAccessEvent(userTier, event.tier));
}

export function formatTier(tier: UserTier): string {
  return tier.charAt(0).toUpperCase() + tier.slice(1);
}
