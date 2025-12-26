// Cloudflare Worker for Tokkatot Website
// Handles contact form submissions and sends to Telegram
// Deploy this to Cloudflare Workers at your domain

export default {
  async fetch(request, env) {
    // Handle CORS preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    const url = new URL(request.url);

    // Health check endpoint
    if (url.pathname === '/api/health' && request.method === 'GET') {
      return new Response(JSON.stringify({
        status: 'ok',
        timestamp: new Date().toISOString(),
        telegram: env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID ? 'configured' : 'not configured'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Contact form submission endpoint
    if (url.pathname === '/api/telegram' && request.method === 'POST') {
      try {
        // Parse request body
        const body = await request.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
          return new Response(JSON.stringify({
            error: 'Missing required fields',
            required: ['name', 'email', 'message']
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        // Check Telegram credentials
        if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
          return new Response(JSON.stringify({
            error: 'Telegram not configured',
          }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }

        // Format Telegram message
        const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone || 'Not provided'}

💬 *Message:*
${message}

🕐 *Time:* ${new Date().toLocaleString('en-US', { 
  timeZone: 'Asia/Phnom_Penh',
  dateStyle: 'full',
  timeStyle: 'short'
})}

🌐 *Source:* Tokkatot Website
        `.trim();

        // Prepare Telegram API payload
        const telegramPayload = {
          chat_id: env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        };

        // Add topic ID if configured
        if (env.TELEGRAM_TOPIC_ID) {
          telegramPayload.message_thread_id = parseInt(env.TELEGRAM_TOPIC_ID);
        }

        // Send to Telegram
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(telegramPayload),
          }
        );

        const telegramData = await telegramResponse.json();

        if (!telegramData.ok) {
          console.error('Telegram API error:', telegramData);
          throw new Error('Failed to send to Telegram');
        }

        // Success response
        return new Response(JSON.stringify({
          success: true,
          message: 'Message sent successfully to Telegram'
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });

      } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({
          error: 'Failed to send message',
          details: error.message
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // Return 404 for unknown routes
    return new Response('Not Found', { status: 404 });
  },
};
