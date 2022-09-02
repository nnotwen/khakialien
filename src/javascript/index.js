// All these functions are ones that is only used on index.html

const songs = [
  {
    title: 'I\'m in love with someone, who\'s in love with someone',
    cover: './src/images/music_cover_demo_1.jpg',
    youtube: 'https://www.youtube.com/watch?v=1dCJdj_HOoY',
    audio: './src/audio/demo1.mp3',
  },
  {
    title: 'てねてね【tenetene】',
    cover: './src/images/music_cover_demo_2.jpg',
    youtube: 'https://www.youtube.com/watch?v=ET_wN7oQfnU&t=10s',
    audio: './src/audio/demo2.mp3',
  },
]

$(function(){
    // Rickroll fn
    // $(document).ready(function(){
        var kindsound = document.createElement('audio');
        kindsound.setAttribute('src', './src/audio/kindsound.mp3');

        $('.click-me').on('click', function(){
            kindsound.play();
        });

        $(document).on("contextmenu",function(e){
            // Do not open context menu for images
            if (e.target.nodeName == 'IMG'){
                e.preventDefault();
            };
        });
    // });

    // Navbar
    $('.nav-bar-toggle').on('click', function(){
        if ($('.nav-bar-links').hasClass('active')){
            $('.nav-bar-links').removeClass('active');
        } else {
            $('.nav-bar-links').addClass('active');
        }
    });

    // slipper fn
    var totalTitleClicks = 0, isAnimating = false;
    $('.clickable-entity-popup').on('click', function(){
        if (isAnimating) return null;
            totalTitleClicks++;
        if (totalTitleClicks >= Math.floor(Math.random() * 10) + 15){
            const duration = 1500;
                  isAnimating = true;
            // Add gelatine effect while popping up
            $('.popup-slippers').addClass('gelatine');
            // Flip after 2.5 seconds
            setTimeout(function(){
                $('.popup-slippers').addClass('mirrorflip');
            }, 2500);
            // Remove after 8 seconds
            setTimeout(function(){
                isAnimating = false;
                totalTitleClicks = 0;
                $('.popup-slippers').removeClass('gelatine mirrorflip');
            }, duration + 8000)
        };
    });


    // Google section
    const originalString = $('.searchbar-text').html();
    var clickTimeout;
    $('.searchbar-text').on('click', function(){
        clearTimeout(clickTimeout);
        $('.searchbar-text').html('Never gonna let you type 🎶');
        clickTimeout = setTimeout(function(){
          $('.searchbar-text').html(originalString);
        }, 5000);
    });
    $('.microphone').on('click', function(){
        clearTimeout(clickTimeout);
        $('.searchbar-text').html('Lmao no one uses this');
        clickTimeout = setTimeout(function(){
          $('.searchbar-text').html(originalString);
        }, 5000);
    });
    $('.magnifying-glass').on('click', function(){
        clearTimeout(clickTimeout);
        $('.searchbar-text').html('Results are already there =D');
        clickTimeout = setTimeout(function(){
          $('.searchbar-text').html(originalString);
        }, 5000);
    });
    const pronunciation = document.createElement('audio');
    pronunciation.setAttribute('src', './src/audio/quirky.mp3');
    $('.pronunciation').on('click', function(){
        pronunciation.play();
    })
    const butiti = document.createElement('audio');
    butiti.setAttribute('src', 'src/audio/butiti.mp3');
    $('.butiti').on('click', function(){
        butiti.play();
    });

    $.each(songs, (index, entry) => {
        $('.music-interface-wrapper').append(
          `<div class="music-interface playlist-order-${index}">
              <div class="album-cover">
                  <div class="image" style="background:url('${entry.cover}');";>
                  </div>
                  ${'<div class="wave"></div>'.repeat(3)}
                  <?xml version="1.0" encoding="iso-8859-1"?>
                  <svg playlist-order="${index}" class="music-play-btn" id="music-interface-${index + 1}" class="music-play-btn" version="1.1" width="100" height="100" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"> <path d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"/><path d="M176.416,129.792v252.416L395.024,256L176.416,129.792z M192.416,157.504L363.024,256l-170.608,98.496V157.504z"/></svg>
                  <svg style="display:none;" playlist-order="${index}" class="music-pause-btn" version="1.1" width="100" height="100" fill="#fff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/> <path d="M33,46h8V14h-8V46z M35,16h4v28h-4V16z"/> <path d="M19,46h8V14h-8V46z M21,16h4v28h-4V16z"/> </svg>
                  <div class="play-end-modal" style="display:none;"><p>Listen to the full song on YouTube</p></div>
                  <div class="progress-bar" style="position:absolute;top:0;left:0;height:5px;width:0;background-color:red;"></div>
              </div>
              <div class="album-info">
                  <h2 class="title">${entry.title}</h2>
                  <a href="${entry.youtube}" target="_blank" class="listen-full">
                    <svg style="vertical-align: top; margin: auto 3px;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" ne="0.21882278677192857"><title>YouTube</title><path d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z" fill="red"></path></svg></div>
                  </a>
              </div>
          </div>`
        );
        entry.handle = document.createElement('audio');
        entry.handle.setAttribute('src', entry.audio);
        $(entry.handle).on('ended', function(){
            this.currentTime = 0;
            $(`.playlist-order-${index} .play-end-modal`).show();
            $(`.playlist-order-${index} .music-play-btn, .playlist-order-${index} .music-pause-btn`).toggle();
            $(`.playlist-order-${index}`).toggleClass('playing');
        });
    });

    $(`.music-interface svg`).on('click', function(){
        var index = $(this).attr('playlist-order');
        const selector = `.playlist-order-${index}`;
        const interface = $(`.music-interface .playlist-order-${index}`);
            $(`${selector} .music-play-btn, ${selector} .music-pause-btn`).toggle();
            $(`${selector}`).toggleClass('playing');
        if ($(`${selector}`).hasClass('playing')){
            songs[index].handle.play();
            songs[index].progress = setInterval(function(){
                $(`${selector} .progress-bar`).css('width', `${( songs[index].handle.currentTime / songs[index].handle.duration) * 100}%`)
            }, 100);
            console.log(songs[index].progress)
            $(`.playlist-order-${index} .play-end-modal`).hide();
            $.each(songs, i => {
                if ((index != i) && $(`.playlist-order-${i}`).hasClass('playing')){
                    $(`.playlist-order-${i} .music-play-btn, .playlist-order-${i} .music-pause-btn`).toggle();
                    $(`.playlist-order-${i}`).toggleClass('playing');
                    songs[i].handle.pause();
                    clearTimeout(songs[index].progress);
                };
            });
        } else {
            if (songs[index]){
                songs[index].handle.pause();
                clearTimeout(songs[index].progress);
            };
        };
    });

    // Sticky nav-bar
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0){
            $('.nav-placeholder').fadeOut();
            $('.nav-bar').addClass('sticky').fadeIn('slow');
        } else {
            $('.nav-placeholder').fadeIn();
            $('.nav-bar').removeClass('sticky').fadeIn('slow');
        };
    });
});
