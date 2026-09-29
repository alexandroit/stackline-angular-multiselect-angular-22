import assert from 'node:assert/strict';
import test from 'node:test';

import { readFile } from 'node:fs/promises';
import { once } from 'node:events';

import { serveStatic, sendInternalServerError } from './static-server.mjs';

test('internal server errors do not expose exception details', () => {
  const result = {};
  const response = {
    writeHead(status, headers) {
      result.status = status;
      result.headers = headers;
    },
    end(body) {
      result.body = body;
    }
  };
  const originalConsoleError = console.error;
  console.error = () => {};

  try {
    sendInternalServerError(response, new Error('/private/path/secret.txt'));
  } finally {
    console.error = originalConsoleError;
  }

  assert.equal(result.status, 500);
  assert.equal(result.body, 'Internal server error');
  assert.equal(result.body.includes('/private/path'), false);
});

test('the static preview serves real source and never disguises missing source as the app', async () => {
  const server = serveStatic({ host: '127.0.0.1', port: 0 });
  await once(server, 'listening');
  try {
    const base = `http://127.0.0.1:${server.address().port}`;
    const source = await fetch(`${base}/source/package.json`);
    assert.equal(source.status, 200);
    assert.equal(await source.text(), await readFile(new URL('../package.json', import.meta.url), 'utf8'));
    const missing = await fetch(`${base}/source/missing.ts`);
    assert.equal(missing.status, 404);
    assert.equal(await missing.text(), 'Source file not found');
    const app = await fetch(`${base}/`);
    assert.equal(app.status, 200);
    assert.match(await app.text(), /<app-root>/);
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
