$(function () {
    var htracker = new headtrackr.Tracker();
    var videoInput = document.getElementById('inputVideo');
    var canvasInput = document.getElementById('inputCanvas');
    var canvas = document.getElementById("overlay");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = 'red';
    }
    function onFaceTracking(event) {
        var xPercent = event.x / videoInput.clientWidth;
        //console.log('x: ' + event.x + " y: " + event.y + " height: " + event.height + " width: " + event.width);
        ctx.clearRect(0, 0,320, 240);
        ctx.strokeRect((event.x-event.width/2), (event.y-(event.width/2)), event.width, event.height*2);
        // any values at the extreme can be discarded and assumed to be instantiation
        if (event.x > 0.05) {
            if (xPercent < 0.2) {
                location.href = '/Home/Medication';
            } else if (xPercent > 0.8) {
                location.href = '/Home/Vaccine';
            }
        }
    }
    $('#modal').on('show.bs.modal', function (event) {
        htracker.init(videoInput, canvasInput);
        htracker.start();
        document.addEventListener('facetrackingEvent', onFaceTracking)
    });
    $('#modal').on('hide.bs.modal', function (event) {
        document.removeEventListener('facetrackingEvent');
        htracker.stop();
    });
});