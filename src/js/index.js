// This file is used only for the index.html page

// Made with love 💕

// Personal Account Information Loader (Off-canvas)
$(function () {
  const accountInfo = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UC6nRmYgZEs5sedJnEvCq9Aw?sub_confirmation=1",
      viewbox: "0 0 24 24",
      path: "M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@khaki_alien",
      viewbox: "0 0 24 24",
      path: "M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z",
    },
    {
      name: "Bandlab",
      url: "https://www.bandlab.com/khaki_alien",
      viewbox: "0 0 48 48",
      path: "M22.862,29.653c-1.59,0-2.562-0.95-2.562-2.253c0-1.811,1.833-3.38,3.866-3.821l-4.727-11.641h8.239	l1.502,2.916h-5.765l3.446,8.394c0.287,0.663,0.464,1.392,0.464,2.098C27.302,27.842,24.828,29.653,22.862,29.653L22.862,29.653z M31.414,18.016l3.601,6.173c0.685,1.23,1.082,2.614,1.127,4.042c0,4.503-3.578,7.754-8.637,7.754H20.59	c-5.08,0-8.637-3.251-8.637-7.754c0.044-1.406,0.42-2.79,1.104-4.042l3.601-6.173h3.38l-4.219,7.271	c-0.508,0.879-0.795,1.867-0.839,2.878c0,2.878,1.966,4.899,5.699,4.899h6.715c3.733,0,5.699-2.043,5.699-4.899	c-0.022-1.01-0.309-1.999-0.839-2.878l-4.197-7.271H31.414z",
      circle: true,
    },
    {
      name: "osu!",
      url: "https://osu.ppy.sh/users/26302221",
      viewbox: "0 0 48 48",
      path: "M 25 3 C 12.85 3 3 12.85 3 25 C 3 37.15 12.85 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 38 18 L 40 18 L 40 26 L 38 26 L 38 18 z M 14.048828 20.898438 C 14.523828 20.898438 14.995078 20.968719 15.455078 21.136719 C 16.701078 21.591719 17.454875 22.528516 17.796875 23.853516 C 17.936875 24.396516 17.994047 24.950641 17.998047 25.556641 C 17.988047 26.368641 17.875859 27.204516 17.505859 27.978516 C 16.940859 29.161516 16.01125 29.820578 14.78125 30.017578 C 14.50125 30.063578 14.222359 30.087891 13.943359 30.087891 C 13.484359 30.087891 13.028078 30.022094 12.580078 29.871094 C 11.402078 29.474094 10.664438 28.608531 10.273438 27.394531 C 10.019438 26.604531 9.9594844 25.791844 10.021484 24.964844 C 10.082484 24.155844 10.271641 23.3835 10.681641 22.6875 C 11.270641 21.6865 12.138375 21.129891 13.234375 20.962891 C 13.506375 20.921891 13.777828 20.898437 14.048828 20.898438 z M 23.263672 20.90625 C 23.311672 20.90625 23.359203 20.90525 23.408203 20.90625 C 24.174203 20.92025 24.914719 21.08175 25.636719 21.34375 C 25.684719 21.36075 25.731656 21.369172 25.722656 21.451172 C 25.658656 22.018172 25.52025 22.562172 25.28125 23.076172 C 25.27625 23.086172 25.269531 23.095703 25.269531 23.095703 C 24.905531 22.985703 24.559125 22.862297 24.203125 22.779297 C 23.960125 22.723297 23.71475 22.689453 23.46875 22.689453 C 23.26175 22.689453 23.055609 22.712625 22.849609 22.765625 C 22.612609 22.827625 22.399594 22.935172 22.308594 23.201172 C 22.187594 23.553172 22.304859 23.909688 22.630859 24.054688 C 22.986859 24.213687 23.360562 24.325984 23.726562 24.458984 C 24.047563 24.575984 24.377453 24.674453 24.689453 24.814453 C 25.518453 25.186453 25.930234 25.872547 25.990234 26.810547 C 26.041234 27.598547 25.862562 28.307344 25.351562 28.902344 C 24.908562 29.416344 24.344703 29.716391 23.720703 29.900391 C 23.262703 30.035391 22.796125 30.082031 22.328125 30.082031 C 22.101125 30.082031 21.875438 30.071687 21.648438 30.054688 C 21.046437 30.010687 20.466391 29.857625 19.900391 29.640625 C 19.837391 29.616625 19.815266 29.587625 19.822266 29.515625 C 19.882266 28.935625 20.028906 28.381609 20.253906 27.849609 C 20.260906 27.831609 20.269203 27.815156 20.283203 27.785156 C 20.325203 27.801156 20.36625 27.814078 20.40625 27.830078 C 20.99625 28.065078 21.599516 28.220703 22.228516 28.220703 C 22.290516 28.220703 22.352062 28.218844 22.414062 28.214844 C 22.734063 28.198844 23.046984 28.147422 23.333984 27.982422 C 23.717984 27.761422 23.861719 27.434531 23.761719 27.019531 C 23.722719 26.859531 23.647813 26.721391 23.507812 26.650391 C 23.278813 26.534391 23.045687 26.421891 22.804688 26.337891 C 22.370687 26.184891 21.926188 26.06125 21.492188 25.90625 C 21.171187 25.79125 20.884047 25.604047 20.623047 25.373047 C 20.258047 25.050047 20.085391 24.624625 20.025391 24.140625 C 19.957391 23.593625 19.985219 23.054016 20.199219 22.541016 C 20.485219 21.854016 21.003391 21.434781 21.650391 21.175781 C 22.170391 20.966781 22.713672 20.90625 23.263672 20.90625 z M 29.070312 21.007812 C 29.437313 21.007812 29.805781 21.040375 30.175781 21.109375 L 30.175781 21.267578 C 30.176781 22.859578 30.170594 24.450969 30.183594 26.042969 C 30.186594 26.363969 30.236641 26.690906 30.306641 27.003906 C 30.447641 27.634906 30.835828 27.986312 31.423828 28.070312 C 31.580828 28.092312 31.738531 28.103516 31.894531 28.103516 C 32.159531 28.103516 32.422547 28.073578 32.685547 28.017578 C 32.780547 27.997578 32.810547 27.958609 32.810547 27.849609 C 32.807547 25.654609 32.808594 23.460625 32.808594 21.265625 L 32.808594 21.109375 C 33.173594 21.040375 33.534484 21.007812 33.896484 21.007812 C 34.261484 21.007812 34.627094 21.041375 34.996094 21.109375 L 34.996094 21.236328 C 34.996094 23.963328 34.995047 26.690969 34.998047 29.417969 C 34.998047 29.514969 34.972625 29.550125 34.890625 29.578125 C 33.934625 29.898125 32.962703 30.082031 31.970703 30.082031 C 31.778703 30.082031 31.586578 30.0765 31.392578 30.0625 C 30.877578 30.0245 30.361094 29.973344 29.871094 29.777344 C 28.944094 29.407344 28.421156 28.647578 28.160156 27.642578 C 28.006156 27.050578 27.96975 26.442078 27.96875 25.830078 C 27.96575 24.293078 27.96875 22.75575 27.96875 21.21875 C 27.96875 21.18475 27.970656 21.150375 27.972656 21.109375 C 28.339656 21.041375 28.705312 21.007812 29.070312 21.007812 z M 13.972656 22.787109 C 13.914656 22.787109 13.856828 22.789922 13.798828 22.794922 C 13.297828 22.833922 12.904734 23.075594 12.677734 23.558594 C 12.573734 23.780594 12.490547 24.019766 12.435547 24.259766 C 12.284547 24.920766 12.287609 25.592672 12.349609 26.263672 C 12.386609 26.669672 12.472437 27.064594 12.648438 27.433594 C 12.814438 27.780594 13.057109 28.039156 13.412109 28.160156 C 13.606109 28.226156 13.801094 28.259766 13.996094 28.259766 C 14.199094 28.259766 14.401516 28.223391 14.603516 28.150391 C 15.060516 27.985391 15.307891 27.61225 15.462891 27.15625 C 15.642891 26.62625 15.681453 26.073266 15.689453 25.447266 C 15.683453 25.320266 15.678109 25.125641 15.662109 24.931641 C 15.625109 24.469641 15.547656 24.017656 15.347656 23.597656 C 15.146656 23.175656 14.828719 22.906219 14.386719 22.824219 C 14.250719 22.800219 14.110656 22.787109 13.972656 22.787109 z M 38 28 L 40 28 L 40 30 L 38 30 L 38 28 z",
    },
    {
      name: "Steam",
      url: "https://steamcommunity.com/profiles/76561199211022971",
      viewbox: "0 0 48 48",
      path: "M 25 3 C 13.59 3 4.209375 11.680781 3.109375 22.800781 L 14.300781 28.529297 C 15.430781 27.579297 16.9 27 18.5 27 L 18.550781 27 C 18.940781 26.4 19.389375 25.649141 19.859375 24.869141 C 20.839375 23.259141 21.939531 21.439062 23.019531 20.039062 C 23.259531 15.569063 26.97 12 31.5 12 C 36.19 12 40 15.81 40 20.5 C 40 25.03 36.430937 28.740469 31.960938 28.980469 C 30.560938 30.060469 28.750859 31.160859 27.130859 32.130859 C 26.350859 32.610859 25.6 33.059219 25 33.449219 L 25 33.5 C 25 37.09 22.09 40 18.5 40 C 14.91 40 12 37.09 12 33.5 C 12 33.33 12.009531 33.17 12.019531 33 L 3.2792969 28.519531 C 4.9692969 38.999531 14.05 47 25 47 C 37.15 47 47 37.15 47 25 C 47 12.85 37.15 3 25 3 z M 31.5 14 C 27.92 14 25 16.92 25 20.5 C 25 24.08 27.92 27 31.5 27 C 35.08 27 38 24.08 38 20.5 C 38 16.92 35.08 14 31.5 14 z M 31.5 16 C 33.99 16 36 18.01 36 20.5 C 36 22.99 33.99 25 31.5 25 C 29.01 25 27 22.99 27 20.5 C 27 18.01 29.01 16 31.5 16 z M 18.5 29 C 17.71 29 16.960313 29.200312 16.320312 29.570312 L 19.640625 31.269531 C 20.870625 31.899531 21.350469 33.410625 20.730469 34.640625 C 20.280469 35.500625 19.41 36 18.5 36 C 18.11 36 17.729375 35.910469 17.359375 35.730469 L 14.029297 34.019531 C 14.289297 36.259531 16.19 38 18.5 38 C 20.99 38 23 35.99 23 33.5 C 23 31.01 20.99 29 18.5 29 z",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/khakialien",
      viewbox: "0 0 48 48",
      path: "M 5.3125 1 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 26.40625 43 L 35.40625 43 L 48 30.4375 L 48 1 Z M 11 6 L 43 6 L 43 28 L 37 34 L 25 34 L 19 40 L 19 34 L 11 34 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100079412396828",
      viewbox: "0 0 48 48",
      path: "M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z",
    },
  ];
  const xmlns = "http://www.w3.org/2000/svg";
  $.each(accountInfo, function (_, entry) {
    $(".offcanvas-body .personal-accounts").append(
      `<li class="list-group-item">
        <a href="${entry.url}" target="_blank">
          <svg xmlns="${xmlns}" width="24" height="24" viewbox="${
        entry.viewbox
      }" ${entry.name === "Bandlab" ? "" : 'fill="currentcolor"'}>
            ${
              entry.circle
                ? '<circle cx="24" cy="24" r="20" fill="currentcolor"></circle>'
                : ""
            }
            <path d="${entry.path}">
          </svg>
          <span>${entry.name}</span>
        </a>
      </li>`
    );
  });

  $(".offcanvas-body .personal-accounts").append(
    '<li class="list-group-item"></li>'
  );
});

