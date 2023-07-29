$(function () {
  const modal = new bootstrap.Modal($(".modal")[0]);

  let tries = 7;
  let randomizer = Math.floor(Math.random() * 100000);
  let won = false;
  let score = 0;
  let totalScore = 0;

  // Averages;
  let durationPerLevel = [];
  let averageIncorrectTries = [];
  let timesPerfected = 0;

  // Audio elements
  const incorrect = createAudioElement("../src/audio/answer-wrong.mp3");
  const correct = createAudioElement("../src/audio/answer-correct.mp3");
  const failed = createAudioElement("../src/audio/spongebob-disappointed.mp3");

  function init() {
    const durationStart = Date.now();
    const $content = $(".content").css({
      "max-width": "700px",
      margin: "0 auto",
      height: "100vh",
    });

    const $gameArea = htmlTag("div", "game-area").appendTo($content).css({
      margin: "0 20px",
      display: "flex",
      "flex-direction": "column",
      padding: "50px 20px",
    });

    const $gameScene = htmlTag("div", "game-scene").appendTo($gameArea).css({
      height: "200px",
      background: "#76684aaf",
      "border-radius": "20px 20px 0 0",
    });

    const $gameCategory = htmlTag("div", "game-category")
      .appendTo($gameArea)
      .css({
        height: "40px",
        width: "100%",
        "text-align": "center",
        background: "#393123c7",
        color: "#fff",
        "font-family": "Silkscreen",
      });

    const $gameWord = htmlTag("div", "game-word").appendTo($gameArea).css({
      "min-height": "40px",
      padding: "10px",
      width: "100%",
      "text-align": "center",
      background: "#393123c7",
      color: "#fff",
    });

    const $gameAlphabets = htmlTag("div", "game-alphabets")
      .appendTo($gameArea)
      .css({
        "text-align": "center",
        background: "#54421caf",
        "border-radius": "0 0 20px 20px",
        padding: "10px",
      });

    const $gameStats = htmlTag("div", "game-stats").appendTo($gameArea).css({
      width: "100%",
      "min-height": "50px",
      display: "flex",
      "flex-direction": "row",
      "flex-wrap": "wrap",
      "margin-top": "20px",
      "border-radius": "20px",
      background: "#393123c7",
    });

    // Add Timer
    const $tries = htmlTag("span", "tries-remaining").appendTo($gameStats).css({
      "align-text": "center",
      padding: "15px",
      flex: 1,
    });
    for (i = 0; i < tries; i++) {
      htmlTag("i", "tries bi-heart-fill")
        .css("color", "#de5959")
        .appendTo($tries)
        .append("\u2000");
    }

    // Add scoreboard
    const $scoreboard = htmlTag("div", "scoreboard").appendTo($gameStats).css({
      margin: "auto",
      flex: 1,
      color: "#fff",
      "text-align": "right",
      "padding-right": "15px",
    });

    htmlTag("small", "", "SCORE:\u2000").appendTo($scoreboard);
    htmlTag("span", "fs-4 score", totalScore).appendTo($scoreboard);

    // Add alphabets
    const alphabets = [...new Array(26)].map((_, i) =>
      String.fromCharCode(65 + i)
    );

    // Create button for each alphabet
    for (const letter of alphabets) {
      const $btn = htmlTag("button", "letter btn btn-primary fs-5", letter, {
        type: "button",
        "data-letter-select": letter,
      })
        .css({
          "--bs-btn-active-bg": "#9B8468",
          "--bs-btn-bg": "#9B8468",
          "--bs-btn-active-border-color": "#88745c",
          "--bs-btn-border-color": "#88745c",
          "--bs-btn-hover-bg": "#514435",
          "--bs-btn-hover-border-color": "#4a3e30",
          margin: "5px",
        })
        .appendTo($gameAlphabets);

      $btn.css("width", $btn.outerHeight());
    }

    let [category, word] = getWord();

    // Show category
    $gameCategory.append(htmlTag("span", "fs-4", category));

    // Create blank word page
    for (const letter of word) {
      $gameWord
        .append(
          htmlTag(
            "span",
            "cor-ans fs-4",
            alphabets.includes(letter) ? "_" : letter,
            {
              "data-letter-orig": window.btoa(randomizer + letter),
            }
          )
        )
        .append("\u2000");
    }

    //   Click detection for the buttons
    $(".letter").click(function () {
      const $$btn = $(this);
      const letter = $$btn.attr("data-letter-select");

      $$btn.removeClass("btn-primary").addClass("disabled");

      if (word.toLowerCase().includes(letter.toLowerCase())) {
        $(`*[data-letter-orig="${window.btoa(randomizer + letter)}"]`)
          .each((_, ele) => {
            $(ele).html(letter);
          })
          .attr("data-letter-orig", "solved");
        $$btn.addClass("btn-success");

        score += tries;
        totalScore += tries;
        $(".score").html(totalScore);

        if (
          $('*[data-letter-orig="solved"]').length ==
          [...word].filter((x) => alphabets.includes(x)).length
        ) {
          won = true;
        }
        correct.play();
      } else {
        $$btn.addClass("btn-danger");
        tries--;
        $($(".tries")[$(".tries:not(.bi-heart)").length - 1])
          .removeClass("bi-heart-fill")
          .addClass("bi-heart");

        $gameArea.addClass("shake-animation");
        incorrect.play();
        setTimeout(() => $gameArea.removeClass("shake-animation"), 200);
      }

      if (tries == 0 || won) {
        // Stats calculation
        averageIncorrectTries.push(7 - tries);
        if (tries == 7) timesPerfected++;

        // ================= LOCAL SAVE ====================== //
        const levelHiScore = localStorage.getItem("levelHiScore");
        const totalHiScore = localStorage.getItem("totalHiScore");
        const maxPerfectSs = localStorage.getItem("maxPerfectSs");
        if (score > levelHiScore) localStorage.setItem("levelHiScore", score);
        if (totalScore > totalHiScore)
          localStorage.setItem("totalHiScore", totalScore);
        if (timesPerfected > maxPerfectSs)
          localStorage.setItem("maxPerfectSs", timesPerfected);
        // ================= LOCAL SAVE ====================== //

        $(".letter:not(.disabled)").each((i, btn) => {
          const _letter = $(btn).attr("data-letter-select");

          $(btn).removeClass("btn-primary").addClass("disabled");
          if (word.toLowerCase().includes(_letter.toLowerCase())) {
            $(btn).addClass("btn-warning");
          } else {
            $(btn).addClass("btn-danger");
          }
        });

        // Reset Modal Body
        const $md = $(".modal-body").html("");
        // Calculate level duration
        const duration = Math.round((Date.now() - durationStart) / 1000);
        durationPerLevel.push(duration);
        // Create the modal body

        new Modal()
          .setDescription(
            `The correct Answer was <strong class="text-${
              won ? "success" : "danger"
            }-emphasis">${word}</strong>!`
          )
          .addField(
            new FieldRow("stats-level")
              .setTitle("Level Stats")
              .addField("Duration", duration + "s")
              .addField("Incorrect Tries", 7 - tries)
              .addField("Level Score", score)
              .addField("Total Score", totalScore)
          )
          .addField(
            new FieldRow("stats-session")
              .setTitle("Session Stats")
              .addField("Duration per Level", arrAverage(durationPerLevel))
              .addField("Incorrect Tries", arrAverage(averageIncorrectTries))
              .addField("Times perfected", timesPerfected)
          )
          .addField(
            new FieldRow("stats-lifetime")
              .setTitle("Lifetime Stats")
              .addField(
                "Highest score in a level",
                localStorage.getItem("levelHiScore") || 0
              )
              .addField(
                "Highest Total Score",
                localStorage.getItem("totalHiScore") || 0
              )
              .addField(
                "Most perfect in a single session",
                localStorage.getItem("maxPerfectSs") || 0
              )
          )
          .build();

        // // Reset score
        // score = 0;
        console.log({ score });
        // Modal Body
        if (won) {
          $(".modal-title").html("🎊 Congratulations!");
          $(".modal-footer-btn").html("Continue");
          modal.toggle();
        } else {
          totalScore = 0;
          durationPerLevel = [];
          averageIncorrectTries = [];
          timesPerfected = 0;
          $(".modal-title").html("😭 Too bad!");
          $(".modal-footer-btn").html("Retry");
          failed.play();
          modal.toggle();
        }
      }
    });
  }

  // init();

  const modalEvent = document.getElementById("staticBackdrop");
  modalEvent.addEventListener("hidden.bs.modal", () => {
    $(".content").html("");

    won = false;
    tries = 7;
    score = 0;

    init();
  });

  $(".game-menu").css({
    height: "100vh",
    "max-width": "400px",
    margin: "auto",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "center",
  });

  htmlTag("div", "game-menu-subcontent").appendTo($(".game-menu")).css({
    "border-radius": "20px",
    background: "#393123c7",
    color: "#fff",
    display: "flex",
    "flex-direction": "column",
    overflow: "hidden",
  });

  htmlTag("div", "fs-1 game-menu-title", "HANGMAN")
    .appendTo($(".game-menu-subcontent"))
    .css({
      "font-family": "Silkscreen",
      "text-align": "center",
      padding: "20px",
    });

  htmlTag(
    "button",
    "fs-5 game-menu-btn-play btn btn-primary",
    '<i class="bi-play-fill"></>',
    {
      type: "button",
    }
  )
    .appendTo($(".game-menu-subcontent"))
    .css({
      "border-radius": 0,
      "--bs-btn-active-bg": "#100d09",
      "--bs-btn-bg": "#362c21",
      "--bs-btn-active-border-color": "#100d09",
      "--bs-btn-border-color": "#362c21",
      "--bs-btn-hover-bg": "#221b14",
      "--bs-btn-hover-border-color": "#221b14",
    });

  $(".game-menu-btn-play").click(function () {
    $(".game-menu").fadeOut(400, "swing", function () {
      init();
    });
  });
});

