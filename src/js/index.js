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

  const $offcanvas = $("#offcanvasAccounts")
    .addClass("offcanvas-end csk-2")
    .attr({
      tabindex: -1,
      ariaLabelledBy: "offcanvasAccountsLabel",
      "data-bs-backdrop": "static",
    });

  const $header = $("<div></div>")
    .addClass("offcanvas-header")
    .appendTo($offcanvas);

  $("<h4></h4>")
    .addClass("offcanvas-title f-silkscreen")
    .css("margin-left", "20px")
    .appendTo($header)
    .html("ACCOUNTS");

  $("<button></button>").addClass("btn-close").appendTo($header).attr({
    type: "button",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close",
  });

  const $body = $("<div></div>")
    .addClass("offcanvas-body")
    .appendTo($offcanvas);

  $("<p></p>")
    .addClass("w-px-320 mx-auto")
    .appendTo($body)
    .html(
      "Join Khaki Alien's cosmic crew on her social/gaming platforms. Let's embark on an interstellar adventure together!"
    );

  const $tiles = $("<div></div>")
    .appendTo($body)
    .addClass("d-flex flex-wrap flex-row justify-content-center mt-4");

  $.each(accountInfo, function (_, entry) {
    const $anchor = $("<a></a>")
      .addClass("p-2 m-1 wh-px-100 d-flex flex-column align-items-center")
      .addClass("justify-content-center rounded kk-border bg-hover-lighter")
      .addClass("text-decoration-none csk-2 ease-in-1")
      .appendTo($tiles)
      .attr({
        type: "button",
        href: entry.url,
        target: "_blank",
      });

    const $svgContainer = $("<div></div>")
      .addClass("d-flex flex-grow-1 align-items-center")
      .appendTo($anchor);

    const $svg = $("<svg></svg>")
      .appendTo($svgContainer)
      .attr({
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        viewbox: entry.viewbox,
        fill: entry.name == "Bandlab" ? null : "currentcolor",
      });

    if (entry.circle) {
      $("<circle></circle>").appendTo($svg).attr({
        cx: 24,
        cy: 24,
        r: 24,
        fill: "currentcolor",
      });
    }

    $("<path></path>").appendTo($svg).attr("d", entry.path);

    $("<span></span>").addClass("fs-px-12").html(entry.name).appendTo($anchor);
  });

  for (i = 0; i < 2; i++) $tiles.append('<div class="p-2 m-1 w-px-100"></div>');

  $tiles.html($tiles.html());
});

