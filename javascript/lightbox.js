/* Lightweight click-to-enlarge lightbox for images with class="zoomable".
   Optional data-full attribute points to a higher-resolution image to show.
   No dependencies. Close by tapping the backdrop, the × button, or Escape. */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var imgs = document.querySelectorAll('img.zoomable');
    if (!imgs.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Enlarged image');

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.type = 'button';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.innerHTML = '&times;';

    var big = document.createElement('img');
    overlay.appendChild(closeBtn);
    overlay.appendChild(big);
    document.body.appendChild(overlay);

    function close() {
      overlay.classList.remove('open');
      big.removeAttribute('src');
    }
    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    for (var i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', function () {
        var thumb = this.getAttribute('src');
        big.onerror = function () { if (big.src.indexOf(thumb) === -1) big.src = thumb; };
        big.src = this.getAttribute('data-full') || thumb;
        big.alt = this.alt || '';
        overlay.classList.add('open');
      });
    }
  });
})();
