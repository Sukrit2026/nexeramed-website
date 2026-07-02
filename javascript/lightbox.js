/* Lightweight click-to-enlarge lightbox for images with class="zoomable".
   Optional data-full attribute points to a higher-resolution image to show.
   No dependencies. */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Enlarged image');
    var big = document.createElement('img');
    overlay.appendChild(big);
    document.body.appendChild(overlay);

    function close() {
      overlay.classList.remove('open');
      big.removeAttribute('src');
    }
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    var imgs = document.querySelectorAll('img.zoomable');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener('click', function () {
        big.src = this.getAttribute('data-full') || this.src;
        big.alt = this.alt || '';
        overlay.classList.add('open');
      });
    }
  });
})();
