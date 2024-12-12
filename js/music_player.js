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
            $('.background-video--music').addClass('visible-bg');
            audioElement.play();
            $('.background-video--music').get(0).play()
            button.addClass('paused');
            currentAudio = audioElement;
            currentAudioId = audioId;
        } else {
            $('.background-video--music').removeClass('visible-bg');
            audioElement.pause();
            $('.background-video--music').get(0).pause()
            button.removeClass('paused');
            currentAudio = null;
            currentAudioId = null;
        }
    });
});

$('audio').on('ended', function() {
    var audioId = $(this).attr('id');
    var button = $('[value*='+audioId+']');
    $('.background-video--music').removeClass('visible-bg');
    button.removeClass('paused');
    currentAudio = null;
    currentAudioId = null;
});

function share() {
    if (navigator.canShare) {
        navigator.share({
            title: 'Послушай трек от лэйбла PICTO',
            text: 'Делюсь с тобой ссылкой',
            url: 'https://photo.nikitasocheykin/',
        });
    } else {
        alert('К сожалению, ваш браузер не поддерживает возможность поделиться треком. Попробуйте отправить ссылку на сайт.')
    }
}