// Google Search Mockup Interactions
$(function () {
  /**
   * Searchbar Interactions
   */
  const $GSLIClasses_SI = {
    "#searchbarText": "Never gonna let you type 🎶",
    "#searchbarMic": "Lmao no one uses this",
    "#searchbarImg": "This is not DALL-E, duh.",
    "#searchbarSearch": "The results are already there =D",
  };

  for (const [$id, response] of Object.entries($GSLIClasses_SI)) {
    const $searchbar = $("#searchbarText");
    const stringOrig = $searchbar.html();
    var clickTimeout;

    $($id).on("click", function () {
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
      class: "nav-surprise",
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
      date: "May 31, 2022",
      year: "2022",
    },
    {
      title: "てねてね【tenetene】",
      cover: "./src/img/music_cover_demo_2.jpg",
      youtube: "https://www.youtube.com/watch?v=ET_wN7oQfnU",
      audio: "./src/audio/demo2.mp3",
      date: "Mar 25, 2022",
      year: "2022",
    },
  ];

  var Playlist = [];
  const $preview = $("#songPreviewPane").addClass("tab-sync-h");

  $("<colgroup></colgroup>")
    .append($("<col></col>").attr("width", "100%"))
    .append($("<col></col>").attr("width", "0%"))
    .append($("<col></col>").attr("width", "0%"))
    .appendTo($("table.playlist tbody"));

  $("<caption></caption>")
    .addClass("small")
    .html("<em>— 30 seconds snippet only. Listen full on YouTube</em>")
    .appendTo($("table.playlist").addClass("my-0"));

  $.each(songs, function (i, e) {
    // Add audio file
    const audio = createAudioElement(e.audio, resetPlayBtn);
    Playlist.push(audio);

    // Add entry to the playlist
    const $tbody = $("table.playlist tbody")
      .addClass("cursor-pointer")
      .attr("role", "tablist");
    const $tr = $(`<tr></tr>`)
      .appendTo($tbody)
      .attr({
        role: "tab",
        "data-index": i,
        "data-info": "tablePlaylistEntry",
        "data-bs-toggle": "tab",
        "data-bs-target": "#preview-" + i,
        "aria-controls": "preview-" + i,
      });

    const $ytbtn = $("<a></a>")
      .addClass("btn rounded")
      .css("--bs-btn-hover-bg", "rgba(0,0,0,0.2)")
      .attr({
        type: "button",
        target: "_blank",
        href: e.youtube,
      })
      .html('<i class="bi-box-arrow-up-right"></i>');

    $("<td></td>")
      .addClass("text-nowrap text-truncate")
      .css("max-width", "1px")
      .html(e.title)
      .appendTo($tr);
    $("<td></td>")
      .addClass("text-nowrap small d-none d-sm-table-cell")
      .html(e.date)
      .appendTo($tr)
      .css("width", "1px");
    $("<td></td>")
      .addClass("ps-3")
      .html($ytbtn)
      .attr("title", "Watch/Listen full on YouTube")
      .css("width", "1px")
      .appendTo($tr);

    // Add entry to Preview Pane
    const $tabPane = $("<div></div>")
      .appendTo($preview)
      .attr({
        role: "tabpanel",
        id: "preview-" + i,
      })
      .addClass("tab-pane fade");

    if (i == 0) {
      $tr.addClass("active");
      $tabPane.addClass("active show");
    }

    const $container = $("<div></div>")
      .appendTo($tabPane)
      .addClass("p-2 d-flex w-100 flex-lg-row flex-column");

    $("<img></img>")
      .appendTo($container)
      .addClass("m-auto p-3 h-auto w-px-250 img-fluid")
      .attr({
        src: e.cover,
        alt: "Song Cover",
      });

    const $songInfo = $("<div></div>")
      .appendTo($container)
      .addClass("p-3 my-auto flex-lg-grow-1 mt-lg-0 mx-auto text-center")
      .addClass("text-lg-start");

    $("<strong></strong>")
      .addClass("d-block fs-3 mb-2")
      .appendTo($songInfo)
      .html(e.title);

    const $ul = $("<ul></ul>")
      .addClass("my-2 list-inline list-unstyled")
      .appendTo($songInfo);

    for (const html of ["Khaki Alien", "•", "Khaki Covers"]) {
      $("<li></li>").appendTo($ul).addClass("list-inline-item").html(html);
    }

    const $year = $("<span></span>").appendTo($songInfo);
    const $icon = $("<i></i>").addClass("bi-calendar4 me-2");
    $("<small></small>")
      .appendTo($year)
      .html($icon[0].outerHTML + e.year);

    const $player = $("<div></div>")
      .addClass("mx-auto ms-lg-0")
      .appendTo($songInfo);

    const $button = $("<button></button>")
      .appendTo($player)
      .addClass("btn btn-khaki px-5 rounded-pill mt-3 play-pause-btn")
      .attr({
        type: "button",
        title: "Toggle Pause/Play",
        "data-playlist-index": i,
      });

    $("<i></i>").addClass("bi-play-fill").appendTo($button);
  });

  $('[data-info="tablePlaylistEntry"]').bind("show.bs.tab", (event) => {
    const { relatedTarget } = event;
    const i2 = $(relatedTarget).attr("data-index");

    Playlist[i2].pause();
    resetPlayBtn();
  });

  $(".play-pause-btn").on("click", function () {
    const index = $(this).attr("data-playlist-index");
    const pIcon = $(this).children("i").attr("class");
    const audio = Playlist[index];
    const icons = {
      play: "bi-play-fill",
      pause: "bi-pause-fill",
    };

    if (pIcon == icons.play) {
      $(this).children("i").attr("class", icons.pause);
      audio.play();
    } else {
      $(this).children("i").attr("class", icons.play);
      audio.pause();
    }
  });

  function resetPlayBtn() {
    $(".play-pause-btn i").attr("class", "bi-play-fill");
  }
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

  const $carousel = $("#khakiKomradesCarouselContainer");

  $.each(shuffle(khakiKomrade), function (index, entry) {
    const $carouselWrapper = $("<div></div>")
      .addClass("carousel-item user-select-none")
      .appendTo($("#khakiKomradesList"));

    if (index == 0) $carouselWrapper.addClass("active");

    const $container = $("<div></div>")
      .addClass("d-flex flex-column align-items-center text-center")
      .addClass("csk-2 rounded mx-auto w-px-350 px-4")
      .appendTo($carouselWrapper);

    const $imgDiv = $("<div></div>")
      .addClass("d-flex justify-content-center mt-4")
      .appendTo($container);

    $("<img></img>")
      .addClass("rounded-circle border border-2 wh-px-150")
      .attr("src", entry.imageURL)
      .appendTo($imgDiv)
      .attr({
        src: entry.imageURL,
        title: entry.name + "'s Avatar",
      });

    $("<span></span>")
      .addClass("fs-5 mt-3")
      .html(`<strong>${entry.name}</strong>`)
      .appendTo($container);

    $("<span></span>")
      .addClass("fs-6")
      .html(entry.profession)
      .appendTo($container);

    const $socials = $("<div></div>")
      .addClass("d-flex px-2 pt-4 pb-3 flex-row justify-content-center")
      .appendTo($container);

    for (const platform of ["facebook", "twitter", "youtube"]) {
      const $anchor = $("<a></a>")
        .addClass("p-2 m-1 wh-px-100 d-flex flex-column align-items-center")
        .addClass("justify-content-center rounded kk-border bg-hover-lighter")
        .addClass("text-decoration-none csk-2 ease-in-1")
        .appendTo($socials)
        .attr({
          type: "button",
          href: entry[`${platform}URL`],
          target: "_blank",
        });

      if (!entry[`${platform}URL`]) $anchor.addClass("disabled");

      $("<div></div>")
        .addClass("d-flex flex-grow-1 align-items-center")
        .html(`<i class="bi-${platform} fs-3"></i>`)
        .appendTo($anchor);

      $("<span></span>")
        .addClass("fs-px-12")
        .html(platform.charAt(0).toUpperCase() + platform.slice(1))
        .appendTo($anchor);
    }

    const $kk = $("<div></div>")
      .addClass("rounded-circle kk-border kk-border-hover border-3 m-2")
      .addClass("shadow wh-px-60 img-overlay")
      .addClass(index == 0 ? "active" : null)
      .attr({
        type: "button",
        "data-bs-target": "#khakiKomradesCarouselContainer",
        "data-bs-slide-to": index,
        "aria-label": `Slide ${parseInt(index) + 1}`,
      })
      .appendTo($("#khakiKomradesListAll"));

    $("<img></img>").addClass("img-fluid").appendTo($kk).attr({
      src: entry.imageURL,
      alt: "avatar-small",
    });
  });

  $carousel.bind("slide.bs.carousel", (event) => {
    const { from, to } = event;
    const list = $("#khakiKomradesListAll");
    list.children(`[data-bs-slide-to="${from}"]`).removeClass("active");
    list.children(`[data-bs-slide-to="${to}"]`).addClass("active");
  });
});

// Find unfinished section and attach modal
// For elements with incomplete sections, just add attribute incomplete=true to the parent tag
$(function () {
  // Requires src/extension/bootstrapComponents
  const modal = new BootstrapModal("modalDisabled").setBackdrop("static");
  const $body = $("<div></div>").addClass(
    "d-flex flex-column flex-lg-row align-items-center"
  );

  $("<img></img>").appendTo($body).addClass("img-fluid p-2 m-auto").attr({
    src: "./src/img/alien_blob.png",
    alt: "Alien Blob",
  });

  $("<p></p>")
    .addClass("p-2 text-justify text-lg-start")
    .appendTo($body)
    .html(
      "Oh no! You've stumbled upon an unfinished section of the universe. The cosmic architects are hard at work creating celestial wonders here. Please bear with us as we bring this section to life and prepare for a mind-blowing cosmic experience. Stay tuned for updates and get ready to embark on an interstellar adventure like no other!"
    );

  modal
    .setDialogCentered(true)
    .addClass("modal-lg")
    .setHeader("Cosmic Construction Zone!")
    .setBody($body)
    .removeFooter(true)
    .init();

  $('[incomplete="true"]').each(function () {
    $(this)
      .attr("data-bs-toggle", "modal")
      .attr("data-bs-target", "#modalDisabled");
  });
});

// Spin animation for some elements
$(function () {
  const $spin = $("#spinRightRoundBabyRightRound");
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
      $spin.removeClass("anim-float").addClass("spc-spinning");
      e.preventDefault();
    })
    .on("mouseup", function () {
      $audio.animate({ volume: 0 }, 500);
      setTimeout(() => audio.pause(), 600);
      $spin.addClass("anim-float").removeClass("spc-spinning");
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
 * @param {Function} onended The function to run when the audio ends
 * @returns An audio element
 */
function createAudioElement(src, onended) {
  const a = document.createElement("audio");
  $(a).attr("src", src);

  if (typeof onended == "function") {
    a.addEventListener("ended", onended, false);
  }

  return a;
}

function shuffle(a) {
  let i0 = a.length,
    ir;
  while (i0 != 0) {
    ir = Math.floor(Math.random() * i0);
    i0--;
    [a[i0], a[ir]] = [a[ir], a[i0]];
  }
  return a;
}
