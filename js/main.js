var main = function () {
    var canvas = document.querySelector('#glcanvas');

    if (!canvas) {
        alert('Unhandle Exception!');
        return;
    }

    console.log("init screen size : " + canvas.width + ", " + canvas.height);

    var resizeToMatchDisplaySize = function (canvas) {
        realScreenSize = [canvas.clientWidth, canvas.clientHeight];
        var displayWidth = canvas.clientWidth * window.devicePixelRatio;
        var displayHeight = canvas.clientHeight * window.devicePixelRatio;
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

    requestAnimationFrame(frame);
}
