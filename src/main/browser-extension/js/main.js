const updateRightPane = function() {
  $("#rightCol")
    .attr("tabindex", "0")
    .removeClass("pined")
    .off("focus")
    .on("focus", function(ev) {
      $("#rightCol").addClass("pined");
    })
    .off("mousedown")
    .on("mousedown", function(ev) {
      ev.stopPropagation();
    });
  $(document.body)
    .off("mousedown")
    .on("mousedown", function(ev) {
      $("#rightCol").removeClass("pined");
    });
}

$(window).on("load", function(){
  $(document.head).append(
    $("<link/>").attr("rel", "stylesheet").attr("type", "text/css")
      .attr("href", chrome.runtime.getURL("css/patch.css"))
  );
  // rightColが書き換えられてるのに、MutationObserverもhashchangeも検知しない…。
  // 仕方がないので div#content.fb_content のこの更新検知で行う。
  let observer = new MutationObserver(mutations=>{
    mutations.some(mutation=>{
      let nodes = Array.from(mutation.addedNodes);
      nodes.push(mutation.target);
      nodes = nodes.concat(Array.from(mutation.removedNodes));
      nodes.some(node=>{
        if (node instanceof HTMLDivElement && $(node).attr("id")) {
          if ($(node).attr("id") == "content") {
            console.dir(node);
            // 子要素の中のrightColが作り変えられると予測して時間を空けて実施
            setTimeout(function(){
              let rightCol = $("#rightCol");
              if (rightCol[0] && rightCol.attr("tabindex") != "0") {
                updateRightPane();
              }
            }, 300);
            return true;
          }
        }
      });
    });
  });
  observer.observe(document.querySelector("#content"), {
    childList: true,
    subtree: true,
  });
  updateRightPane();
});
