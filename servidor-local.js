const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const root = __dirname;
const port = Number(process.env.PORT || 8000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
};

http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Pedido inválido');
    return;
  }

  const requested = pathname === '/' ? '/campo-de-batalha.html' : pathname;
  const file = path.resolve(root, `.${requested}`);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403).end('Acesso negado');
    return;
  }

  fs.readFile(file, (error, data) => {
    if (error) {
      res.writeHead(error.code === 'ENOENT' ? 404 : 500).end('Ficheiro não encontrado');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, '0.0.0.0', () => {
  console.log('\nDuelis Card Astra está disponível nesta rede:');
  for (const addresses of Object.values(os.networkInterfaces())) {
    for (const address of addresses || []) {
      if (address.family === 'IPv4' && !address.internal) {
        console.log(`  http://${address.address}:${port}/`);
      }
    }
  }
  console.log('\nMantém esta janela aberta enquanto jogas. Ctrl+C encerra o servidor.');
});

