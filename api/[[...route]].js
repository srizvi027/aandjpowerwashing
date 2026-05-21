import server from '../dist/server/server.js';

// Adapt Cloudflare fetch handler to Vercel Node.js handler
export default async (req, res) => {
  try {
    // Build full URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);

    // Create Fetch API Request from Node.js req
    const body =
      req.method !== 'GET' && req.method !== 'HEAD'
        ? Buffer.concat(
            await new Promise((resolve, reject) => {
              const chunks = [];
              req.on('data', (chunk) => chunks.push(chunk));
              req.on('end', () => resolve(chunks));
              req.on('error', reject);
            })
          )
        : undefined;

    const fetchRequest = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body,
    });

    // Call the Cloudflare fetch handler
    const fetchResponse = await server.fetch(fetchRequest, {}, {});

    // Convert Fetch API Response to Node.js res
    res.statusCode = fetchResponse.status;

    // Set headers
    fetchResponse.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send body
    if (fetchResponse.body) {
      const buffer = await fetchResponse.arrayBuffer();
      res.end(Buffer.from(buffer));
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Handler error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};
