(function () {
  var menuButton = document.querySelector("[data-menu-button]");
  var menu = document.querySelector("[data-menu]");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".ui-nav-link"));
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function setMenuState(expanded) {
    if (!menuButton || !menu) {
      return;
    }
    menuButton.setAttribute("aria-expanded", expanded ? "true" : "false");
    menu.classList.toggle("hidden", !expanded);
  }

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") === "true";
      setMenuState(!expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          setMenuState(false);
        }
      });
    });
  }

  function activateNav(sectionId) {
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + sectionId;
      link.classList.toggle("is-active", isActive);
    });
  }

  function detectCurrentSection() {
    if (!sections.length) {
      return;
    }
    var active = sections[0].id;
    var offset = 140;
    sections.forEach(function (section) {
      var top = section.getBoundingClientRect().top;
      if (top - offset <= 0) {
        active = section.id;
      }
    });
    activateNav(active);
  }

  if (sections.length) {
    detectCurrentSection();
    window.addEventListener("scroll", detectCurrentSection, { passive: true });
  }

  var yearNode = document.querySelector("[data-current-year]");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
})();
