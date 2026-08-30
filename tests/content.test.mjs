import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { liveTools } from '../site/links.mjs';

test('only the two approved live routes are published', () => {
  assert.equal(liveTools.length, 2);
  assert.deepEqual(liveTools.map((tool) => tool.id), ['crs', 'cities']);
  assert.equal(liveTools.some((tool) => /tcf/i.test(tool.url)), false);
});

test('page contains the educational-use boundary', async () => {
  const html = await readFile(new URL('../site/index.html', import.meta.url), 'utf8');
  assert.match(html, /not immigration advice/i);
  assert.doesNotMatch(html, /api[_-]?key|password|token=/i);
});
