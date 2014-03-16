var startedWithButton = false;
$(function () {
    $('#speech-navigation').click(function () { startedWithButton = true; speechNavigation();});
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

    function doNavigation(transcript) {
        if (transcript.indexOf('warning') !== -1) {
            var msg = new SpeechSynthesisUtterance("You have two overdue vaccinations.");
            window.speechSynthesis.speak(msg);
        } else if (transcript.indexOf('espanol') !== -1) {
            location.href = location.href+'?lang=es'
        } else if (transcript.indexOf('home') !== -1) {
            location.href = '/';
        }else if (transcript.indexOf('english') !== -1) {
            location.href = location.href + '?lang=es'
        } else if (transcript.indexOf('medication') !== -1) {
            location.href = '/Home/Medication';
        } else if (transcript.indexOf('thank') !== -1) {
            var msg = new SpeechSynthesisUtterance("You're welcome Peter");
            window.speechSynthesis.speak(msg);
        } else if (transcript.indexOf('insight') !== -1) {
            location.href = '/Home/Insight';
        }else if (transcript.indexOf('vaccination') !== -1) {
        location.href = '/Home/Vaccine';
        } else if (startedWithButton == true) {
            startedWithButton = false;
            var msg = new SpeechSynthesisUtterance("You have two overdue vaccinations.");
            window.speechSynthesis.speak(msg);
        }
    }

    var ctrlPressed = false;
    function KeyHandler(event)
    {
        if (event.keyCode === 17) {
            ctrlPressed = true;
            setTimeout(function () { ctrlPressed = false; }, 3000);
            return;
        }
        if ( event.keyCode == 77 && ctrlPressed)
        {
            speechNavigation();
        }
    }
    $(window).keydown(KeyHandler);

    function speechNavigation() {
        transcript = '';
        recognition.onresult = onNavResult;
        recognition.start();
    }
});