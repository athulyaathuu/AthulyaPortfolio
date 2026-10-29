// All features fail gracefully if an element is missing.
(function () {
  var $ = function (s) { return document.querySelector(s); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js'); // enables reveal animation only when JS runs

  // Footer year
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  // Mobile menu: toggle, and close after choosing a link or pressing Escape
  var burger = $('#burger'), menu = $('#menu');
  function setMenu(open) { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); }
  if (burger && menu) {
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  // Nav background after scrolling
  var nav = $('#nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 20); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // Active link highlighting + reveal on scroll (IntersectionObserver)
  var links = document.querySelectorAll('nav a[href^="#"]:not(.btn)');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
    var rev = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { rev.observe(el); });
  } else { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); }); }

  // Typing effect (skipped when reduced motion is requested; screen readers use the .sr text)
  var t = $('#typed');
  if (t && !reduce) {
    var phrases = ['Aspiring Security Analyst', 'Web Application Security', 'Vulnerability Assessment & Penetration Testing', 'Security Monitoring & Threat Detection'];
    var p = 0, c = 0, del = false;
    (function tick() {
      var s = phrases[p];
      c += del ? -1 : 1; t.textContent = s.slice(0, c);
      var wait = del ? 30 : 60;
      if (!del && c === s.length) { del = true; wait = 1600; }
      else if (del && c === 0) { del = false; p = (p + 1) % phrases.length; wait = 400; }
      setTimeout(tick, wait);
    })();
  }
})();
