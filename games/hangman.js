class Session {
  constructor() {
    this.userCategories = [];
    this.interval = null;
    this.wordBank = [];
    this.hints = [true, true, true, true, true];
    this.won = false;
    this.totalScore = 0;
    this.clicks = 0;

    this.levels = [];
  }

  get currentLevel() {
    return _.last(this.levels);
  }
}

class Level {
  constructor(word) {
    this._word = word;
    this.durationStart = undefined;
    this.tries = 7;
    this.score = 0;
    this.usedHint = false;
  }

  get word() {
    return this._word?.name;
  }
  get category() {
    return this._word?.category;
  }
  get description() {
    return this._word?.description;
  }
}

// Manipulate DOM when files are finished loading
$(document).ready(async function () {
  // detect modals
  const gameEndSummaryModal = new bootstrap.Modal("#gameEndSummary");
  const levelWonSummaryModal = new bootstrap.Modal("#levelWonSummary");

  var session;

  // Register audio files
  const audio = {
    correct: createAudioElement("../src/audio/answer-correct.mp3"),
    incorrect: createAudioElement("../src/audio/answer-wrong.mp3"),
    gameOver: createAudioElement("../src/audio/spongebob-disappointed.mp3"),
  };

  const categories = [
    "animals",
    "brands_and_companies",
    "countries",
    "famous_landmarks",
    "films",
    "foods_and_drinks",
    "fruits",
    "musical_instruments",
    "professions",
    "sports",
    "technology",
  ];

  // Add category list to selection
  for (const category of categories) {
    const capitalize = (x) => x.charAt(0).toUpperCase() + x.substring(1);
    const categoryName = category.split("_").map(capitalize).join(" ");
    const id = "check" + category.split("_").join("");
    $("#categoryList > .accordion-body").append(
      `<div class="form-check py-1">
            <input class="form-check-input cursor-pointer" name="category" type="checkbox" value="${category}" id="${id}" checked></input>
            <label class="form-check-label cursor-pointer" for="${id}">${categoryName}</label>
        </div>`
    );
  }

  // Category selection logic
  $("#categoryList input[type='checkbox']").click(function () {
    if ($("#categoryList input[type='checkbox']:checked").length < 1) {
      $("#gameStartBtn")
        .addClass("disabled text-danger-emphasis")
        .html(
          "<span style='font-size: 14px'><i class='bi-exclamation-circle me-2'></i>You must select at least 1 category</span>"
        );
    } else {
      $("#gameStartBtn")
        .removeClass("disabled text-danger-emphasis")
        .html("<i class='bi-play-fill'></i>");
    }
  });

  // Play button (game start)
  $("#gameStartBtn").click(function () {
    const selector = "#categoryList input[name='category']:checked";
    const session = new Session();

    session.userCategories = [...$(selector).map((i, x) => $(x).val())];

    $("#gameMenu").fadeOut(300, function () {
      $("#gameArea").fadeIn(300, function () {
        $(this).addClass("d-flex");
        $("*[data-letter-select]").css({
          width: $("[data-letter-select]").outerHeight(),
        });
        start(session);
      });
    });
  });

  // Restart button (game restart)
  $("#retryGame").click(function () {
    const selector = "#categoryList input[name='category']:checked";
    const session = new Session();

    session.userCategories = [...$(selector).map((i, x) => $(x).val())];
    start(session);
  });

  // Go to main menu
  $("#goToMainMenu").click(function () {
    $("#gameArea").fadeOut(300, function () {
      $(this).removeClass("d-flex");
      $("#gameMenu").fadeIn(300);
    });
  });

  // Continue game
  $("#continueGame").click(function () {
    session.won = false;
    start(session);
  });

  // Add alphabets
  const alphabets = [...new Array(26)].map((_, i) =>
    String.fromCharCode(65 + i)
  );
  for (const letter of alphabets) {
    $("<button></button>")
      .html(letter)
      .addClass("hover-tilt btn btn-primary fs-5 m-1 fade")
      .appendTo($("#gameAlphabets"))
      .attr({ role: "button", type: "button", "data-letter-select": letter })
      .css({
        "--bs-btn-active-bg": "#9B8468",
        "--bs-btn-bg": "#9B8468",
        "--bs-btn-active-border-color": "#88745c",
        "--bs-btn-border-color": "#88745c",
        "--bs-btn-hover-bg": "#514435",
        "--bs-btn-hover-border-color": "#4a3e30",
      });
  }

  // Add hints
  for (i = 0; i < 5; i++) {
    $("<button></button>")
      .html(
        `<i class="bi-lightbulb-fill"></i><span class="visually-hidden">Hint...</span>`
      )
      .addClass("hover-tilt btn btn-primary fs-5 m-1 btn-khaki fade")
      .appendTo($("#hintButtons"))
      .attr({ role: "button", type: "button", "hint-index": i })
      .css({
        "--bs-btn-active-bg": "#9B8468",
        "--bs-btn-bg": "#9B8468",
        "--bs-btn-active-border-color": "#88745c",
        "--bs-btn-border-color": "#88745c",
        "--bs-btn-hover-bg": "#514435",
        "--bs-btn-hover-border-color": "#4a3e30",
      });
  }

  async function getWord(session) {
    // If wordbank is empty, fetch new set of words
    if (!session.wordBank.length) {
      for (const category of session.userCategories) {
        const path = (c) => `/resources/games.hangman/${c}.json`;
        const words = await $.getJSON(path(category));

        // Add category to words
        session.wordBank.push(...words.map((x) => ({ ...x, category })));
      }
    }

    // Shuffle the wordBank
    session.wordBank = _.shuffle(session.wordBank);

    // Return a word
    return session.wordBank.pop();
  }

  async function start(_session) {
    // assign to global var
    session = _session;

    // Reset previous call (hide buttons initially)
    $("#gameAlphabets > button").removeClass(
      "disabled btn-success btn-danger btn-warning show"
    );

    // Add current level statistics
    const level = new Level(await getWord(session));

    // Add hearts
    $("#triesRemaining").empty();
    for (i = 0; i < level.tries; i++)
      $("<i></i>")
        .addClass("tries bi-heart-fill me-2")
        .css("color", "#de5959")
        .appendTo($("#triesRemaining"));

    // Display alphabets after word was displayed
    $("#gameAlphabets > button").addClass("btn-khaki show");

    // Add hints
    $("#hintButtons > button").addClass("show");

    if (!session.levels.length) {
      $("#hintButtons > button > i").attr({ class: "bi-lightbulb-fill" });
    }
    $("#hintButtons > button:has(i.bi-lightbulb-fill)").removeClass("disabled");
    if (session.hints.filter((x) => Boolean(x)).length) {
      $("#hintDescription").html(
        'Click the <i class="bi-lightbulb-fill mx-2"></i> button to reveal hint!'
      );
    } else {
      $("#hintDescription").html(
        "<i class='bi-lightbulb-off-fill me-2'></i>No more hints left!"
      );
    }

    // Start the timer
    level.durationStart = Date.now();

    // Update timer every 500 ms
    session.interval = setInterval(function () {
      const duration = Date.now() - level.durationStart;
      const text = moment
        .duration(duration, "millisecond")
        .format("hh:mm:ss", { trim: false });

      $("#gameTimer").html(`<i class='bi-stopwatch-fill me-2'></i>${text}`);
    }, 500);

    // Append category
    $("#gameWordCategory").html(level.category.replace("_", " "));

    // Append word
    $("#gameWord").empty();
    for (const letter of level.word) {
      $("<span></span>")
        .addClass("fs-4 me-2 unsolved")
        .attr("solved", false)
        .appendTo($("#gameWord"))
        .html(letter.match(/[a-z]/i) ? "_" : letter);
    }

    // Append score
    $("#score").html(session.totalScore);

    // Add statistics to the session class (to be manipulated)
    session.levels.push(level);
  }

  // Alphabets click detection
  $("#gameAlphabets > button").click(function () {
    const level = session.currentLevel;
    // Register click
    session.clicks++;
    // Extract the letter that was clicked
    const clicked = $(this).html();
    // Check if clicked letter was correct
    const match = level.word.match(RegExp(clicked, "i"));

    // Change the styling of the button
    changeButtonStyle(this, Boolean(match));
    // Add sound effects
    playAudio(Boolean(match));

    // Execute if clicked letter matches
    if (Boolean(match)) {
      // Add score
      level.score += level.tries * 2;
      $("#score").html((session.totalScore += level.tries * 2));

      // Reveal letter
      const indexes = occurenceIndex(clicked, level.word.split(""));
      const selector = (index) => `#gameWord > span:nth-child(${index + 1})`;
      for (const index of indexes)
        $(selector(index)).html(clicked).attr("solved", true);

      // Check if all letters are solved
      const atBoardLength = $("#gameWord > span[solved='true']").length;
      if (atBoardLength == level.word.match(/[a-z]/gi).length) {
        session.won = true;
      }
    } else {
      // Execute if otherwise

      // Shake the canvas
      $("#gameArea").addClass("spc-shaking");
      setTimeout(() => $("#gameArea").removeClass("spc-shaking"), 200);

      // Subtract tries
      level.tries--;
      $($(".tries")[$(".tries:not(.bi-heart)").length - 1])
        .removeClass("bi-heart-fill")
        .addClass("bi-heart");
    }

    // Execute if no tries remaining
    if (level.tries <= 0) {
      // Stop the timer
      clearInterval(session.interval);

      // Pull statistics
      let _storeHangmanScore = storage("hangman:score");
      if (!Object.keys(_storeHangmanScore).length) {
        _storeHangmanScore = {
          average: 0,
          count: 0,
          hiscore: 0,
        };
      }
      const StorageScore = _storeHangmanScore;

      // Manipulate new statistics
      const average =
        (StorageScore.average * StorageScore.count + session.totalScore) /
        (StorageScore.count + 1);

      StorageScore.average = average;
      StorageScore.count++;
      StorageScore.hiscore = Math.max(StorageScore.hiscore, session.totalScore);

      // Save new statistics
      storage("hangman:score", StorageScore);

      // Disable all buttons
      $("#gameAlphabets > button").addClass("disabled");
      // Write actual answer
      $("#modalCorrectAnswer").html(level.word.toUpperCase());
      // Print score
      $("#modalScore").html(session.totalScore);

      // Print score evaluation
      $("#modalScoreEval").removeClass(
        "text-danger text-warning text-info text-success"
      );
      if (session.totalScore < average) {
        $("#modalScoreEvalCompare").html(
          `${Math.round(average) - session.totalScore} points less`
        );
        if (session.totalScore < average - 20)
          $("#modalScoreEval").html("BAD").addClass("text-danger-emphasis");
        if (session.totalScore >= average - 20)
          $("#modalScoreEval").html("POOR").addClass("text-warning-emphasis");
      } else {
        $("#modalScoreEvalCompare").html(
          `${session.totalScore - Math.round(average)} points more`
        );
        if (session.totalScore == StorageScore.hiscore) {
          $("#modalScoreEval").html("EXCELLENT").addClass("text-info-emphasis");
        } else {
          $("#modalScoreEval").html("GOOD").addClass("text-success-emphasis");
        }
      }

      $("#modalScoreBeatHS").html(
        Math.max(StorageScore.hiscore - session.totalScore, 0)
      );

      const incorrectTries = _.sum(session.levels.map((x) => 7 - x.tries));
      const accuracy = Math.round((1 - incorrectTries / session.clicks) * 100);

      $("#modalAccuracy").html(accuracy);
      $("#incorrectTapCount").html(incorrectTries);
      $("#totalTapCount").html(session.clicks);

      const accuracyEval =
        accuracy <= 35
          ? ["BAD", "text-danger-emphasis"]
          : accuracy <= 65 && accuracy > 35
          ? ["AVERAGE", "text-warning-emphasis"]
          : accuracy <= 80 && accuracy > 65
          ? ["GOOD", "text-success-emphasis"]
          : accuracy <= 90 && accuracy > 80
          ? ["BETTER", "text-success-emphasis"]
          : accuracy <= 99 && accuracy > 90
          ? ["EXCELLENT", "text-info-emphasis"]
          : ["PERFECT", "text-info-emphasis"];

      $("#modalAccuracyEval")
        .html(accuracyEval[0])
        .removeClass(
          "text-danger-emphasis text-warning-emphasis text-success-emphasis text-info-emphasis"
        )
        .addClass(accuracyEval[1]);

      // Play audio
      audio.gameOver.play();

      // Display Modal
      gameEndSummaryModal.show();
    }

    // Check if won
    if (session.won) {
      // Stop timer
      clearInterval(session.interval);
      // Add correct answer
      $("#levelWonCorrectAnswer").html(level.word.toUpperCase());

      // Add score
      $("#levelWonLevelScore").html(Number(level.score).toLocaleString());
      $("#levelWonTotalScore").html(
        Number(session.totalScore).toLocaleString()
      );
      $("#levelWonHiscore").html(
        Number(
          storage("hangman:score").hiscore || session.totalScore
        ).toLocaleString()
      );
      $("#levelWonLevelDuration").html(
        moment
          .duration(Date.now() - level.durationStart)
          .format("h[h] m[m] s[s]")
      );
      $("#levelWonLevelsCompleted").html(session.levels.length);

      // Display Modal
      levelWonSummaryModal.show();
    }
  });

  // Hint buttons click detection
  $("#hintButtons > button").click(function () {
    const hintIndex = $(this).attr("hint-index");
    // Check for browser modification
    if (session.currentLevel.usedHint) return;
    if (session.hints[hintIndex] == false) return;

    // register hint at the current level
    session.currentLevel.usedHint = true;
    // register used hint
    session.hints[hintIndex] = false;
    // Hide hintButtons
    $("#hintButtons > button").addClass("disabled");
    // Replace icon on clicked button
    $(this).html("<i class='bi-lightbulb-off-fill'></i>");
    // Display hint
    $("#hintDescription").html(session.currentLevel.description);
  });

  function playAudio(isMatched) {
    audio[isMatched ? "correct" : "incorrect"].currentTime = 0;
    audio[isMatched ? "correct" : "incorrect"].play();
  }

  function storage(key, value) {
    if (!value) {
      return JSON.parse(window.atob(localStorage.getItem(key) || "e30="));
    } else {
      return localStorage.setItem(key, window.btoa(JSON.stringify(value)));
    }
  }
});

function createAudioElement(src) {
  const a = document.createElement("audio");
  a.setAttribute("src", src);
  return a;
}

function occurenceIndex(data, arr) {
  const res = [];
  arr.forEach((val, i) => {
    if (String(val).match(RegExp(data, "i"))) res.push(i);
  });
  return res;
}

function changeButtonStyle(el, isMatched) {
  $(el).removeClass("btn-khaki").addClass("disabled");
  switch (isMatched) {
    case true:
      $(el).addClass("btn-success");
      break;
    case false:
      $(el).addClass("btn-danger");
      break;
    default:
      $(el).addClass("btn-warning");
  }
}
