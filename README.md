# Tokkatot Website

Official website for Tokkatot - Smart Chicken Farming Solution for Cambodia.

## About

Tokkatot provides innovative smart solutions that integrate IoT, AI and Automation for chicken farming in Cambodia, helping farmers increase productivity and efficiency through smart technology.

## Features

- 🌍 **Multi-language Support**: English, Khmer (ខ្មែរ), and Chinese (中文)
- 🎨 **Modern UI**: glassmorphism design with backdrop blur effects
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with Vite and React 19
- 🎭 **Dynamic Backgrounds**: Custom background images with smoky greenish overlays
- 👥 **Team Showcase**: Dark-themed floating portraits with glowing platforms
- 📲 **Telegram Integration**: Contact form messages sent directly to Telegram via Cloudflare Workers
- ☁️ **Serverless API**: Cloudflare Workers handle backend - no Node.js server required
- ✨ **Modern Glassmorphic Form**: Professional contact form with blur effects and smooth animations
- 🎯 **Animated SVG Icons**: Professional animated icons throughout the site
- ✨ **Interactive Effects**: Modern hover effects, smooth transitions, and micro-interactions
- 📋 **Smart Clipboard**: Click-to-copy phone number functionality
- 🔄 **Zigzag Timeline**: Feature showcase with alternating layout
- 🎪 **Horizontal Carousel**: Scrolling card animation in About section
- 🌫️ **Atmospheric Effects**: Smoky overlays and glowing elements

## Design Highlights

### Navbar
- **iOS Glassmorphism**: Translucent frosted glass with backdrop blur (20px)
- **Modern Buttons**: Equal-sized nav items with hover lift animations
- **Segmented Control**: Language switcher styled as iOS segmented control
- **Mobile Menu**: Full-width glassmorphic menu with smooth transitions

### Hero Section
- **Animated Icons**: Custom SVG icons for features with smooth animations
- **Modern Layout**: Clean hero design with clear call-to-actions

### Features Section
- **Zigzag Timeline**: Alternating left-right layout for visual interest
- **Multi-column Background**: Grid of chicken farm images with dark overlay
- **High Z-index Content**: Ensures text and cards stay sharp above background

### About Section
- **Horizontal Carousel**: Auto-scrolling cards with infinite loop animation
- **Static Visual**: Right-side image with heavy atmospheric overlay
- **Faded Background**: Award night image with greenish smoky effect

### Team Section
- **Dark Greenish Theme**: Atmospheric background matching site aesthetic
- **Floating Portraits**: Images appear to float on glowing yellow platforms
- **Internal Smoke**: Soft fade effect inside portrait area
- **Background Glow**: Light green/white radial gradient behind portraits
- **Interactive Cards**: Hover effects with smooth animations

### Contact Section
- **Chickenfarm Background**: Real farm imagery with smoky greenish overlay
- **iOS Glassmorphism Form**: Ultra-modern form card with backdrop blur (40px)
- **Animated SVG Icons**: Email envelope, phone ring, location pulse
- **Interactive Contact Cards**: Glassmorphic cards with hover effects
- **Smart Interactions**: 
  - Email: Opens default mail app
  - Phone: Copies to clipboard with visual feedback
  - Location: Static display
- **Enhanced Inputs**: Larger, fully-fitted text boxes with focus glow
- **Modern Submit Button**: 
  - Glassmorphic gradient design with shimmer animation
  - Professional SVG icons (no emojis)
  - Color-changing states (gold → teal when sending)
  - Smooth cubic-bezier transitions
- **Status Messages**: Glassmorphic cards with slide-down animation and color-coded feedback

### Footer
- **Dark Greenish Theme**: Gradient background with atmospheric glow
- **Animated Social Links**: Pulse effects and hover animations
- **Consistent Styling**: Matches overall site aesthetic

## Tech Stack

- **Framework**: React 19.2.0 with TypeScript 5.9.3
- **Build Tool**: Vite 7.2.5 (Rolldown experimental)
- **Backend**: Cloudflare Workers (Serverless)
  - Handles `/api/telegram` endpoint on the edge
  - Telegram Bot integration (native fetch API)
  - Zero cold starts, globally distributed
  - Free tier: 100,000 requests/day
- **Internationalization**: i18next + react-i18next (EN, KM, ZH)
- **Fonts**: Inter (English), Kontumruy (Khmer), Noto Sans SC (Chinese)
- **Styling**: CSS3 with modern features:
  - Glassmorphism with `backdrop-filter` and blur effects
  - CSS Grid and Flexbox layouts
  - CSS animations and keyframes (shimmer, spin, slide-down)
  - Radial and linear gradients
  - Mask images for fading effects
  - Transform and translate effects
  - Custom cubic-bezier timing functions

## Brand Colors

- Primary: `#20A39E` (Teal)
- Secondary: `#FFBA49` (Gold)
- Accent: `#EF5B5B` (Coral)
- Power White: `#FEFEFE`

## Project Structure

```
tokkatot_website/
├── src/
│   ├── assets/          # Images (team portraits, backgrounds, logo)
│   ├── components/      # React components (Navbar, Hero, Team, etc.)
│   ├── i18n.ts         # Internationalization configuration
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Getting Started

```bash
# Install dependencies
npm install

# Development (run both servers)
# Terminal 1: Backend server
node server.js

# Terminal 2: Frontend dev server
npm run dev

# Build for production
npm run build

# Start production server (serves built app + Telegram API)
node server.js
```

## Telegram Integration ✅

Contact form messages are automatically sent to your Telegram group's "Messages" topic.

**Status**: ✅ Fully tested and working
- Bot: @tokkatot_pigeon_bot
- Target: Tokkatot Team → Messages topic
- Last tested: December 25, 2025
- Form submissions: ✅ Working in production

**Development Setup**:
- Vite proxy configured to forward `/api/*` requests to backend (port 3000)
- Run both servers: `node server.js` + `npm run dev`
- Frontend (localhost:5173) → Backend (localhost:3000)

**For Deployment**:
- The `.env` file contains all necessary credentials
- Simply copy `.env` to the production server
- No additional setup required

## Deployment

The website is ready for deployment to a home server with Cloudflare.

### Docker Deployment (Recommended)

```bash
# 1. Ensure .env file exists with Telegram credentials
# 2. Build and start the container
docker-compose up -d

# 3. Check logs
docker-compose logs -f

# 4. Test the deployment
curl http://localhost:3000/api/health

# Stop the container
docker-compose down
```

### Manual Deployment

```bash
# 1. Copy project files and .env to server
# 2. Install dependencies
npm install

# 3. Build React app
npm run build

# 4. Start server
node server.js

# Or use PM2 for process management
pm2 start server.js --name tokkatot
pm2 save
pm2 startup
```

**Server Requirements:**
- Node.js 20 or higher
- Port 3000 available
- `.env` file with Telegram credentials

## Development

This project uses:
- React with TypeScript for type safety
- Vite for fast development and optimized builds
- Express.js for backend API and serving production build

## Contact

- **Email**: tokkatot.info@gmail.com
- **Phone**: +855 61 747 269
- **CEO**: Yung Sreyneang

## License

Private - © 2025 Tokkatot
