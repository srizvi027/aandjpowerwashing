import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the server handler - it's bundled by Vite as an ES module
let serverModule;

async function getServerModule() {
  if (!serverModule) {
    const serverPath = path.join(__dirname, '../dist/server/server.js');
    serverModule = await import(pathToFileURL(serverPath).href);
  }
  return serverModule;
}

export default async (req, res) => {
  try {
    // Get the server module
    const { default: server } = await getServerModule();

    // Build full URL
    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = new URL(req.url, `${protocol}://${host}`);

    // Collect request body
    let body;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      body = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', (chunk) => chunks.push(chunk));
        req.on('end', () => resolve(Buffer.concat(chunks)));
        req.on('error', reject);
      });
    }

    // Create Fetch API Request
    const fetchRequest = new Request(url.toString(), {
      method: req.method,
      headers: req.headers,
      body: body || undefined,
    });

    // Call the Cloudflare fetch handler
    const fetchResponse = await server.fetch(fetchRequest, {}, {});

    // Convert response status and headers
    res.statusCode = fetchResponse.status;
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
    console.error('SSR handler error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<html><body><h1>500 Internal Server Error</h1><p>${error.message}</p></body></html>`);
  }
};

