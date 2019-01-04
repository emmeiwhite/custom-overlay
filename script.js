(function() {
  var openBtn = document.querySelector(".openBtn");
  var overlay = document.querySelector(".overlay");

  openBtn.addEventListener("click", function(e) {
    overlay.style.cssText = "opacity:1;z-index:999";
  });

  var closeBtn = document.querySelector(".closeBtn");
  closeBtn.addEventListener("click", function(e) {
    overlay.style.cssText = "opacity:0;z-index:-999";
  });
})();
