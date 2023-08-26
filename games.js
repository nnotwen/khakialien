// let setContentHeight;

// $(function () {
//   const $navbar = $(".navbar");
//   const $content = $(".content");
//   const $footer = $(".footer");

//   setContentHeight = () => {
//     const height =
//       $(window).outerHeight() - $footer.outerHeight() - $navbar.outerHeight();

//     return $content.css("min-height", height);
//   };

//   $(window).on("resize", () => setContentHeight());
// });

$(function () {
  const $row = htmlTag("div", "row row-cols-1 row-cols-md-2 g-4", "", {
    "data-bs-theme": "dark",
  })
    .css("margin", "50px auto 100px auto")
    .css("max-width", "800px")
    .appendTo($(".content"));

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
    {},
  ];

  const generateCard = (entry) => {
    const $col = htmlTag("div", "col").appendTo($row);
    const $card = htmlTag("div", "card h-100 shadow")
      .appendTo($col)
      .append(
        htmlTag(
          "div",
          "card-header font-silkscreen",
          entry.title || "Placeholder Text"
        )
      );

    const $img = htmlTag("img", "hover-scale img-fluid", "", {
      src:
        entry.image ||
        `https://placehold.co/374x150/212529/adb5bd/?text=${encodeURIComponent(
          entry.title || "Coming Soon"
        )}`,
    }).css("min-height", "150px");

    $img.on("load", () => setContentHeight());

    // Add image to card
    htmlTag("div", "img-container card-img-top")
      .css("overflow", "hidden")
      .css("height", "150px")
      .css("border-radius", 0)
      .appendTo($card)
      .append($img);

    const $tags = htmlTag("p", "game-feat");
    for (const tag of entry.tags || ["Unavailable"]) {
      htmlTag(
        "button",
        `tags btn btn-outline-${
          tag == "Unavailable" ? "danger" : "success"
        } btn-sm`,
        tag,
        {
          type: "button",
        }
      )
        .appendTo($tags)
        .css({
          "--bs-btn-font-size": "0.60em",
          "--bs-btn-padding-y": "0.35em",
          "--bs-btn-padding-x": "0.65em",
          "border-radius": "50rem",
        });

      $tags.append("\u2000");
    }

    // Add body to card
    const $body = htmlTag("div", "card-body")
      .append($tags)
      .append(htmlTag("small", "card-text", entry.text || "Placeholder Desc"))
      .appendTo($card);

    // Make button block
    const $btnContainer = htmlTag("div", "d-grid gap-2 d-md-block") //
      .css("padding", "16px")
      .appendTo($card);

    // Button for card
    const $btn = htmlTag(
      "a",
      `btn btn-success${entry.ref ? "" : " disabled"}`,
      "<i class='bi-play-fill'></i>\u2000Play",
      {
        href: entry.ref || "#",
        type: "button",
      }
    ).appendTo($btnContainer);

    if (!entry.ref) {
      $btn.attr("incomplete", "true");
    }
  };

  for (const game of games) generateCard(game);
});

function htmlTag(tag, cls, content = "", attributes = {}) {
  return $(
    `<${tag} class="${cls}" ${Object.entries(attributes)
      .map(([i, j]) => `${i}=${j}`)
      .join(" ")}>${content}</${tag}>`
  );
}
