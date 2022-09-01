// All these functions are ones that is only used on index.html

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
