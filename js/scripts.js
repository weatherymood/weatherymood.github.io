(function(exports) {

    var module_1 = (function() {

        function init() {
            console.log('module 1 init')
        }

        return {
            init: init
        };
    }());

    module_1.init();

}(window));
(function(exports) {

    var module_2 = (function() {

        function init() {
            console.log('module 2 init')
        }

        return {
            init: init
        };
    }());

    module_2.init();

}(window));