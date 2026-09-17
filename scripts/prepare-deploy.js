import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const distDocsDir = path.resolve('dist', 'docs');
const rootDocsDir = path.resolve('docs');

if (!fs.existsSync(distDocsDir)) {
  fs.mkdirSync(distDocsDir, { recursive: true });
}
if (!fs.existsSync(rootDocsDir)) {
  fs.mkdirSync(rootDocsDir, { recursive: true });
}

const entries = fs.readdirSync(distDir, { withFileTypes: true });
for (const entry of entries) {
  if (entry.name === 'docs') continue;
  const src = path.join(distDir, entry.name);
  const destInDistDocs = path.join(distDocsDir, entry.name);
  const destInRootDocs = path.join(rootDocsDir, entry.name);

  fs.cpSync(src, destInDistDocs, { recursive: true, force: true });
  fs.cpSync(src, destInRootDocs, { recursive: true, force: true });
}

console.log('Successfully prepared root and docs deployment directories.');
