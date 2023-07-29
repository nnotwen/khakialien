// File used for any of the html pages in this project
// Consolidated projects from codepen demos
$(function () {
  // Pre-load css
  $(document).ready(function () {
    // Zoom animations
    $(".scroll-zoom-in").each(function () {
      loadDefaultStyles($(this), "zoom");
    });

    // Fade animations
    $(".scroll-fade-in").each(function () {
      loadDefaultStyles($(this), "fade");
    });
  });

  // Page Scrolling Animations
  $(window).scroll(function () {
    // Zoom and fade animations (on scroll)
    // Source: //https://codepen.io/codingtuting/pen/BaBVjRR/

    // Zoom animations
    $(".scroll-zoom-in").each(function () {
      toggleZoomAnimation($(this));
    });
    // Fade animations
    $(".scroll-fade-in").each(function () {
      toggleFadeAnimation($(this));
    });
  });
});

// Load animated background
$(function () {
  const $background = $(".a-alien-bg");
  const $icons = $(".a-alien-icns");
  const common = {
    position: "absolute",
    display: "block",
    "list-style": "none",
    bottom: "-150px",
  };
  const props = [
    {
      left: "25%",
      width: "80px",
      height: "80px",
      "animation-delay": "0s",
    },
    {
      left: "10%",
      width: "35px",
      height: "35px",
      "animation-delay": "2s",
      "animation-duration": "12s",
    },
    {
      left: "70%",
      width: "35px",
      height: "35px",
      "animation-delay": "4s",
    },
    {
      left: "40%",
      width: "60px",
      height: "60px",
      "animation-delay": "0s",
      "animation-duration": "18s",
    },
    {
      left: "65%",
      width: "35px",
      height: "35px",
      "animation-delay": "0s",
    },
    {
      left: "75%",
      width: "110px",
      height: "110px",
      "animation-delay": "3s",
    },
    {
      left: "35%",
      width: "150px",
      height: "150px",
      "animation-delay": "7s",
    },
    {
      left: "50%",
      width: "25px",
      height: "25px",
      "animation-delay": "15s",
      "animation-duration": "45s",
    },
    {
      left: "20%",
      width: "30px",
      height: "30px",
      "animation-delay": "2s",
      "animation-duration": "35s",
    },
    {
      left: "85%",
      width: "150px",
      height: "150px",
      "animation-delay": "0s",
      "animation-duration": "11s",
    },
  ];

  // Add initial css stylings
  $background.css({
    position: "fixed",
    "z-index": -10_000,
    background: "-webkit-linear-gradient(270deg, #ccb79c, #61533c)",
    width: "100%",
    height: "100vh",
  });

  $icons.css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  });

  // Add icons
  for (const prop of props) {
    const $el = $("<li></li>").css(common).css(prop);
    $icons.append($el);
  }
});

function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height() / 2;

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

// ZOOM ANIMATION FUNCTIONS
function loadDefaultStyles(component, type) {
  var options = {
    zoom: {
      "-webkit-transform": "scale(0)",
      transform: "scale(0)",
      transition: "transform 0.8s ease-in-out",
    },
    fade: {
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 1s ease-in-out",
    },
  };
  return component.css(options[type]);
}

function toggleZoomAnimation(component) {
  if (isScrolledIntoView(component))
    return component.css({
      "-webkit-transform": "scale(1)",
      transform: "scale(1)",
    });
}

function toggleFadeAnimation(component) {
  if (isScrolledIntoView(component))
    return component.css({
      opacity: 1,
      visibility: "visible",
    });
}
