(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored === 'blueprint') root.setAttribute('data-theme', 'blueprint');

  function currentTheme() {
    return root.getAttribute('data-theme') === 'blueprint' ? 'blueprint' : 'paper';
  }

  function updateToggleLabel(btn) {
    if (!btn) return;
    var label = btn.querySelector('.label');
    if (label) label.textContent = currentTheme() === 'blueprint' ? 'PAPIR' : 'BLUEPRINT';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('[data-theme-toggle]');
    updateToggleLabel(toggle);
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = currentTheme() === 'blueprint' ? 'paper' : 'blueprint';
        if (next === 'blueprint') {
          root.setAttribute('data-theme', 'blueprint');
        } else {
          root.removeAttribute('data-theme');
        }
        try { localStorage.setItem('theme', next); } catch (e) {}
        updateToggleLabel(toggle);
      });
    }

    var navToggle = document.querySelector('[data-nav-toggle]');
    if (navToggle) {
      navToggle.addEventListener('click', function () {
        document.body.classList.toggle('nav-open');
      });
    }

    var here = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a[href]').forEach(function (a) {
      var href = a.getAttribute('href').split('/').pop();
      if (href === here || (here === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });

    var filterBar = document.querySelector('[data-filter-bar]');
    if (filterBar) {
      var cards = document.querySelectorAll('.card-grid [data-cat]');
      filterBar.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-filter]');
        if (!btn) return;
        filterBar.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          var show = filter === 'alle' || card.getAttribute('data-cat') === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    }
  });
})();
