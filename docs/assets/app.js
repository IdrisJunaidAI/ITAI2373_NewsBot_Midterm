(function () {
  "use strict";
  var cards = document.getElementById("cards");
  var count = document.getElementById("count");
  var empty = document.getElementById("empty");
  var search = document.getElementById("search");
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var active = "All";
  var projects = [];
  function node(tag, className, value) {
    var item = document.createElement(tag);
    if (className) item.className = className;
    if (value !== undefined) item.textContent = value;
    return item;
  }
  function makeCard(p) {
    var article = node("article", "project-card");
    var meta = node("div", "project-meta");
    meta.append(node("span", "", p.track.toUpperCase()), node("span", "", p.date));
    article.append(meta, node("h3", "", p.title), node("p", "", p.description));
    var tags = node("div", "tags");
    p.skills.forEach(function (skill) { tags.append(node("span", "", skill)); });
    article.append(tags, node("p", "proof", p.status + " • " + p.evidence));
    var link = node("a", "", p.label + " ↗");
    link.href = p.link;
    article.append(link);
    return article;
  }
  function render() {
    var query = search.value.trim().toLowerCase();
    var selected = projects.filter(function (p) {
      return (active === "All" || p.track === active) &&
        [p.title, p.description, p.evidence, p.track, p.status].concat(p.skills).join(" ").toLowerCase().includes(query);
    });
    cards.replaceChildren();
    selected.forEach(function (p) { cards.append(makeCard(p)); });
    count.textContent = selected.length + " of " + projects.length + " portfolio entries";
    empty.hidden = selected.length !== 0;
  }
  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      active = button.dataset.filter;
      filters.forEach(function (b) {
        var chosen = b === button;
        b.classList.toggle("active", chosen);
        b.setAttribute("aria-pressed", String(chosen));
      });
      render();
    });
  });
  search.addEventListener("input", render);
  fetch("projects.json").then(function (response) {
    if (!response.ok) throw Error("Portfolio data unavailable");
    return response.json();
  }).then(function (data) {
    projects = data;
    render();
  }).catch(function () {
    count.textContent = "The interactive project gallery needs to be served from a website.";
    empty.hidden = false;
    empty.textContent = "Browse the complete evidence index in PORTFOLIO.md or serve the docs directory with a local web server.";
    var fallback = node("a", "", "Open the portfolio directory ↗");
    fallback.href = "../PORTFOLIO.md";
    cards.append(fallback);
  });
}());
