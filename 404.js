// Jquery should be present on the html file for this script to run
// Also relies on bootstrap icon

const bgIcon =
  "data:image/svg+xml,%3Csvg viewBox='0 0 72 72' id='emoji' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='color'%3E%3Cpolygon fill='%239B8468' points='10,21 10,35 13,35 13,38 16,38 16,45 22,45 22,51 27,51 28,51 28,45 44,45 44,51 50,51 50,45 56,45 56,38 59,38 59,35 62,35 62,20 56,20 56,24 56,25 49,25 49,20 45,20 45,14 39,14 39,20 32,20 32,14 26,14 26,20 22,20 22,25 16,25 16,20 10,20'/%3E%3Crect x='16' y='51' width='6' height='6' fill='%239B8468'/%3E%3Crect x='50' y='51' width='6' height='6' fill='%239B8468'/%3E%3C/g%3E%3Cg id='line'%3E%3Crect x='25.175' y='31' width='3.6' height='6' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='22,45 16,45 16,39'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='22.583,25 22.583,20 26,20'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='48.708,25 48.708,20 45.292,20'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='13,35 10,35 10,20 16,20 16,35'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='56,35 56,20 62,20 62,35 59,35'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='26,20 26,14 32,14 32,20'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='39,20 39,14 45,14 45,20'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='16,35 19,35 19,38 13,38 13,35'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='59,35 59,38 53,38 53,35 56,35'/%3E%3Crect x='16' y='51' width='6' height='6' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Crect x='50' y='51' width='6' height='6' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='28,45 28,51 22,51 22,45'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='50,45 56,45 56,39'/%3E%3Cpolyline fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' points='44,45 44,51 50,51 50,45'/%3E%3Crect x='43.425' y='31' width='3.6' height='6' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cpath fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M44,45L44,45z'/%3E%3Cpath fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M39,20L39,20z'/%3E%3Cpath fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16,25L16,25z'/%3E%3Cpath fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M49,25L49,25z'/%3E%3Cline x1='28' x2='44' y1='45' y2='45' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cline x1='32' x2='39' y1='20' y2='20' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cline x1='16' x2='22' y1='25' y2='25' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3Cline x1='49' x2='56' y1='25' y2='25' fill='none' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E";

// Create background animation
$(function () {
  const $ul = $("<ul class='icons'></ul>") //
    .css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "95%",
      height: "100%",
      "margin-top": 0,
    });

  for (i = 0; i < 10; i++) {
    $("<li></li>")
      .appendTo($ul) //
      .css({
        // DEFAULT VALUES
        position: "absolute",
        display: "block",
        background: bgIcon,
        bottom: "-150px",
        "list-style": "none",
        // VARYING VALUES
        left: [
          "25%",
          "10%",
          "70%",
          "40%",
          "65%",
          "75%",
          "35%",
          "50%",
          "20%",
          "85%",
        ][i],
        width: [
          "80px",
          "30px",
          "30px",
          "60px",
          "30px",
          "110px",
          "150px",
          "35px",
          "40px",
          "150px",
        ][i],
        height: [
          "80px",
          "30px",
          "30px",
          "60px",
          "30px",
          "110px",
          "150px",
          "35px",
          "40px",
          "150px",
        ][i],
        "animation-delay": [
          "0s",
          "2s",
          "4s",
          "0s",
          "0s",
          "3s",
          "7s",
          "15s",
          "2s",
          "0s",
        ][i],
        "animation-duration": [
          "16s",
          "12s",
          "25s",
          "18s",
          "22s",
          "16s",
          "20s",
          "45s",
          "35s",
          "11s",
        ][i],
      });
  }

  $(".animation")
    .css("width", "100%") //
    .append($ul);
});

// Create the context area
$(function () {
  const title = "404 Page: Lost in the Cosmic Abyss";
  const subtext =
    "Oops! Lost in the Cosmic Abyss? Join our celestial quest to find your way back to the cosmic hub. Embrace the wonders of our digital universe as we navigate through uncharted territory. Return, explore, and let the cosmic journey continue!";

  const $context = $(".context").css("color", "#fff");

  const $container = $("<div></div>")
    .appendTo($context) //
    .css({
      margin: "auto",
      padding: "20px",
      "max-width": "600px",
    });

  $("<h1></h1>")
    .addClass("glitch font-silkscreen") //
    .appendTo($container)
    .html(title);

  $("<p></p>")
    .html(subtext)
    .appendTo($container) //
    .css({
      "text-align": "justify",
      "text-shadow": "0 0 10px #3b3224",
      "padding-top": "20px",
    });

  $("<a></a>")
    .appendTo($container) //
    .addClass("btn font-silkscreen")
    .html('<i class="bi-caret-left-fill"></i> GO BACK')
    .attr({
      type: "button",
      href: "/",
    })
    .css({
      color: "#e9d8be",
      border: "1px solid #30291d",
      "background-color": "#3b3224",
      "margin-top": "15px",
      "font-size": "24px",
    });
});
