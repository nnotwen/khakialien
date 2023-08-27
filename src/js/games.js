// This file is used by ~/games.html

// Dictionary
const dict = {
  "Local Save":
    "Progress is stored on your browser. Clearing your browser's cache will reset your progress.",
  Meme: "Game assets includes media that existed as a meme.",
  Recreated: "Game was inspired from a known existing game.",
  Sounds: "Game features sound effects and/or background music.",
  Unavailable: "Technical issues prevents access to this game.",
};

$(function () {
  const games = [
    {
      image: "./src/img/games-stick-alien-hero.png",
      title: "Stick Alien Hero",
      text: "Stretch, bridge, conquer! Join Stick Alien Hero in an intergalactic adventure, testing your skills to master cosmic gaps. Can you become the ultimate hero?",
      ref: "https://khakien.gq/games/stick-alien-hero",
      tags: ["Local Save", "Recreated"],
    },
    {
      title: "Alien Mind Meld",
      text: "Unleash your intergalactic memory powers! Join Khaki Alien in this cosmic brain teaser and test your memory skills in a hilariously quirky adventure!",
    },
    {
      title: "Cosmic Blastfield",
      text: "Join Khaki Alien in a whimsical mine-clearing mission across the cosmos! Unveil the hidden alien surprises and navigate through cosmic chaos in this quirky twist on Minesweeper!",
    },
    {
      title: "Space Crossing",
      text: "Blast across the cosmic highway in Space Crossing! Help zany aliens safely navigate intergalactic roads filled with cosmic chaos. It's like Animal Crossing, but with a hilarious twist.",
    },
    {
      title: "Alien Jump",
      text: "Blast off into hilarity with Alien Jump! Help our wacky Khaki Alien bounce to new heights, dodging cosmic obstacles. It's like Doodle Jump, but with an alien twist.",
    },
    {
      image: "./src/img/games-hangman.png",
      title: "Hangman",
      text: "Unleash your cosmic wordplay skills in Khaki Alien's Wacky Hangman! Guess alien-themed words to save our lovable extraterrestrial friend. It's like Hangman, but with a cosmic twist. ",
      ref: "https://khakien.gq/games/hangman",
      tags: ["Meme", "Local Save", "Sounds"],
    },
    {
      title: "Floaty Alien",
      text: "Embark on a cosmic journey with Floaty Alien! Help our lovable Khaki Alien navigate through wacky obstacles with hilarious flaps. It's like Flappy Bird, but with an alien twist. ",
    },
    {
      title: "Running Alien (dino)",
      text: "Join the wacky adventure of Running Alien! Help Khaki Alien dash through cosmic obstacles in this quirky endless runner. It's like the Dino Game on Chrome, but with an alien twist.",
    },
    {
      title: "Password Game",
      text: "POV: You created a new bank account but they say you need to have an ultra secure password. Finish creating the password as soon as possible!",
    },
  ];

  const $row = $("<div></div>")
    .addClass("row row-cols-1 row-cols-md-2 g-4 my-5 mx-auto")
    .appendTo($(".content"))
    .css("max-width", "800px");

  for (const game of games) {
    const $col = $("<div></div>").addClass("col").appendTo($row);
    const $card = $("<div></div>")
      .addClass("card h-100 shadow csk-2")
      .appendTo($col);

    $("<div></div>")
      .addClass("card-header f-silkscreen")
      .appendTo($card)
      .html(game.title || "Placeholder Text");

    const $imgContainer = $("<div></div")
      .addClass("img-container card-img-top overflow-hidden")
      .css("height", "150px")
      .appendTo($card);

    const placeholdURI =
      "https://placehold.co/374x150/201d17/b4aeae/?font=montserrat&text=";
    const src = game.image || placeholdURI + encodeURIComponent("Coming Soon");
    $("<img></img>")
      .addClass("hover-scale img-fluid w-100")
      .attr({ src, alt: "Hero Image" })
      .css({ "min-height": "150px", "border-radius": "0" })
      .appendTo($imgContainer);

    const $body = $("<div></div>")
      .addClass("card-body f-montserrat")
      .appendTo($card);

    const $tags = $("<p></p>").addClass("game-feat").appendTo($body);

    for (const tag of game.tags || ["Unavailable"]) {
      const cls = `btn-outline-${tag == "Unavailable" ? "danger" : "success"}`;
      const $button = $("<a></a>")
        .addClass(`tags btn btn-sm ${cls} rounded-pill me-2 cursor-pointer`)
        .attr({
          tabindex: 0,
          role: "button",
          "data-bs-toggle": "popover",
          "data-bs-trigger": "focus",
          "data-bs-custom-class": "game-tag-popover",
          "data-bs-title": tag,
          "data-bs-content": dict[tag] || "Unavailable",
        })
        .appendTo($tags)
        .html(tag)
        .css({
          "--bs-btn-font-size": "0.60em",
          "--bs-btn-padding-y": "0.35em",
          "--bs-btn-padding-x": "0.65em",
        });
      // Enable popover
      new bootstrap.Popover($button);
    }

    $("<small></small>")
      .addClass("card-text")
      .html(game.text || "Placeholder Desc")
      .appendTo($body);

    const $btnContainer = $("<div></div>")
      .addClass("d-grid gap-2 d-block p-3")
      .appendTo($card);

    const $btn = $("<a></a>")
      .addClass("btn btn-khaki f-silkscreen")
      .appendTo($btnContainer)
      .attr({
        href: game.ref,
        type: "button",
      });

    if (!game.ref) {
      $btn.addClass("disabled");
      $btnContainer.addClass("cursor-not-allowed");
    }

    const icon = $("<i>").addClass("bi-play-fill me-2")[0].outerHTML;
    const text = "Play";
    $btn.html(icon + text);
  }
});
