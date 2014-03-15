$(function () {
    $('#speech-navigation').click(speechNavigation);
    var transcript = '';
    if (!('webkitSpeechRecognition' in window)) {
        $('#speech-navigation-nav').remove();
    } else {
        var recognition = new webkitSpeechRecognition();
        console.log('Speech Recognition Object Created');
        recognition.onresult = onResult;
    }
    function onResult(event) {
        console.log('Speech recognized.');
        transcript = event.results[0][0].transcript;
        console.log('User said: ' + transcript);
        doNavigation(transcript);
    }

    function doNavigation(transcript){
        if (transcript.indexOf('espanol') !== -1) {
            location.href = location.href+'?lang=es'
        } else if (transcript.indexOf('medication') !== -1) {
            location.href = '/Home/Medication';
        } else if (transcript.indexOf('insight') !== -1) {
            location.href = '/Home/Insight';
        }
    }

    function speechNavigation() {
        transcript = '';
        recognition.start();
    }
});