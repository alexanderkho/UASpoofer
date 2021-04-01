(() => {
  var setUA = function () {
    Object.defineProperty(navigator, "userAgent", {
      get: function () {
        return `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36
      `;
      },
    });
  };

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setUA();
  } else {
    document.addEventListener("DOMContentLoaded", setUA, false);
  }
})();
