// All these functions are ones that is only used on index.html

$(function(){
    // Rickroll fn
    // $(document).ready(function(){
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', './src/audio/kindsound.mp3');

        $('.click-me').on('click', function(){
            audioElement.play();
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
