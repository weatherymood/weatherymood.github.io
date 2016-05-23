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