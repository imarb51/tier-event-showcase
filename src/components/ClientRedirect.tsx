'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function ClientRedirect() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Only redirect if auth is loaded and user is signed in
    if (isLoaded && isSignedIn) {
      setIsRedirecting(true);
      // Add a small delay to prevent flash
      const timer = setTimeout(() => {
        router.push('/events');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isSignedIn, isLoaded, router]);

  // Show redirecting message for signed-in users
  if (isLoaded && isSignedIn && isRedirecting) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Redirecting to your events...</p>
        </div>
      </div>
    );
  }

  // Don't render anything for signed-out users or while loading
  return null;
}