// Google Search Mockup Interactions
$(function () {
  /**
   * Searchbar Interactions
   */
  const $GSLIClasses_SI = {
    ".searchbar-text": "Never gonna let you type 🎶",
    ".google-searchbar-mic-icon": "Lmao no one uses this",
    ".google-searchbar-image-icon": "This is not DALL-E, duh.",
    ".google-searchbar-search-icon": "The results are already there =D",
  };

  for (const [$className, response] of Object.entries($GSLIClasses_SI)) {
    const $searchbar = $(".searchbar-text");
    const stringOrig = $searchbar.html();
    var clickTimeout;

    $($className).on("click", function () {
      clearTimeout(clickTimeout);
      $searchbar.html(response);
      clickTimeout = setTimeout(function () {
        $searchbar.html(stringOrig);
      }, 5_000);
    });
  }

  /**
   * Search results interactions
   * Navigation Buttons
   */
  $(".result-navigation").on("click", function () {
    $(".result-navigation").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
  });
});

// Music Related Interactions
$(function () {
  /**
   * @note These music have no media controls, they only play until the audio ends
   * @param class The class to read click events from
   * @param file The audio file name + extension (must be in the audio folder)
   */
  const music = [
    {
      class: "nav-surprise-ele",
      file: "kindsound.mp3",
    },
    {
      class: "butiti",
      file: "butiti.mp3",
    },
  ];

  $.each(music, function (_, entry) {
    const audio = createAudioElement(`./src/audio/${entry.file}`);
    $(`.${entry.class}`).on("click", () => audio.play());
  });

  // Music Player Interaction
});

