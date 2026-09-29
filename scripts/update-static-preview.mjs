import { cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Refresh only the committed preview from the completed production build.
const build = fileURLToPath(new URL('../dist/stackline-angular-multiselect-angular-22/browser/', import.meta.url));
const preview = fileURLToPath(new URL('../stackblitz-static/', import.meta.url));
await rm(preview, { recursive: true, force: true });
await cp(build, preview, { recursive: true });
console.log('Updated stackblitz-static from the production build.');
