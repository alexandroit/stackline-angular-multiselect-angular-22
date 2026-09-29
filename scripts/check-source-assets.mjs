import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const build = resolve(root, process.argv[2] || 'dist/stackline-angular-multiselect-angular-22/browser');
const sourceFiles = [
  'src/app/app.component.html',
  'src/app/app.component.ts',
  'package.json',
  'src/app/app.component.scss',
  'src/app/app.module.ts',
  'src/main.ts'
];

for (const file of sourceFiles) {
  assert.deepEqual(await readFile(resolve(build, 'source', file)), await readFile(resolve(root, file)),
    `Published source differs from the running app: ${file}`);
}
assert.ok((await readFile(resolve(build, '3rdpartylicenses.txt'), 'utf8')).includes('MIT'),
  'The static bundle must retain dependency licenses');
const manifest = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
const installed = JSON.parse(await readFile(resolve(root, 'node_modules/@stackline/angular-multiselect-dropdown/package.json'), 'utf8'));
assert.equal(installed.version, manifest.dependencies['@stackline/angular-multiselect-dropdown']);
console.log(`PASS: ${sourceFiles.length} source assets are byte-identical; installed library ${installed.version}`);
