# Tier-Based Event Showcase

A responsive web application built with Next.js 14 that allows logged-in users to view events based on their membership tier. Users can only see events available to their tier or any lower tier.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router) with TypeScript
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 📋 Features

- **Authentication**: Complete Clerk.dev integration with login/signup
- **Tier-Based Access**: Users can only see events for their tier and below
- **Event Management**: Events stored in Supabase with tier-based filtering
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Tier Upgrade**: Simulate tier upgrades through the UI (Demo feature)
- **Loading States**: Proper loading and error handling
- **Protected Routes**: Events page requires authentication

## 🎯 Tier Hierarchy

- **Free**: Access to Free tier events only
- **Silver**: Access to Free + Silver tier events
- **Gold**: Access to Free + Silver + Gold tier events  
- **Platinum**: Access to all events (Free + Silver + Gold + Platinum)

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Git installed
- Supabase account
- Clerk.dev account

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tier-event-showcase.git
cd tier-event-showcase
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy the environment template:
```bash
cp .env.example .env.local
```

Fill in your environment variables in `.env.local`:
```env
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Supabase Configuration  
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Clerk redirect URLs (already configured)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/events
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/events
```

### 4. Database Setup
1. Create a new Supabase project
2. Run the SQL script in `database/setup.sql` in your Supabase SQL editor
3. This will create the events table and insert sample data

### 5. Clerk Setup
1. Create a new Clerk application
2. Configure the redirect URLs in your Clerk dashboard
3. Copy your publishable key and secret key to `.env.local`

### 6. Run the Application
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄️ Database Schema

### Events Table
```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  image_url TEXT,
  tier TEXT NOT NULL CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Set these environment variables in your deployment platform:
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`

## 📁 Project Structure

```
src/
├── app/
│   ├── api/user/tier/          # API routes for tier management
│   ├── events/                 # Events page (protected)
│   ├── sign-in/[[...sign-in]]/ # Clerk sign-in pages
│   ├── sign-up/[[...sign-up]]/ # Clerk sign-up pages
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout with Clerk provider
│   └── page.tsx                # Home page
├── components/
│   ├── EventCard.tsx           # Event display component
│   └── TierUpgrade.tsx         # Tier upgrade component
├── lib/
│   ├── supabase.ts             # Supabase client configuration
│   └── tier-utils.ts           # Tier filtering utilities
├── types/
│   └── index.ts                # TypeScript type definitions
└── middleware.ts               # Clerk middleware for route protection
```

## 🔧 Development Notes

### Tier-Based Filtering Logic
The application uses a hierarchy system where each tier has a numeric value:
- Free: 1, Silver: 2, Gold: 3, Platinum: 4

Users can access events with tier values less than or equal to their tier level.

### Security Features
- **Route Protection**: `/events` route requires authentication
- **Row Level Security**: Enabled on Supabase
- **Client-Side Filtering**: Events are filtered based on user tier
- **Metadata Storage**: User tiers stored in Clerk's metadata

## 📄 License

This project is created for demonstration purposes.

---

**Built with ❤️ using Next.js, Clerk, and Supabase**
