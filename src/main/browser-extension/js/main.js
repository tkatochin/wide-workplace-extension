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
      if (null != e.querySelector("img.img")) {
        e.classList.add("scalable");
      }
    });

    document.querySelectorAll('a.see_more_link .see_more_link_inner').forEach(function(e) {
      if (!e.dataset.handlerAssigned) {
        var postMessage = e.closest('[data-testid="post_message"]');
        if (postMessage) {
          var oldHeight = postMessage.offsetHeight;
          e.addEventListener("click", function(ev) {
            setTimeout(function() {
              var newHeight = postMessage.offsetHeight;
              if (newHeight >= oldHeight * 2) {
                postMessage.classList.add("multiColumns");
              }
            }, 10);
          });
        }
        e.dataset.handlerAssigned = "assigned";
      }
    });

  }, 200);
});
