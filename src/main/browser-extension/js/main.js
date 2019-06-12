$(window).on("load", function(){
  setInterval(function(){
    let e = document.querySelector("div#content>div");
    if (e && e.style.position != "absolute") {
      e.style.position = "absolute";
      e.style.display = "block";
      e.style.flexGrow = "unset";
    }

    ["#workGalahadWebChromeEntity",
     "#workGalahadWebChromeEntity div#contentArea",
     "#timeline_tab_content>div>div",
     "._7ibx"].forEach(function(q) {
      let e = document.querySelector(q);
      if (e && e.style.width != "100%") {
        e.style.maxWidth = "100%";
        e.style.width = "100%";
        e.style.left = "0";
      }
    });
    document.querySelectorAll("._6uka").forEach(function(e) {
      e.style.width = "100%";
      e.style.left = "0";
    });

    document.querySelectorAll(".mtm:not(.scalable)").forEach(function(e) {
      if (null == e.querySelector("._50zm")) {
        e.classList.add("scalable");
      }
    });

  }, 100);
});