function htmlTag(tag = "div", cls, content = "", attr = {}) {
  return $(
    `<${tag} ${cls ? `class="${cls}"` : ""} ${Object.entries(attr)
      .map(([i, j]) => `${i}="${j}"`)
      .join(" ")}>${content}</${tag}>`
  );
}

// Special class to be used by class Modal
class FieldRow {
  constructor(cname) {
    this.cname = cname;
    this.title;
    this.fields = [];
  }

  build() {
    if (this.fields.length) {
      //
      const $fieldTitle = $(`<div class="${this.cname}">${this.title}</div>`)
        .css("padding", "5px 0")
        .css("font-weight", 700);

      const $fieldContainer = $(`<div class="field-container"></div>`)
        .css("display", "flex")
        .css("flex-direction", "row")
        .css("flex", 1)
        .css("justify-content", "space-between")
        .css("text-align", "center");
      //
      for (const { name, value } of this.fields) {
        $(`<div class="field"></div>`)
          .appendTo($fieldContainer)
          .css("display", "flex")
          .css("flex-direction", "column")
          .css("flex", 1)
          .css("justify-content", "space-between")
          .append($(`<div>${name}</div>`).css("font-size", "small"))
          .append($(`<div class="fs-5">${value}</div>`));
      }
      //
      $fieldTitle.appendTo($("#mb-wq"));
      $fieldContainer.appendTo($("#mb-wq"));
    } else {
      console.error("FieldRow#build: Could not build empty fields");
    }
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  addField(name, value) {
    this.fields.push({ name: String(name), value: String(value) });
    return this;
  }
}

// Targets id mb-wq <modal body wordquest>, make modal-body have this id
class Modal {
  constructor() {
    this.description = null;
    this.fields = [];
    this.$modalBody = $("#mb-wq");
  }

