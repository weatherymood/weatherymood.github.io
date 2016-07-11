(function($, exports) {
    var list = [
        'https://source.unsplash.com/1600x900/?rain',
        'https://source.unsplash.com/1600x900/?cloudy',
        'https://source.unsplash.com/1600x900/?sunset',
        'https://source.unsplash.com/1600x900/?clear,sky'
    ]
    setTimeout(function () {
        // $('.fullscreen-bg').append(
        //     '<div class="full-bg" style="background: url('+list[Math.floor(Math.random()*list.length)]+'); background-size: cover"></div>'
        // )
        PRELOADER.show()
    }, 0)
    $(window).on('load', function(){
        PRELOADER.remove()
    })
}(jQuery, window));