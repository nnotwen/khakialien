$(function () {
  const loadingAfterxSeconds = setTimeout(function () {
    $(".infinitely-loading").show();
  }, 10_000);
  document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      setTimeout(function () {
        $(".loading-page").fadeOut("slow", function () {
          $(".page-loaded").fadeIn("slow");
          clearTimeout(loadingAfterxSeconds);
        });
      }, 1000); //1secs delay
    }
  };

  $(".share-button").on("click", function () {
    navigator.share({
      url: window.location.origin + window.location.pathname,
      title: document.title,
    });
  });

  $(window).scroll(function () {
    // Show/hide back to top button
    var topBtn = $(".back-to-top-button");
    if ($(window).scrollTop() > 300) {
      topBtn.addClass("button-show");
    } else {
      topBtn.removeClass("button-show");
    }
    topBtn.on("click", function (e) {
      e.preventDefault();
      $("html, body").stop(true, false).animate({ scrollTop: 0 }, 300);
    });

    //https://codepen.io/codingtuting/pen/BaBVjRR/
    //Zoom-in
    $(".scroll-zoom-in").each(function () {
      var zoomIn = 1,
        zoomOut = 0;
      if (isScrolledIntoView($(this))) {
        $(this).css({
          "-webkit-transform": "scale(" + zoomIn + ")",
          transform: "scale(" + zoomIn + ")",
        });
      }

      // else{
      //     $(this).css({
      //         '-webkit-transform': 'scale(' + zoomOut + ')',
      //         'transform': 'scale(' + zoomOut + ')'
      //     });
      // }
    });

    //Fade-in
    $(".scroll-fade-in").each(function () {
      if (isScrolledIntoView($(this))) {
        $(this).css({
          opacity: 1,
          visibility: "visible",
        });
      }
      // else{
      //     $(this).css({
      //         'opacity':0,
      //         'visibility':'hidden'
      //     });
      // }
    });
  });
});

function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
