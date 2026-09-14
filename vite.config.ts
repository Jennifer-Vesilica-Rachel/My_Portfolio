import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/contact', (req: any, res: any, next: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const { name, email, message, organization, category } = data;
              if (!name || !email || !message) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: 'Name, email, and message are required.' }));
                return;
              }
              console.log(`[Contact API] Message from ${name} (${email}) | Category: ${category || 'General'} | Org: ${organization || 'None'}`);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                message: 'Your message has been received successfully by the contact service.',
                timestamp: new Date().toISOString(),
              }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload in request.' }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), contactApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