// LISTEN SECTION Music Player Interaction
$(function () {
  const songs = [
    {
      title: "I'm in love with someone, who's in love with someone",
      cover: "./src/img/music_cover_demo_1.jpg",
      youtube: "https://www.youtube.com/watch?v=1dCJdj_HOoY",
      audio: "./src/audio/demo1.mp3",
    },
    {
      title: "てねてね【tenetene】",
      cover: "./src/img/music_cover_demo_2.jpg",
      youtube: "https://www.youtube.com/watch?v=ET_wN7oQfnU&t=10s",
      audio: "./src/audio/demo2.mp3",
    },
  ];

  var Playlist = [];

  $.each(songs, function (index, entry) {
    // Add audio files
    const audio = createAudioElement(entry.audio);
    Playlist.push(audio);

    // Create a container for the music player
    const $musicPlayer = $(div("music-player card card-dark scroll-fade-in")) // Add styles
      .append(`<img src="${entry.cover}" class="card-img-top" alt=""></img>`) // Add image
      .appendTo($(".music-player-container")); // Append to the main container (housing all music)

    // Create progress bar container for the music player
    const $progressBarContainer = $(
      div("progress no-border-radius progress-bg-dark")
    );

    // Add additional metadata for the progressbar container
    $progressBarContainer.attr({
      role: "progressbar",
      "aria-label": "Animated Striped Example",
      "aria-valuenow": 0,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
    });

    // Set progressbar container height
    $progressBarContainer.css("height", "5px");

    // Create the progress bar for the progress bar container
    const $progressBar = $(
      div(
        "progress-bar progress-bar-striped progress-bar-animated youtube-progress"
      )
    );

    $progressBar
      .attr("id", `music-progress-${index}`) // Add progress bar identifier
      .css("width", "100%") // Add initial width (ctx: duration) to the progress bar
      .appendTo($progressBarContainer); // Append progress bar to its container

    // Append Progress Bar container to the Music Player Container
    $progressBarContainer.appendTo($musicPlayer);

    // Add Music Player description container
    const $musicPlayerDescription = $(div("card-body card-body-dark")).appendTo(
      $musicPlayer // Append Description to its container
    );

    // Add main text (title of the music)
    $(`<p>${entry.title}</p>`)
      .addClass("card-title") // Add Styling to texts
      .css({ "text-align": "left", "line-height": 1.5 }) // Add stylings to text
      .appendTo($musicPlayerDescription); // Append to Desc Container

    // Add subtext (author of the music)
    $("<small>by Khaki Alien</small>")
      .addClass("card-text") // Add Styling to text
      .appendTo($musicPlayerDescription); // Append to Desc Container

    // Create Media Control Buttons
    const $mediaControl = $(div("media-control btn-group")) // Create the button container
      .attr("role", "group") // Add attributes
      .appendTo($musicPlayer); // Append the button container to the Music Player

    // Add skipstart, play, and skipend buttons
    for (const icn of ["skip-start", "play", "skip-end"]) {
      $(btn("btn btn-dark no-border-radius")) // Create the button
        .attr("id", `player-${icn.replace(/-/gi, "")}-${index}`) // Add attributes to button
        .append(`<i class="bi-${icn}-fill"></i>`) // Add button identifiers
        .appendTo($mediaControl); // Append this button to the button container
    }

    // Add ref page
    $(`<a href="${entry.youtube}"></a>`) // Add the url reference
      .html('<i class="bi-youtube"></i>\u2000Watch full on YouTube')
      .addClass("card-footer btn btn-youtube")
      .attr("target", "_blank")
      .appendTo($musicPlayer);
  });

  $(".media-control button").on("click", function () {
    const [, action, index] = this.id.split("-");

    // DOM Elements
    const $progressBar = $(`#music-progress-${index}`);
    const $buttonIcon = $(`#${this.id} i`);

    // ICONS
    const icons = {
      play: "bi-play-fill",
      pause: "bi-pause-fill",
    };

    const music = Playlist[index];
    var timer;

    // Skip the music to start
    if (action === "skipstart") {
      music.currentTime = 0;
    }

    // Play Music
    if (action === "play") {
      // Check for any other element that might be playing a music
      $(".music-playing").each(function () {
        if (this.id.split("-")[2] !== index) {
          // Pause music
          Playlist[this.id.split("-")[2]].pause();
          // Toggle Icon
          $(`#${this.id} i`).removeClass(icons.pause).addClass(icons.play);
          // Remove the indicator that it is playing music
          $(this).removeClass("music-playing");
          // Stop progress bar from updating
          clearInterval(timer);
        }
      });
      // If this element is not playing any music
      if (!$(this).hasClass("music-playing")) {
        // Play the music
        music.play();
        // Replace the icon
        $buttonIcon.removeClass(icons.play).addClass(icons.pause);
        // Add an indicator that it is playing music
        $(this).addClass("music-playing");
        // Update the progress bar
        const $parentThis = $(this);
        timer = setInterval(function () {
          const percentage = (music.currentTime / music.duration) * 100;
          $progressBar.css({ width: percentage + "%" });
          if (percentage === 100) {
            $buttonIcon.removeClass(icons.pause).addClass(icons.play);
            $parentThis.removeClass("music-playing");
          }
        }, 200);
        // If this element is playing a music
      } else {
        // Pause the music
        music.pause();
        // Replace the icon
        $buttonIcon.removeClass(icons.pause).addClass(icons.play);
        // Remove the indicator that it is playing music
        $(this).removeClass("music-playing");
        // Stop progress bar from updating
        clearInterval(timer);
      }
    }

    // Skip music to end
    if (action === "skipend") {
      music.currentTime = music.duration;
    }
  });
});

