(function () {
  function renderRow(post, showBadge) {
    var badge = (showBadge && post.pinned)
      ? '<span class="tag sample" style="margin-right:10px;">Utvalgt</span>'
      : '';
    var a = document.createElement('a');
    a.className = 'post-row';
    a.href = 'blogg/' + post.slug + '.html';
    a.innerHTML =
      '<span class="date mono">' + post.date + '</span>' +
      '<span class="body">' + badge + '<h3>' + post.title + '</h3><p>' + post.excerpt + '</p></span>' +
      '<span class="arrow mono">→</span>';
    return a;
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof POSTS === 'undefined') return;

    var sorted = POSTS.slice().sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });

    var homeList = document.getElementById('latest-posts');
    if (homeList) {
      var pinned = sorted.filter(function (p) { return p.pinned; });
      var rest = sorted.filter(function (p) { return !p.pinned; });
      var featured = pinned.concat(rest).slice(0, 3);
      featured.forEach(function (p) { homeList.appendChild(renderRow(p, true)); });
    }

    var fullList = document.getElementById('all-posts');
    if (fullList) {
      sorted.forEach(function (p) { fullList.appendChild(renderRow(p, true)); });
    }
  });
})();
