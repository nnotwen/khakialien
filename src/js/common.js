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

// Disclaimer on footer
$(function () {
  const year = new Date().getFullYear();
  $(".copyright-disclaimer").append(
    `<i class="bi-c-circle me-1"></i>2021 - ${year} Khaki Alien. All rights reserved.`
  );
});

// Codepen Attribution Modal <Footer>
$(function () {
  const contributors = [
    {
      title: "Animated Border Lines on Hover",
      url: "https://codepen.io/SitePoint/pen/zwaGXR/",
      author: "SitePoint",
    },
    {
      title: "Animation on Scroll using CSS and jQuery",
      url: "https://codepen.io/codingtuting/pen/BaBVjRR/",
      author: "codingtuting",
    },
    {
      title: "Background Animation",
      url: "https://codepen.io/BjornRombaut/pen/mOLGgX",
      author: "Bjorn",
    },
    {
      title: "Curve SVG Background Animation",
      url: "https://codepen.io/armantaherian/pen/ZyZWVZ",
      author: "Arman",
    },
    {
      title: "Section Separation Inspiration",
      url: "https://codepen.io/lukeyphills/pen/kdgNxW",
      author: "Luke Femur",
    },
    {
      title: "Stick Hero with Canvas",
      url: "https://codepen.io/HunorMarton/pen/xxOMQKg",
      author: "Hunor Marton Borbely",
    },
  ];

  // Requires src/extension/bootstrapComponents
  const modal = new BootstrapModal("codepenAttributionModal");
  const $body = $("<div></div>");

  $("<p></p>")
    .addClass("mb-4")
    .appendTo($body)
    .html(
      "Special thanks to these Codepen users for sharing their projects and making parts of this website functional."
    );

  const $ul = $("<ul></ul>").appendTo($body);
  for (const contributor of contributors) {
    const $li = $("<li></li>").addClass("mb-3").appendTo($ul);

    const $title = $("<a></a>")
      .addClass("csk-2 text-decoration-none")
      .addClass("text-hover-underline cursor-pointer")
      .html(`<strong>${contributor.title}</strong>`)
      .attr({
        href: contributor.url,
        target: "_blank",
      });

    const $author = $("<a></a>")
      .addClass("csk-2 text-decoration-none")
      .addClass("text-hover-underline cursor-pointer")
      .html(`<i>${contributor.author}</i>`)
      .attr({
        href: contributor.url.split("/pen/")[0],
        target: "_blank",
      });

    $li.html(`${$title[0].outerHTML} by ${$author[0].outerHTML}`);
  }

  modal
    .setHeader("Codepen Attributions")
    .setBody($body)
    .setFooter("", true)
    .init();
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
