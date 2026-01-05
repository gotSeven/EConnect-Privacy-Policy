(function () {
  // Read lang param from query string (e.g. ?lang=zh)
  const params = new URLSearchParams(window.location.search);
  const theme = (params.get("theme") || "light").toLowerCase();

  if (theme === "dark") {
    document.body.classList.add("dark");
  }
})();
