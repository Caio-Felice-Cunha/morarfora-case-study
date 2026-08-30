import { liveTools } from '../site/links.mjs';

let invalid = 0;
for (const tool of liveTools) {
  try {
    const response = await fetch(tool.url, { redirect: 'follow', signal: AbortSignal.timeout(15_000) });
    if (response.status >= 400 && response.status < 500 && response.status !== 429) {
      console.error(`${tool.name}: invalid client response ${response.status}`);
      invalid += 1;
    } else {
      console.log(`${tool.name}: ${response.status}`);
    }
  } catch (error) {
    console.warn(`${tool.name}: transient availability warning — ${error.message}`);
  }
}
if (invalid) process.exit(1);
