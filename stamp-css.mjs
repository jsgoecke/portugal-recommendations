// Cache-busting: stamp a short content hash of tailwind.css into the
// stylesheet link in index.html, so browsers/CDNs always fetch the current
// CSS after a rebuild (the filename itself stays tailwind.css).
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const hash = createHash('md5')
  .update(readFileSync('tailwind.css'))
  .digest('hex')
  .slice(0, 8);

let html = readFileSync('index.html', 'utf8');
html = html.replace(/tailwind\.css(\?v=[a-f0-9]+)?"/, `tailwind.css?v=${hash}"`);
writeFileSync('index.html', html);
console.log(`stamped tailwind.css?v=${hash}`);
