(function () {
    $ = function (selector) {
        var domList = document.querySelectorAll(selector)

        return domList.length === 1 ?
               domList[0] :
               domList;
    }
    window.$ = $
})()