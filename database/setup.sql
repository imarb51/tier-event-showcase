-- Create the events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  image_url TEXT,
  tier TEXT NOT NULL CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on tier for better query performance
CREATE INDEX IF NOT EXISTS idx_events_tier ON events(tier);

-- Create an index on event_date for better query performance
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date);

-- Insert sample events (2 per tier)
INSERT INTO events (title, description, event_date, image_url, tier) VALUES
-- Free tier events
('Introduction to Web Development', 'Learn the basics of HTML, CSS, and JavaScript in this beginner-friendly workshop. Perfect for those starting their coding journey.', '2025-08-15 14:00:00+00', 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop', 'free'),
('Open Source Community Meetup', 'Join fellow developers to discuss open source projects, collaboration, and community building. Networking and refreshments included.', '2025-08-20 18:00:00+00', 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop', 'free'),

-- Silver tier events
('Advanced React Patterns Workshop', 'Dive deep into advanced React patterns including hooks, context, and performance optimization techniques for enterprise applications.', '2025-08-25 10:00:00+00', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop', 'silver'),
('Cloud Architecture Masterclass', 'Learn how to design scalable cloud architectures with AWS, Docker, and Kubernetes. Hands-on labs included.', '2025-09-01 13:00:00+00', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop', 'silver'),

-- Gold tier events
('AI/ML Engineering Summit', 'Exclusive summit featuring leading AI researchers and engineers. Learn about cutting-edge machine learning techniques and real-world applications.', '2025-09-10 09:00:00+00', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop', 'gold'),
('Startup Founder Mentorship Program', 'One-on-one mentorship sessions with successful startup founders. Limited to 20 participants with personalized guidance.', '2025-09-15 16:00:00+00', 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop', 'gold'),

-- Platinum tier events
('Exclusive Tech Leaders Dinner', 'Private dinner with C-level executives from major tech companies. Network with industry leaders and discuss future trends.', '2025-09-20 19:00:00+00', 'https://images.unsplash.com/photo-1414596447819-0a4cbdcfb6db?w=400&h=200&fit=crop', 'platinum'),
('Innovation Lab Access & Demo Day', 'Behind-the-scenes access to cutting-edge innovation labs and exclusive demo day featuring stealth-mode startups.', '2025-09-25 11:00:00+00', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop', 'platinum');

-- Enable Row Level Security (RLS) for enhanced security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all users to read events
-- In a production environment, you might want to implement tier-based policies
CREATE POLICY "Allow public read access to events" ON events
FOR SELECT USING (true);
