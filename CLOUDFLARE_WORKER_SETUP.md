# 🚀 Cloudflare Worker Setup Guide

This guide shows you how to deploy the API endpoint for your static Tokkatot website using Cloudflare Workers.

## Why Cloudflare Workers?

Your website is a **static site** (HTML/CSS/JS only), but you need a backend to:
- Receive form submissions
- Send messages to Telegram
- Keep your Telegram bot token secret

Cloudflare Workers provides a serverless backend that runs on Cloudflare's edge network - perfect for static sites!

## Prerequisites

1. Cloudflare account (free tier works!)
2. Domain managed by Cloudflare (`aztrolabe.com`)
3. Telegram bot token and chat ID

## Step-by-Step Setup

### 1. Install Wrangler CLI

```powershell
npm install -g wrangler
```

### 2. Login to Cloudflare

```powershell
wrangler login
```

This opens a browser window to authenticate.

### 3. Update wrangler.toml

Edit `wrangler.toml` and update:
- `routes` - Change `tokkatot.aztrolabe.com` to your actual domain
- `zone_name` - Your Cloudflare zone (usually your root domain like `aztrolabe.com`)

```toml
routes = [
  { pattern = "tokkatot.aztrolabe.com/api/*", zone_name = "aztrolabe.com" }
]
```

### 4. Set Up Secrets

Add your Telegram credentials as secrets (they won't be in the code):

```powershell
# Set bot token
wrangler secret put TELEGRAM_BOT_TOKEN
# Paste your token when prompted

# Set chat ID
wrangler secret put TELEGRAM_CHAT_ID
# Paste your chat ID when prompted

# (Optional) Set topic ID if using Telegram topics
wrangler secret put TELEGRAM_TOPIC_ID
# Paste your topic ID when prompted
```

### 5. Deploy the Worker

```powershell
wrangler deploy
```

That's it! Your worker is now live at `https://tokkatot.aztrolabe.com/api/*`

## Testing

### Test Health Endpoint

```powershell
curl https://tokkatot.aztrolabe.com/api/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2025-12-26T...",
  "telegram": "configured"
}
```

### Test Form Submission

```powershell
curl -X POST https://tokkatot.aztrolabe.com/api/telegram `
  -H "Content-Type: application/json" `
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+855 12 345 678",
    "message": "This is a test message"
  }'
```

Check your Telegram group for the message!

## How It Works

```
User fills form → POST /api/telegram → Cloudflare Worker → Telegram API → Your group
                                    ↓
                              Bot token stays secret!
```

## Updating the Worker

After making changes to `worker.js`:

```powershell
wrangler deploy
```

## Troubleshooting

### "Route not found" error
- Check `wrangler.toml` has correct domain
- Ensure domain is on Cloudflare (orange cloud icon)

### "Telegram not configured" error
- Run `wrangler secret list` to check if secrets are set
- Re-run `wrangler secret put TELEGRAM_BOT_TOKEN`

### 405 Method Not Allowed
- Worker isn't deployed yet - run `wrangler deploy`
- Route pattern doesn't match - check `wrangler.toml`

## Cost

Cloudflare Workers Free Tier:
- 100,000 requests per day
- More than enough for a contact form!

## Alternative: Cloudflare Pages Functions

If your site is on **Cloudflare Pages**, you can also use Pages Functions:
1. Create `functions/api/telegram.ts`
2. Deploy with your Pages site
3. No separate worker needed!

Let me know if you want the Pages Functions version instead!
