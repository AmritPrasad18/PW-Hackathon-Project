/* =====================================================
   JS - Copy to Clipboard + Dark Mode
   ===================================================== */
(function(){
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem('theme');
  const initial = saved || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', initial);

  window.toggleTheme = function(){
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    // Update button text on all pages
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.textContent = next === 'light' ? '🌙 Dark' : '☀️ Light';
    });
  }

  // Set initial label
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const current = document.documentElement.getAttribute('data-theme');
      btn.textContent = current === 'light' ? '🌙 Dark' : '☀️ Light';
    });
  });
})();

function copySnippet(id, btn){
  const el = document.getElementById(id);
  if(!el) return;
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
  if(btn){
    btn.classList.add('copied');
    const original = btn.textContent;
    btn.textContent = '✓ Copied';
    setTimeout(()=>{ btn.classList.remove('copied'); btn.textContent = original; }, 1400);
  }
}
