$(window).on("load", function(){
  setInterval(function(){
    ["div#contentArea", "#timeline_tab_content>div>div"].forEach(function(q) {
      let e = document.querySelector(q);
      if (e && e.style.width != "100%") {
        e.style.position = "absolute";
        e.style.width = "100%";
        e.style.left = "0";
      }
    });
  }, 100);
});