  /**
   *
   */
  build() {
    // Build desc
    if (this.description) {
      $(`<div class="fs-5 gmb-description">${this.description}</div>`)
        .css("text-align", "center")
        .css("padding-bottom", "20px")
        .appendTo(this.$modalBody);
    }

    // Build Fields
    if (this.fields.length) {
      for (const field of this.fields) {
        field.build();
      }
    }
  }

  addField(value) {
    if (!(value instanceof FieldRow))
      throw new Error("Invalid value: Field must be an instance of FieldRow");

    this.fields.push(value);
    console.log(this);
    return this;
  }

  setDescription(value) {
    this.description = String(value);
    return this;
  }

  reset(htmlReset) {
    this.description = null;
    this.fields = [];

    if (htmlReset) {
      this.$modalBody.html("");
    }

    return this;
  }
}

// function generateModalBody(modal, stats = {}) {
//   // description
//   htmlTag(
//     "div",
//     "fs-5 gmb-description",
//     `The correct Answer was <strong>${stats.word}</strong>!`
//   )
//     .appendTo(modal)
//     .css({
//       "text-align": "center",
//       "padding-bottom": "20px",
//     });

//   // Fields initial css stylings
//   fieldsStyles = {
//     display: "flex",
//     "flex-direction": "row",
//     "font-size": "12px",
//     "text-align": "center",
//   };

//   // Field name initial css styling
//   fieldNameStyles = {
//     padding: "5px 0",
//     "font-weight": 700,
//   };

//   // Field initial css styling
//   fieldStyles = {
//     display: "flex",
//     "flex-direction": "column",
//     flex: 1,
//     "justify-content": "space-between",
//   };

//   // Fields: Level
//   htmlTag("div", "field-name", "Level Stats")
//     .css(fieldNameStyles)
//     .appendTo(modal);

//   const $level = htmlTag("div", "gmb-level").appendTo(modal).css(fieldsStyles);

//   htmlTag("div", "field")
//     .appendTo($level)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Duration"))
//     .append(htmlTag("div", "fs-5", stats.duration || 0));

//   htmlTag("div", "field")
//     .appendTo($level)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Incorrect Tries"))
//     .append(htmlTag("div", "fs-5", stats.incorrectTries || 0));

//   htmlTag("div", "field")
//     .appendTo($level)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Level Score"))
//     .append(htmlTag("div", "fs-5", stats.currentLevelScore || 0));

//   htmlTag("div", "field")
//     .appendTo($level)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Total Score"))
//     .append(htmlTag("div", "fs-5", stats.totalScore || 0));

//   // Fields: Session
//   $("<br> <br>").appendTo(modal);
//   htmlTag("div", "field-name", "Session Stats")
//     .css(fieldNameStyles)
//     .appendTo(modal);

//   const $session = htmlTag("div", "gmb-session")
//     .appendTo(modal)
//     .css(fieldsStyles);

//   htmlTag("div", "field")
//     .appendTo($session)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Average Duration per Level"))
//     .append(
//       htmlTag(
//         "div",
//         "fs-5",
//         (Number(stats.averageDuration).toFixed(2) || 0) + "s"
//       )
//     );

//   htmlTag("div", "field")
//     .appendTo($session)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Average Incorrect Tries"))
//     .append(
//       htmlTag(
//         "div",
//         "fs-5",
//         Number(stats.averageIncorrectTries).toFixed(2) || 0
//       )
//     );

//   htmlTag("div", "field")
//     .appendTo($session)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Times perfected"))
//     .append(htmlTag("div", "fs-5", stats.timesPerfected || 0));

//   // Fields: Lifetime
//   $("<br> <br>").appendTo(modal);
//   htmlTag("div", "field-name", "Lifetime Stats")
//     .css(fieldNameStyles)
//     .appendTo(modal);

//   const $lifetime = htmlTag("div", "gmb-lifetime")
//     .appendTo(modal)
//     .css(fieldsStyles);

//   htmlTag("div", "field")
//     .appendTo($lifetime)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Highest Score In a Level"))
//     .append(htmlTag("div", "fs-5", stats.highestLevelScore || 0));

//   htmlTag("div", "field")
//     .appendTo($lifetime)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Highest Total Score"))
//     .append(htmlTag("div", "fs-5", stats.highestTotalScore || 0));

//   htmlTag("div", "field")
//     .appendTo($lifetime)
//     .css(fieldStyles)
//     .append(htmlTag("div", "", "Most Perfect in a Single Session"))
//     .append(htmlTag("div", "fs-5", stats.maxPerfectSingleSession || 0));
// }

function getWord(category) {
  const dictionary = {
    animals: [
      "alligator",
      "ant",
      "antelope",
      "armadillo",
      "bat",
      "beetle",
      "bee",
      "bison",
      "butterfly",
      "camel",
      "cat",
      "caterpillar",
      "cheetah",
      "chimpanzee",
      "chipmunk",
      "cow",
      "crab",
      "crocodile",
      "crow",
      "deer",
      "dog",
      "dolphin",
      "duck",
      "eagle",
      "elephant",
      "elk",
      "falcon",
      "flamingo",
      "fox",
      "frog",
      "gazelle",
      "gerbil",
      "giraffe",
      "goat",
      "goose",
      "gorilla",
      "grasshopper",
      "grizzly bear",
      "guinea pig",
      "hawk",
      "hedgehog",
      "hen",
      "hippopotamus",
      "horse",
      "hyena",
      "jaguar",
      "jellyfish",
      "kangaroo",
      "koala",
      "leopard",
      "lemur",
      "leopard",
      "lion",
      "ladybug",
      "lobster",
      "lynx",
      "meerkat",
      "mongoose",
      "monkey",
      "moose",
      "mouse",
      "newt",
      "octopus",
      "orangutan",
      "otter",
      "ostrich",
      "owl",
      "panda",
      "parrot",
      "peacock",
      "penguin",
      "pig",
      "pigeon",
      "porcupine",
      "rabbit",
      "rat",
      "rhinoceros",
      "robin",
      "rooster",
      "scorpion",
      "seahorse",
      "seal",
      "shark",
      "sheep",
      "shrimp",
      "sloth",
      "snake",
      "sparrow",
      "spider",
      "squirrel",
      "starfish",
      "turkey",
      "turtle",
      "vulture",
      "walrus",
      "warthog",
      "weasel",
      "whale",
      "wolf",
      "zebra",
    ],
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea, North",
      "Korea, South",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "North Macedonia",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russia",
      "Rwanda",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ],
    movies: [
      "12 Angry Men",
      "2001: A Space Odyssey",
      "A Beautiful Mind",
      "A Clockwork Orange",
      "A Few Good Men",
      "A Star Is Born",
      "Amadeus",
      "American Beauty",
      "Annie Hall",
      "Apocalypse Now",
      "Arrival",
      "Avatar",
      "Back to the Future",
      "Batman Begins",
      "Blade Runner",
      "Braveheart",
      "Casablanca",
      "Catch Me If You Can",
      "Chinatown",
      "Citizen Kane",
      "City of God",
      "Crash",
      "Das Boot",
      "Dead Poets Society",
      "Django Unchained",
      "Doctor Zhivago",
      "Donnie Darko",
      "Drive",
      "E.T. the Extra-Terrestrial",
      "Fargo",
      "Fight Club",
      "Forrest Gump",
      "Full Metal Jacket",
      "Gandhi",
      "Gangs of New York",
      "Gone with the Wind",
      "Good Will Hunting",
      "Gravity",
      "Groundhog Day",
      "Heat",
      "Hotel Rwanda",
      "Inception",
      "Inglourious Basterds",
      "Interstellar",
      "It's a Wonderful Life",
      "Jaws",
      "Jurassic Park",
      "Kill Bill: Volume 1",
      "La La Land",
      "Lawrence of Arabia",
      "Life of Pi",
      "Lion",
      "Memento",
      "Million Dollar Baby",
      "Modern Times",
      "Monty Python and the Holy Grail",
      "Moonlight",
      "No Country for Old Men",
      "North by Northwest",
      "Oldboy",
      "On the Waterfront",
      "Once Upon a Time in the West",
      "Pans Labyrinth",
      "Parasite",
      "Platoon",
      "Pulp Fiction",
      "Raging Bull",
      "Rain Man",
      "Raiders of the Lost Ark",
      "Requiem for a Dream",
      "Rocky",
      "Saving Private Ryan",
      "Scarface",
      "Schindler's List",
      "Seven",
      "Shawshank Redemption",
      "Singin' in the Rain",
      "Slumdog Millionaire",
      "Snatch",
      "Some Like It Hot",
      "Spirited Away",
      "Spotlight",
      "Star Wars: Episode IV - A New Hope",
      "Sunset Boulevard",
      "Taxi Driver",
      "The Dark Knight",
      "The Departed",
      "The Exorcist",
      "The Godfather",
      "The Godfather: Part II",
      "The Good, the Bad and the Ugly",
      "The Graduate",
      "The Green Mile",
      "The Hurt Locker",
      "The Lion King",
      "The Matrix",
      "The Pianist",
      "The Prestige",
      "The Princess Bride",
      "The Revenant",
      "The Shining",
      "The Silence of the Lambs",
      "The Sixth Sense",
      "The Sound of Music",
      "The Terminator",
      "The Usual Suspects",
      "The Wizard of Oz",
      "There Will Be Blood",
      "Titanic",
      "Toy Story",
      "Trainspotting",
      "Vertigo",
      "Whiplash",
      "Zodiac",
    ],
    sports: [
      "Archery",
      "Athletics",
      "Australian Football",
      "Badminton",
      "Baseball",
      "Basketball",
      "Beach Volleyball",
      "Biathlon",
      "Bobsleigh",
      "Bowling",
      "Boxing",
      "Canoeing",
      "Cricket",
      "Crossfit",
      "Curling",
      "Cycling",
      "Darts",
      "Disc Golf",
      "Diving",
      "Dodgeball",
      "Equestrian",
      "Fencing",
      "Field Hockey",
      "Figure Skating",
      "Football",
      "Golf",
      "Gymnastics",
      "Handball",
      "Hockey",
      "Horse Racing",
      "Ice Hockey",
      "Judo",
      "Karate",
      "Kayaking",
      "Kiteboarding",
      "Lacrosse",
      "Martial Arts",
      "Motor Racing",
      "Netball",
      "Olympics",
      "Paddleboarding",
      "Polo",
      "Racquetball",
      "Rowing",
      "Rugby",
      "Sailing",
      "Shooting",
      "Skateboarding",
      "Skiing",
      "Snowboarding",
      "Soccer",
      "Softball",
      "Squash",
      "Surfing",
      "Swimming",
      "Table Tennis",
      "Taekwondo",
      "Tennis",
      "Track and Field",
      "Triathlon",
      "Ultimate Frisbee",
      "Volleyball",
      "Water Polo",
      "Weightlifting",
      "Wrestling",
      "Yoga",
    ],
    fruits: [
      "Apple",
      "Apricot",
      "Avocado",
      "Banana",
      "Blackberry",
      "Blueberry",
      "Boysenberry",
      "Cantaloupe",
      "Cherry",
      "Clementine",
      "Coconut",
      "Cranberry",
      "Date",
      "Dragonfruit",
      "Durian",
      "Elderberry",
      "Fig",
      "Grape",
      "Grapefruit",
      "Guava",
      "Honeydew",
      "Jackfruit",
      "Jujube",
      "Kiwi",
      "Kumquat",
      "Lemon",
      "Lime",
      "Lychee",
      "Mango",
      "Mulberry",
      "Nectarine",
      "Orange",
      "Papaya",
      "Passionfruit",
      "Peach",
      "Pear",
      "Persimmon",
      "Pineapple",
      "Plum",
      "Pomegranate",
      "Raspberry",
      "Strawberry",
      "Tangerine",
      "Watermelon",
      "Acai",
      "Acerola",
      "Ackee",
      "Akebia",
      "Almond",
      "Amla",
      "Annona",
      "Bael",
      "Barberry",
      "Bilberry",
      "Bitter Melon",
      "Blackcurrant",
      "Blood Orange",
      "Breadfruit",
      "Buddha's Hand",
      "Bunchberry",
      "Cactus Fruit",
      "Camu Camu",
      "Canary Melon",
      "Carambola",
      "Chayote",
      "Cherimoya",
      "Chokeberry",
      "Cloudberry",
      "Cocoa Bean",
      "Cucumber",
      "Currant",
      "Damson",
      "Date Palm",
      "Feijoa",
      "Gac Fruit",
      "Galia Melon",
      "Goji Berry",
      "Gooseberry",
      "Green Apple",
      "Ground Cherry",
      "Hala Fruit",
      "Hawthorn",
      "Hazelnut",
      "Honeycrisp Apple",
      "Huckleberry",
      "Ice Cream Bean",
      "Jabuticaba",
      "Kaffir Lime",
      "Kei Apple",
      "Key Lime",
      "Longan",
      "Loquat",
      "Mamey",
      "Mandarin Orange",
      "Manzanita",
      "Miracle Fruit",
      "Monstera Deliciosa",
      "Mulberry",
      "Nance",
      "Nannyberry",
      "Nance",
      "Naranjilla",
      "Nashi Pear",
      "Nut",
      "Olive",
      "Osage Orange",
      "Pawpaw",
      "Pepino Melon",
      "Pine Nut",
      "Pitanga",
      "Plantain",
      "Pomelo",
      "Quince",
      "Rambutan",
      "Redcurrant",
      "Salal Berry",
      "Sapodilla",
      "Satsuma",
      "Soursop",
      "Star Apple",
      "Sugar Apple",
      "Surinam Cherry",
      "Tamarillo",
      "Tamarind",
      "Tomato",
      "Ugli Fruit",
      "Ugni",
      "Walnut",
      "Wampee",
      "White Currant",
      "White Mulberry",
      "Xigua",
      "Yuzu",
      "Zucchini",
    ],
    professions: [
      "Accountant",
      "Actor",
      "Architect",
      "Artist",
      "Astronomer",
      "Athlete",
      "Author",
      "Baker",
      "Barista",
      "Bartender",
      "Biologist",
      "Botanist",
      "Bricklayer",
      "Butcher",
      "Carpenter",
      "Chef",
      "Chemist",
      "Coach",
      "Comedian",
      "Composer",
      "Conductor",
      "Dancer",
      "Dentist",
      "Detective",
      "Doctor",
      "Electrician",
      "Engineer",
      "Farmer",
      "Fashion Designer",
      "Film Director",
      "Firefighter",
      "Fisherman",
      "Flight Attendant",
      "Florist",
      "Gardener",
      "Geologist",
      "Hairdresser",
      "Illustrator",
      "Insurance Agent",
      "Interpreter",
      "Investigator",
      "Janitor",
      "Journalist",
      "Judge",
      "Lecturer",
      "Librarian",
      "Lifeguard",
      "Linguist",
      "Magician",
      "Manager",
      "Mechanic",
      "Meteorologist",
      "Model",
      "Musician",
      "Nurse",
      "Optometrist",
      "Painter",
      "Pharmacist",
      "Photographer",
      "Physicist",
      "Pilot",
      "Plumber",
      "Police Officer",
      "Politician",
      "Professor",
      "Programmer",
      "Psychiatrist",
      "Psychologist",
      "Receptionist",
      "Reporter",
      "Researcher",
      "Salesperson",
      "Scientist",
      "Sculptor",
      "Singer",
      "Software Developer",
      "Soldier",
      "Statistician",
      "Surgeon",
      "Surveyor",
      "Teacher",
      "Technician",
      "Therapist",
      "Translator",
      "Truck Driver",
      "Veterinarian",
      "Waiter",
      "Web Designer",
      "Writer",
      "Zookeeper",
    ],
    famous_landmarks: [
      "Acropolis of Athens",
      "Alhambra",
      "Angkor Wat",
      "Arc de Triomphe",
      "Big Ben",
      "Brandenburg Gate",
      "Burj Khalifa",
      "Casa Batlló",
      "Chichen Itza",
      "Christ the Redeemer",
      "Colosseum",
      "Cristo Redentor",
      "Easter Island Statues",
      "Eiffel Tower",
      "Empire State Building",
      "Forbidden City",
      "Giza Pyramid Complex",
      "Golden Gate Bridge",
      "Great Barrier Reef",
      "Great Wall of China",
      "Hagia Sophia",
      "Hollywood Sign",
      "Hong Kong Skyline",
      "Itaipu Dam",
      "Kilimanjaro",
      "Kiyomizu-dera",
      "Kremlin",
      "La Sagrada Familia",
      "Lake Baikal",
      "Leaning Tower of Pisa",
      "Louvre Museum",
      "Machu Picchu",
      "Mount Everest",
      "Mount Fuji",
      "Neuschwanstein Castle",
      "Niagara Falls",
      "Notre-Dame Cathedral",
      "Oia",
      "Pantheon",
      "Parthenon",
      "Petra",
      "Pompeii",
      "Pyramids of Giza",
      "Red Square",
      "Rock of Gibraltar",
      "Saint Basil's Cathedral",
      "Santorini",
      "Sistine Chapel",
      "Statue of Liberty",
      "Stonehenge",
      "Sydney Opera House",
      "Taj Mahal",
      "The Great Sphinx",
      "The Louvre",
      "The Shard",
      "The Vatican",
      "Tokyo Tower",
      "Tower Bridge",
      "Tower of London",
      "Trevi Fountain",
      "Uluru",
      "Venice Canals",
      "Versailles Palace",
      "Victoria Falls",
      "Wat Arun",
      "Wat Phra Kaew",
      "White House",
      "Yellowstone National Park",
    ],
    food_and_drinks: [
      "Adobo",
      "Agua Fresca",
      "Apple Pie",
      "Bacon",
      "Bagel",
      "Baklava",
      "Banana Bread",
      "Banh Mi",
      "Barbecue",
      "Beef Stroganoff",
      "Biryani",
      "Biscuit",
      "Borscht",
      "Bread Pudding",
      "Brownie",
      "Bubble Tea",
      "Bulgogi",
      "Burrito",
      "Butter Chicken",
      "Cannoli",
      "Cappuccino",
      "Carrot Cake",
      "Ceasar Salad",
      "Chai Latte",
      "Cheesecake",
      "Chicken Alfredo",
      "Chicken Noodle Soup",
      "Chimichanga",
      "Chocolate Chip Cookie",
      "Chow Mein",
      "Clam Chowder",
      "Cobb Salad",
      "Coconut Curry",
      "Coffee",
      "Corn Dog",
      "Croissant",
      "Cupcake",
      "Dalgona Coffee",
      "Dim Sum",
      "Doughnut",
      "Dumplings",
      "Eggnog",
      "Eggplant Parmesan",
      "Empanada",
      "Enchiladas",
      "Espresso",
      "Falafel",
      "Fish and Chips",
      "Fried Chicken",
      "Fried Rice",
      "Frittata",
      "Fruit Salad",
      "Gin and Tonic",
      "Gingerbread",
      "Goulash",
      "Gumbo",
      "Guacamole",
      "Gyros",
      "Hamburger",
      "Hot Chocolate",
      "Hot Dog",
      "Ice Cream",
      "Iced Tea",
      "Jambalaya",
      "Kare-Kare",
      "Key Lime Pie",
      "Kimchi",
      "Lasagna",
      "Lemonade",
      "Lobster Bisque",
      "Macaroni and Cheese",
      "Mango Sticky Rice",
      "Mapo Tofu",
      "Margherita Pizza",
      "Matcha Latte",
      "Meatball Sub",
      "Miso Soup",
      "Mojito",
      "Nachos",
      "Nasi Goreng",
      "Noodle Soup",
      "Omelette",
      "Onion Rings",
      "Pad Thai",
      "Pancakes",
      "Panna Cotta",
      "Peking Duck",
      "Pho",
      "Pina Colada",
      "Pineapple Fried Rice",
      "Pizza",
      "Poutine",
      "Pozole",
      "Pretzel",
      "Pulled Pork",
      "Quesadilla",
      "Ramen",
      "Risotto",
      "Samosa",
      "Sashimi",
      "Scrambled Eggs",
      "Shawarma",
      "Shrimp Scampi",
      "Smoothie",
      "Sorbet",
      "Spaghetti",
      "Spring Rolls",
      "Steak",
      "Strawberry Shortcake",
      "Sushi",
      "Taco",
      "Tandoori Chicken",
      "Tiramisu",
      "Tom Yum Soup",
      "Tonkatsu",
      "Tortilla Soup",
      "Ube Halaya",
      "Veggie Burger",
      "Waffles",
      "Yakitori",
      "Yakisoba",
      "Zucchini Bread",
    ],
    musical_instruments: [
      "Accordion",
      "Acoustic Guitar",
      "Bagpipes",
      "Banjo",
      "Bass Clarinet",
      "Bass Drum",
      "Bass Guitar",
      "Bassoon",
      "Cello",
      "Clarinet",
      "Concertina",
      "Contrabass",
      "Cornet",
      "Cymbals",
      "Didgeridoo",
      "Djembe",
      "Double Bass",
      "Drum Set",
      "Electric Guitar",
      "Euphonium",
      "Flugelhorn",
      "Flute",
      "French Horn",
      "Glockenspiel",
      "Gong",
      "Grand Piano",
      "Guzheng",
      "Hammered Dulcimer",
      "Harmonica",
      "Harp",
      "Harpsichord",
      "Kalimba",
      "Keyboard",
      "Lute",
      "Mandolin",
      "Maracas",
      "Marimba",
      "Oboe",
      "Octobass",
      "Oud",
      "Pan Flute",
      "Penny Whistle",
      "Piccolo",
      "Pipe Organ",
      "Recorder",
      "Saxophone",
      "Shakuhachi",
      "Shamisen",
      "Sitar",
      "Snare Drum",
      "Sousaphone",
      "Steel Drum",
      "Synthesizer",
      "Tambourine",
      "Theremin",
      "Timpani",
      "Triangle",
      "Trombone",
      "Trumpet",
      "Tuba",
      "Ukulele",
      "Vibraphone",
      "Viola",
      "Violin",
      "Xylophone",
      "Zither",
    ],
    technology: [
      "AirPods",
      "Android",
      "Arduino",
      "Bluetooth",
      "Calculator",
      "Camera",
      "Charger",
      "Chromebook",
      "Computer",
      "Drone",
      "DVD Player",
      "Earbuds",
      "Ebook Reader",
      "Ethernet",
      "Fitbit",
      "Flash Drive",
      "Game Console",
      "GoPro",
      "GPS",
      "Hard Drive",
      "Headphones",
      "iPad",
      "iPhone",
      "iPod",
      "Keyboard",
      "Kindle",
      "Laptop",
      "LCD Monitor",
      "MacBook",
      "Microphone",
      "Microscope",
      "Monitor",
      "Mouse",
      "Nintendo Switch",
      "Oculus Rift",
      "Phone",
      "PlayStation",
      "Printer",
      "Projector",
      "Raspberry Pi",
      "Router",
      "Satellite",
      "Scanner",
      "Selfie Stick",
      "Smartphone",
      "Smartwatch",
      "Snapchat",
      "Solar Panel",
      "Speaker",
      "SSD",
      "Streaming Device",
      "Tablet",
      "Television",
      "Thermostat",
      "USB Cable",
      "Virtual Reality",
      "VR Headset",
      "Webcam",
      "WiFi",
      "Wireless Mouse",
      "Xbox",
      "Zoom",
      "3D Printer",
      "4G",
      "5G",
      "Bluetooth Speaker",
      "Circuit Board",
      "Cloud",
      "CPU",
      "Drone",
      "E-commerce",
      "Fiber Optics",
      "Firewall",
      "Fitbit",
      "Gaming PC",
      "GPS",
      "Graphics Card",
      "Hard Drive",
      "Headphones",
      "Home Automation",
      "Internet",
      "IoT",
      "Keyboard",
      "LED",
      "Logic Board",
      "Motherboard",
      "Mouse",
      "Nanotechnology",
      "Network",
      "Operating System",
      "Pixel",
      "Quadcopter",
      "Raspberry Pi",
      "Robot",
      "Router",
      "Satellite",
      "Screen",
      "Server",
      "Smart Home",
      "Smartphone",
      "Smartwatch",
      "Solid State Drive",
      "Streaming",
      "Supercomputer",
      "Tablet",
      "Touchscreen",
      "USB",
      "Virtual Reality",
      "VoIP",
      "VPN",
      "Wearable",
      "Web Browser",
      "WiFi",
      "Wireless Charger",
      "Xbox",
      "Zoom",
    ],
  };
  const categories = Object.keys(dictionary);

  if (!category)
    category = categories[Math.floor(Math.random() * categories.length)];
  const words = dictionary[category];

  return [
    category.replace(/_/gi, " ").toUpperCase(),
    words[Math.floor(Math.random() * words.length)].toUpperCase(),
  ];
}

function arrAverage(array) {
  return array.reduce((sum, val) => sum + val, 0) / array.length;
}

/**
 * Create an audio element
 * @param {string} src The source for the audio element
 * @returns An audio element
 */
function createAudioElement(src) {
  const a = document.createElement("audio");
  a.setAttribute("src", src);
  return a;
}
