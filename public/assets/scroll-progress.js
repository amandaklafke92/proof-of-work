(() => {
  if (document.querySelector('[data-scroll-progress]')) return;

  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  scrollProgress.setAttribute('role', 'progressbar');
  scrollProgress.setAttribute('aria-label', 'Page scroll progress');
  scrollProgress.setAttribute('aria-valuemin', '0');
  scrollProgress.setAttribute('aria-valuemax', '100');
  scrollProgress.setAttribute('aria-valuenow', '0');
  scrollProgress.dataset.scrollProgress = '';
  document.body.prepend(scrollProgress);

  let progressFrame;

  const updateScrollProgress = () => {
    progressFrame = undefined;
    const pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollableHeight = Math.max(0, pageHeight - window.innerHeight);
    const progress = scrollableHeight === 0
      ? 0
      : Math.min(1, Math.max(0, window.scrollY / scrollableHeight));

    scrollProgress.style.setProperty('--scroll-progress', String(progress));
    scrollProgress.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
  };

  const requestProgressUpdate = () => {
    if (progressFrame === undefined) {
      progressFrame = window.requestAnimationFrame(updateScrollProgress);
    }
  };

  window.addEventListener('scroll', requestProgressUpdate, { passive: true });
  window.addEventListener('resize', requestProgressUpdate);
  window.addEventListener('load', requestProgressUpdate, { once: true });

  if ('ResizeObserver' in window) {
    const contentObserver = new ResizeObserver(requestProgressUpdate);
    contentObserver.observe(document.documentElement);
    contentObserver.observe(document.body);
  }

  requestProgressUpdate();
})();
