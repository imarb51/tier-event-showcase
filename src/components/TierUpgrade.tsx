'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { UserTier, TIER_LABELS } from '@/types';

interface TierUpgradeProps {
  currentTier: UserTier;
  onTierChange: (newTier: UserTier) => void;
}

const TIERS: UserTier[] = ['free', 'silver', 'gold', 'platinum'];

export function TierUpgrade({ currentTier, onTierChange }: TierUpgradeProps) {
  const { user } = useUser();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleTierUpgrade = async (newTier: UserTier) => {
    if (!user || isUpdating) return;

    setIsUpdating(true);
    try {
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          tier: newTier,
        },
      });
      onTierChange(newTier);
    } catch (error) {
      console.error('Failed to update tier:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Current Tier: {TIER_LABELS[currentTier]}
      </h2>
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
        <p className="text-sm text-yellow-800">
          <strong>Demo Feature:</strong> In a production app, tier upgrades would require payment processing and admin approval.
        </p>
      </div>
      <p className="text-gray-600 mb-4">
        Simulate different tier levels to test the filtering functionality.
      </p>
      
      <div className="flex flex-wrap gap-2">
        {TIERS.map((tier) => (
          <button
            key={tier}
            onClick={() => handleTierUpgrade(tier)}
            disabled={isUpdating || tier === currentTier}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tier === currentTier
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {isUpdating ? 'Updating...' : `Upgrade to ${TIER_LABELS[tier]}`}
          </button>
        ))}
      </div>
    </div>
  );
}
