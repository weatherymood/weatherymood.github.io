(function($, exports) {

    'use strict';

    var MEDIARESIZE = (function() {

        var mediaAspect = mediaAspect || 16/9;
        var windowW = $(window).width();
        var windowH = $(window).height();
        var windowAspect = windowW/windowH;

        var $el =  $('.fullscreen-bg');

        function init() {
            _resize();
            $(window).on('resize', function (argument) {
                _resize();
            })
        }

        function _resize() {

            windowW = $(window).width();
            windowH = $(window).height();
            windowAspect = windowW/windowH;

            if (windowAspect < mediaAspect) {
                $el.css({
                    width: windowH*mediaAspect,
                    height: windowH,
                    top: 0,
                    left: -(windowH*mediaAspect-windowW)/2
                });
            } else {
                $el.css({
                    width: windowW,
                    height: windowW/mediaAspect,
                    top: -(windowW/mediaAspect-windowH)/2,
                    left: 0
                });
            }
        }

        return {
            init: init
        };
    }());

    exports.MEDIARESIZE = exports.MEDIARESIZE || MEDIARESIZE;

}(jQuery, window));
(function($, exports) {

  'use strict';

  var PRELOADER = (function() {

    var $p    = $('#preloader'),
        $pbg  = $('#preloader-bg'),
        $gradient = $('.fullscreen-bg__gradient'),
        limit = 10,
        randomnumber = Math.floor(Math.random() * (limit));

    function _show() {
      $p.addClass('bg-' + randomnumber + ' active')
      $gradient.addClass('bg-' + randomnumber);
    }

    function _remove() {
      $p.addClass('active-loaded');
      setTimeout(function(){
        $pbg.addClass('loaded');
      }, 600)
    }

    return {
        show: _show,
        remove: _remove
    };

  }());

  exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(jQuery, window));


(function($, exports) {
    var list = [
        '<img src="https://source.unsplash.com/1600x900/?rain">',
        '<img src="https://source.unsplash.com/1600x900/?cloudy">',
        '<img src="https://source.unsplash.com/1600x900/?sunset">',
        '<img src="https://source.unsplash.com/1600x900/?clear,sky">'
    ]
    setTimeout(function () {
        $('.fullscreen-bg').append(list[Math.floor(Math.random()*list.length)])
        PRELOADER.show()
    }, 0)
    $(window).on('load', function(){
        PRELOADER.remove()
        MEDIARESIZE.init();
    })
}(jQuery, window));