// Khakikomrade carousel interaction
$(function () {
  var khakiKomrade = [
    {
      name: "Shiro",
      imageURL: "./src/img/avatar_shiro.jpg",
      profession: "Geek Vtuber/Cookie Thief",
      facebookURL: "https://www.facebook.com/profile.php?id=100058698823483",
      twitterURL: "https://twitter.com/ShiroChLounge",
      youtubeURL: "https://www.youtube.com/channel/UCTHdNrMvnpr6kez7kNnJ4Lw",
    },
    {
      name: "Rayne Fujita",
      imageURL: "./src/img/avatar_rayne_fujita.jpg",
      profession: "UnSeiso Vtuber/Ice Wizard",
      facebookURL: null,
      twitterURL: "https://twitter.com/FujitaRayne",
      youtubeURL: "https://www.youtube.com/c/RayneFujitaCh",
    },
    {
      name: "Cielo",
      imageURL: "./src/img/avatar_cielo.jpg",
      profession: "Earthman Vtuber",
      facebookURL: null,
      twitterURL: null,
      youtubeURL: "https://www.youtube.com/channel/UCXNKAX0dD1teqpRGpR8W6PA",
    },
    {
      name: "Tanaka Daisuke",
      imageURL: "./src/img/avatar_tanaka_daisuke.jpg",
      profession: "Retired Detective Vtuber/Cook",
      facebookURL: null,
      twitterURL: "https://twitter.com/tantan_dai",
      youtubeURL: "https://www.youtube.com/channel/UCNveiZXBevVnDk79fPXp9WA",
    },
    {
      name: "Wendy Wen",
      imageURL: "./src/img/avatar_wen.jpg",
      profession: "Professional Earthman",
      facebookURL: "https://web.facebook.com/nnotwen",
      twitterURL: " https://twitter.com/wen_bolongaita",
      youtubeURL: "https://www.youtube.com/channel/UCYqemyCb2yiMqfrVeMNMmAw",
    },
    {
      name: "Klessy",
      imageURL: "./src/img/avatar_klessy.jpg",
      profession: "Joe Papa / Moon Boy",
      facebookURL: null,
      twitterURL: null,
      youtubeURL: "https://www.youtube.com/channel/UCYIuKWf3zYKWDc6j_IqWvxg",
    },
    {
      name: "wasd",
      imageURL: "./src/img/avatar_wasd.jpg",
      profession: "Transparent Earthman",
      facebookURL: null,
      twitterURL: "https://twitter.com/wasdwasd42",
      youtubeURL: null,
    },
    {
      name: "Eri",
      imageURL: "./src/img/avatar_eri.jpg",
      profession: "Star-shaped Potato / Erikapter",
      facebookURL: "https://web.facebook.com/profile.php?id=100074425643923",
      twitterURL: null,
      youtubeURL: null,
    },
    {
      name: "Tratachuli",
      imageURL: "./src/img/avatar_trata.jpg",
      profession: "Earthman FB Streamer",
      facebookURL: "https://web.facebook.com/Tratachuli-103989062191157/",
      twitterURL: null,
      youtubeURL: null,
    },
    {
      name: "Maya",
      imageURL: "./src/img/avatar_maya.jpg",
      profession: "Artistic Earthman Maddae",
      facebookURL: "https://www.facebook.com/profile.php?id=100081383273468",
      twitterURL: null,
      youtubeURL: null,
    },
    {
      name: "XiaoMogi",
      imageURL: "./src/img/avatar_xiao.jpg",
      profession: "Game Enjoyer Earthman",
      facebookURL: "https://web.facebook.com/kwak1kiii",
      twitterURL: null,
      youtubeURL: null,
    },
    {
      name: "Cation",
      imageURL: "./src/img/avatar_cation.jpg",
      profession: "Meme-sama",
      youtubeURL: "https://youtube.com/channel/UC204Lwn8PlWRPSjsGjSHZXA",
    },
    {
      name: "magikarp",
      profession: "Earth fishda / osu!mania Smasher",
      imageURL: "./src/img/avatar_magikarp.jpg",
    },
    {
      name: "Yoshi",
      profession: "Artistic Unidentified Being",
      imageURL: "./src/img/avatar_placeholder.jpg",
    },
    {
      name: "Nehemiah Go",
      profession: "Bassist / Percussionist / Audio Editor",
      imageURL: "./src/img/avatar_nehemiah_go.jpg",
      facebookURL: "https://www.facebook.com/miahgo",
      youtubeURL: "https://youtube.com/channel/UCqjtQTB-r18oVMISrv9QW4w",
    },
    {
      name: "Zek",
      profession: "Artistic Animator Earthman",
      imageURL: "./src/img/avatar_zek.jpg",
      twitterURL: "https://mobile.twitter.com/ZekkaellHades",
    },
  ];

  const active = Math.floor(Math.random() * khakiKomrade.length);

  $.each(khakiKomrade, function (index, entry) {
    const isActive = index === active ? "active" : "";

    const $carouselInner = $(".khakikomrades-carousel .carousel-inner");
    const $carouselItem = $(div(`carousel-item ${isActive}`)) //
      .appendTo($carouselInner); //

    const $card = $(div("card card-dark mb-3"))
      .css({ "max-width": "540px", margin: "auto" }) // Set max width to 540px and margin to auto
      .appendTo($carouselItem); // Append to carousel item

    const $cardEarthman = $(div("card-earthman card-body-dark")) //
      .appendTo($card);

    const $imageContainer = $(div("card-earthman-img")) //
      .appendTo($cardEarthman);

    $('<img class="img-fluid rounded-start"></img>') //
      .appendTo($imageContainer)
      .attr({ src: entry.imageURL, alt: "..." })
      .css("height", "180px");

    const $cardBody = $(div("card-body"));
    const $socmedIcons = $(div("socmed-icons"));

    $(div("card-earthman-desc")) //
      .append($cardBody)
      .appendTo($cardEarthman);

    $cardBody
      .append(`<h5 class="card-title">${entry.name}</h5>`)
      .append(`<small class="card-subtitle">${entry.profession}</small>`)
      .append($socmedIcons);

    for (const socmed of ["Facebook", "Twitter", "YouTube"]) {
      const url = entry[socmed.toLowerCase() + "URL"] || null;
      const $anchor = $("<a></a>").attr({
        target: "_blank",
        title: `${entry.name}'s ${socmed}${url ? "" : ": Not Found"}`,
        class: `bi-${socmed.toLowerCase()}`,
      });

      if (url) {
        $anchor.attr("href", url).addClass("hoverable");
      } else {
        $anchor.attr("style", "cursor: not-allowed !important");
      }

      $anchor.appendTo($socmedIcons);
    }
  });
});

