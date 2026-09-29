import { copyFile } from 'node:fs/promises';

// Angular writes licenses beside browser/, while static hosts deploy browser/ itself.
const output = new URL('../dist/stackline-angular-multiselect-angular-22/', import.meta.url);
await copyFile(new URL('3rdpartylicenses.txt', output), new URL('browser/3rdpartylicenses.txt', output));
