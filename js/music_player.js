$(document).ready(function() {
    var currentAudio = null;
    var currentAudioId = null;
    $('button.control').click(function() {
        var button = $(this);
        var audioId = button.attr('value');
        var audioElement = $('#' + audioId)[0];

        if (currentAudio && currentAudio !== audioElement) {
            currentAudio.pause();
            var currentButton = $('[value*='+currentAudioId+']');
            currentButton.removeClass('paused');
        }

        if (!button.hasClass('paused')) {
            $('.background-video').addClass('visible-bg');
            audioElement.play();
            button.addClass('paused');
            currentAudio = audioElement;
            currentAudioId = audioId;
        } else {
            $('.background-video').removeClass('visible-bg');
            audioElement.pause();
            button.removeClass('paused');
            currentAudio = null;
            currentAudioId = null;
        }
    });
});

$('audio').on('ended', function() {
    var audioId = $(this).attr('id');
    var button = $('[value*='+audioId+']');
    $('.background-video').removeClass('visible-bg');
    button.removeClass('paused');
    currentAudio = null;
    currentAudioId = null;
});

function share() {
    if (navigator.canShare) {
        navigator.share({
            title: 'Послушай треки от лэйбла PICTO',
            text: 'Делюсь с тобой ссылкой',
            url: 'https://socheykinns.github.io/discography.html',
        });
    } else {
        alert('К сожалению, ваш браузер не поддерживает возможность поделиться треком. Попробуйте отправить ссылку на сайт.')
    }
}