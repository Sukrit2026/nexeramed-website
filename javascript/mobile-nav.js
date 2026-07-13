/* Mobile navigation for the legacy Nexera site.
   Injects a sticky top bar with the logo + a hamburger menu on small screens,
   and hides the fixed-width desktop header/nav (via .m-hide, which only takes
   effect under the mobile media query). No dependencies; degrades gracefully
   (with JS off, the original desktop header/nav remains visible). */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  ready(function () {
    var path = location.pathname;
    var inSub = /\/(cfiles|nfiles)\//.test(path);
    var pre = inSub ? '../cfiles/' : 'cfiles/';
    var g = inSub ? '../graphics/' : 'graphics/';
    var cur = path.split('/').pop();

    // Hide the legacy desktop header (has the logo) and nav (has .primarynav)
    var tables = document.querySelectorAll('table[width="970"]');
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].querySelector('img[src*="logo_hdmain"]') ||
          tables[i].querySelector('.primarynav, .primarynavon')) {
        tables[i].classList.add('m-hide');
      }
    }

    var items = [
      ['Home', 'home.html'],
      ['About Nexera', 'about.html'],
      ['Products', 'products.html'],
      ['Resources', 'news_resourcelinks.html'],
      ['Contact Us', 'contact.html']
    ];
    var links = items.map(function (it) {
      return '<a' + (cur === it[1] ? ' class="on"' : '') + ' href="' + pre + it[1] + '">' + it[0] + '</a>';
    }).join('');

    var bar = document.createElement('div');
    bar.className = 'mnav';
    bar.innerHTML =
      '<a class="mnav-logo" href="' + pre + 'home.html"><img src="' + g + 'logo_hdmain.png" alt="Nexera Medical"></a>' +
      '<button class="mnav-toggle" type="button" aria-label="Open menu" aria-expanded="false">' +
        '<span></span><span></span><span></span></button>' +
      '<nav class="mnav-menu">' + links +
        '<div class="mnav-regions"><span>Product Claims:</span>' +
          '<a href="' + pre + 'regulatory.html?region=US"><img src="' + g + 'regionflag_us.png" alt=""> United States</a>' +
          '<a href="' + pre + 'regulatory.html?region=CA"><img src="' + g + 'regionflag_ca.png" alt=""> Canada</a>' +
          '<a href="' + pre + 'regulatory.html?region=EU"><img src="' + g + 'regionflag_eu.png" alt=""> European Union</a>' +
        '</div>' +
      '</nav>';
    document.body.insertBefore(bar, document.body.firstChild);

    var toggle = bar.querySelector('.mnav-toggle');
    toggle.addEventListener('click', function () {
      var open = bar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  });
})();
