$(function(){

    $(document).ready(function(){
        var audioElement = document.createElement('audio');
        var canPlay = false, duration;
        audioElement.setAttribute('src', './src/audio/kindsound.mp3');

        $(audioElement).on('canplay', function(){
            canPlay = true;
            duration = this.duration;
        });

        $('.click-me').on('click', function(){
            if (canPlay){
                $(audioElement).animate({ volume: 1 });
                audioElement.play();
                // $(audioElement).animate({ volume: 1.0}, 0);
                $(audioElement).animate({ volume: 0.0 }, (duration + 1) * 1000);
            };
        });

        $(document).on("contextmenu",function(e){
            // Do not open context menu for images
            if (e.target.nodeName == 'IMG'){
                e.preventDefault();
            };
        });
    });

    $('.nav-bar-toggle').on('click', function(){
        if ($('.nav-bar-links').hasClass('active')){
            $('.nav-bar-links').removeClass('active');
        } else {
            $('.nav-bar-links').addClass('active');
        }
    });

    $(window).scroll(function(){

        if ($(this).scrollTop() > 0){
            $('.nav-placeholder').fadeOut();
            $('.nav-bar').addClass('sticky').fadeIn('slow');
        } else {
            $('.nav-placeholder').fadeIn();
            $('.nav-bar').removeClass('sticky').fadeIn('slow');
        };

        //https://codepen.io/codingtuting/pen/BaBVjRR/
        //Zoom-in
        $('.scroll-zoom-in').each(function(){
          var zoomIn = 1, zoomOut = 0;
          if(isScrolledIntoView($(this))){
              $(this).css({
                  '-webkit-transform': 'scale(' + zoomIn + ')',
                  'transform': 'scale(' + zoomIn + ')'
              });
          }

          // else{
          //     $(this).css({
          //         '-webkit-transform': 'scale(' + zoomOut + ')',
          //         'transform': 'scale(' + zoomOut + ')'
          //     });
          // }
        });

        //Fade-in
        $('.scroll-fade-in').each(function(){

            if(isScrolledIntoView($(this))){
                $(this).css({
                    'opacity':1,
                    'visibility':'visible'
                });
            }
            // else{
            //     $(this).css({
            //         'opacity':0,
            //         'visibility':'hidden'
            //     });
            // }
        });
    });
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