// Find unfinished section and attach modal
// For elements with incomplete sections, just add attribute incomplete=true to the parent tag
$(function () {
  $('[incomplete="true"]').each(function () {
    $(this)
      .attr("data-bs-toggle", "modal")
      .attr("data-bs-target", "#modal-disabled");
  });
});

// Spin animation for some elements
$(function () {
  const $spin = $(".play-spin");
  if (!$spin) return;

  const audio = document.createElement("audio");
  const $audio = $(audio).attr("src", "./src/audio/spin.mp3");

  $audio.on("ended", function () {
    this.currentTime = 0;
    this.play();
  });

  $spin
    .on("mousedown", function (e) {
      audio.play();
      $audio.animate({ volume: 1 }, 500);
      $spin.removeClass("anim-float").addClass("play-spin-playing");
      e.preventDefault();
    })
    .on("mouseup", function () {
      $audio.animate({ volume: 0 }, 500);
      setTimeout(() => audio.pause(), 600);
      $spin.addClass("anim-float").removeClass("play-spin-playing");
    });
});

/**
 * Create a div template with a classname
 * @param {string} className the classname to be used
 * @returns div template
 */
function div(className) {
  return `<div class="${className}"></div>`;
}

/**
 * Create a button template with a classname
 * @param {string} className the classname to be used
 * @returns div template
 */
function btn(className) {
  return `<button type="button" class="${className}"></button>`;
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
