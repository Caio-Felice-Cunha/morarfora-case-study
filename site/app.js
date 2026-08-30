import { liveTools } from './links.mjs';

const checklist = document.querySelector('#checklist');
const progress = document.querySelector('#progress');
const state = new Set();

checklist.innerHTML = liveTools.map((tool, index) => `
  <article class="tool-card">
    <span class="number">0${index + 1}</span>
    <div><p class="status-label">Live product</p><h3>${tool.name}</h3><p>${tool.prompt}</p></div>
    <div class="tool-actions"><a href="${tool.url}" target="_blank" rel="noopener noreferrer">Open live tool ↗</a><button type="button" data-tool="${tool.id}" aria-pressed="false">Mark tested</button></div>
  </article>`).join('');

checklist.addEventListener('click', (event) => {
  const button = event.target.closest('[data-tool]');
  if (!button) return;
  const id = button.dataset.tool;
  if (state.has(id)) state.delete(id); else state.add(id);
  button.setAttribute('aria-pressed', String(state.has(id)));
  button.textContent = state.has(id) ? 'Tested ✓' : 'Mark tested';
  progress.textContent = state.size === liveTools.length ? 'Both paths tested — you now have the product shape.' : `${state.size} of ${liveTools.length} paths tested`;
});
