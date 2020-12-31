var main = function () {
    var canvas = document.querySelector('#glcanvas');

    if (!canvas) {
        alert('Unhandle Exception!');
        return;
    }

    // console.log("init screen size : " + canvas.width + ", " + canvas.height);

    /*!
    An experiment in getting accurate visible viewport dimensions across devices
    (c) 2012 Scott Jehl. 
    MIT/GPLv2 Licence
    */
    function getViewportSize() {
        var test = document.createElement("div");

        test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0;";
        document.documentElement.insertBefore(test, document.documentElement.firstChild);

        var dims = [test.offsetWidth, test.offsetHeight];
        document.documentElement.removeChild(test);

        return dims;
    }

    var resizeToMatchDisplaySize = function (canvas) {
        realScreenSize = [canvas.clientWidth, canvas.clientHeight];
        // var displayWidth = canvas.clientWidth * window.devicePixelRatio;
        // var displayHeight = canvas.clientHeight * window.devicePixelRatio;
        var viewportSize = getViewportSize();
        var displayWidth = viewportSize[0];
        var displayHeight = viewportSize[1];
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            console.log("re screen size : " + canvas.width + ", " + canvas.height);
            return true;
        }
        return false;
    }

    var frame = function(now) {
        resizeToMatchDisplaySize(canvas);
        requestAnimationFrame(frame);
    }

    console.log("v3112200308");

    requestAnimationFrame(frame);
}
