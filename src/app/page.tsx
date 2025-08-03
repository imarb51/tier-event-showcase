import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Calendar, Users, Trophy, Star, ArrowRight, Sparkles, Crown, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Tier Event Showcase
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link 
                  href="/events"
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  View Events
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200">
                <Sparkles className="h-4 w-4 mr-2" />
                Tier-Based Event Access
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block">Exclusive Events</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                For Every Tier
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
              Discover premium events tailored to your membership level. From free workshops to platinum exclusives, 
              unlock experiences that match your tier.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <SignedOut>
                <SignInButton>
                  <button className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </SignInButton>
                <button className="inline-flex items-center px-8 py-4 border border-gray-300 text-lg font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Browse Events
                </button>
              </SignedOut>
              <SignedIn>
                <Link 
                  href="/events"
                  className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  View Your Events
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-white/50 backdrop-blur-sm rounded-3xl mx-4 mb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Tier Events?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Access exclusive content based on your membership level
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-shadow">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Access</h3>
                <p className="text-gray-600">
                  Your tier determines your access level. Premium content for premium members.
                </p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-shadow">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Exclusive Community</h3>
                <p className="text-gray-600">
                  Connect with like-minded members in tier-specific events and networking sessions.
                </p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-200">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-xl transition-shadow">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Experiences</h3>
                <p className="text-gray-600">
                  From workshops to VIP dinners, each tier offers unique value and experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="px-4 pb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Choose Your Tier
            </h2>
            <p className="text-xl text-gray-600">
              Each tier unlocks new levels of exclusive content and experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-4">
                <span className="text-lg font-bold text-gray-600">F</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Tier</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Perfect for getting started with basic events and community access.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Basic workshops
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Community meetups
                </div>
              </div>
            </div>

            {/* Silver Tier */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl mb-4">
                <span className="text-lg font-bold text-gray-700">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Silver Tier</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Enhanced access with advanced workshops and premium content.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  All Free tier events
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Advanced workshops
                </div>
              </div>
            </div>

            {/* Gold Tier */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-lg border border-yellow-200 p-6 hover:shadow-xl transition-shadow duration-200 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-xl mb-4">
                <span className="text-lg font-bold text-yellow-800">G</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gold Tier</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Exclusive events and VIP experiences with industry leaders.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  All previous tiers
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  VIP experiences
                </div>
              </div>
            </div>

            {/* Platinum Tier */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg border border-purple-200 p-6 hover:shadow-xl transition-shadow duration-200 relative overflow-hidden">
              <div className="absolute top-2 right-2">
                <Crown className="h-5 w-5 text-purple-500" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                <span className="text-lg font-bold text-purple-800">P</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Platinum Tier</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Ultimate access to all premium content and exclusive experiences.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Everything included
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Private dinners
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-4 mb-8 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of members accessing exclusive tier-based events
          </p>
          <SignedOut>
            <SignInButton>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link 
              href="/events"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </SignedIn>
        </div>
      </main>
    </div>
  );
}
