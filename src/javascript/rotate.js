(function() {
    var init, rotate, start, stop,
      active = false,
      angle = 0,
      rotation = 0,
      startAngle = 0,
      center = {
        x: 0,
        y: 0
      },
      R2D = 180 / Math.PI,
      rot = document.getElementById('rotate');

    init = function() {
      rot.addEventListener("mousedown", start, false);
      $(document).bind('mousemove', function(event) {
        if (active === true) {
          event.preventDefault();
          rotate(event);
        }
      });
      $(document).bind('mouseup', function(event) {
        event.preventDefault();
        stop(event);
      });
    };

    start = function(e) {
      e.preventDefault();
      var bb = this.getBoundingClientRect(),
        t = bb.top,
        l = bb.left,
        h = bb.height,
        w = bb.width,
        x, y;
      center = {
        x: l + (w / 2),
        y: t + (h / 2)
      };
      x = e.clientX - center.x;
      y = e.clientY - center.y;
      startAngle = R2D * Math.atan2(y, x);
      return active = true;
    };

    rotate = function(e) {
      e.preventDefault();
      var x = e.clientX - center.x,
        y = e.clientY - center.y,
        d = R2D * Math.atan2(y, x);
      rotation = d - startAngle;
      var totalAngle = angle + rotation;
      return rot.style.webkitTransform = "rotate(" + (totalAngle > 1000 ? totalAngle - 1000 : totalAngle) + "deg)";
    };

    stop = function() {
      angle += rotation;
      return active = false;
    };

    init();



    $(window).on('scroll', function(){
        if (rot.style.webkitTransform !== 'rotate(0deg)'){
            rot.style.webkitTransition = '1s ease-in-out'
            rot.style.webkitTransform = 'rotate(0deg)';
            setTimeout(function(){
                rot.style.webkitTransition = null;
            }, 1000);
        };
    });

}).call(this);

// Add sound when rotating
// $(document).ready(function(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './src/audio/spin.mp3');

    $(audioElement).on('ended', function(){
        this.currentTime = 0;
        this.play();
    });

    $('#rotate').on('mousedown', function(){
        audioElement.play();
        $(audioElement).animate({ volume: 1.0 }, 500)
    }).on('mouseup', function(){
        $(audioElement).animate({ volume: 0.0 }, 500)
        setTimeout(function(){
          audioElement.pause();
        }, 600)
    });

    // $('.click-me').on('click', function(){
    //     if (canPlay){
    //         $(audioElement).animate({ volume: 1 });
    //         audioElement.play();
    //         // $(audioElement).animate({ volume: 1.0}, 0);
    //         $(audioElement).animate({ volume: 0.0 }, (duration + 1) * 1000);
    //     };
    // });
// });
