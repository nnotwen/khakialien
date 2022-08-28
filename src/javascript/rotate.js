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
        console.log(rot.style.webkitTransform)
        if (rot.style.webkitTransform !== 'rotate(0deg)'){
            rot.style.webkitTransition = '1s ease-in-out'
            rot.style.webkitTransform = 'rotate(0deg)';
            setTimeout(function(){
                rot.style.webkitTransition = null;
            }, 1000);
        };
    });

}).call(this);
