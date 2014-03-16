﻿$(function () {
    $('#speech-navigation').click(speechNavigation);
    var transcript = '';
    if (!('webkitSpeechRecognition' in window)) {
        $('#speech-navigation-nav').remove();
    } else {
        window.recognition = new webkitSpeechRecognition();
        console.log('Speech Recognition Object Created');
    }
    function onNavResult(event) {
        console.log('Speech recognized.');
        transcript = event.results[0][0].transcript;
        console.log('User said: ' + transcript);
        doNavigation(transcript);
    }

    function doNavigation(transcript){
        if (transcript.indexOf('espanol') !== -1) {
            location.href = location.href+'?lang=es'
        } else if (transcript.indexOf('home') !== -1) {
            location.href = '/';
        } else if (transcript.indexOf('medication') !== -1) {
            location.href = '/Home/Medication';
        } else if (transcript.indexOf('insight') !== -1) {
            location.href = '/Home/Insight';
        }
    }

    var delta = 500;
    var lastKeypressTime = 0;
    function KeyHandler(event)
    {
        if ( String.fromCharCode(event.charCode).toUpperCase() == 'S' )
        {
            var thisKeypressTime = new Date();
            if ( thisKeypressTime - lastKeypressTime <= delta )
            {
                speechNavigation();
            }
            lastKeypressTime = thisKeypressTime;
        }
    }
    $(window).keypress(KeyHandler);

    function speechNavigation() {
        transcript = '';
        recognition.onresult = onNavResult;
        recognition.start();
    }
});