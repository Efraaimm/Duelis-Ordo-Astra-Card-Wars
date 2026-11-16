import { mkdir, copyFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const out = join(root, 'www');
const assets = [
  'herois-20-retratos.png',
  'herois-20-retratos-extra.png',
  'herois-unidades.png',
  'herois-unidades-extra.png',
  'acoes-cartas.png',
  'campo-castelo-epico.png',
  'campo-floresta-batalha.png'
];

await mkdir(out, { recursive: true });
await copyFile(join(root, 'preview.html'), join(out, 'index.html'));
for (const asset of assets) {
  await access(join(root, asset));
  await copyFile(join(root, asset), join(out, asset));
}
console.log('Web app preparada em /www com o jogo e os 7 recursos gráficos.');
