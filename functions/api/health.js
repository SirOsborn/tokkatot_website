export async function onRequestGet(context) {
  const { env } = context;
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
