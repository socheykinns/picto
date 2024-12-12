$(document).ready(function() {
    $(".file").on('click', function() {
        $("#file").click();
    });

    $('#file').on('change', function() {
        const fileName = $(this).val().split('\\').pop();
        if (fileName) {
            $('#filename').text(fileName).css('display', 'inline-block');
            $('.file').css('display', 'none');
            $('#filename').after().on('click', function() {
                $('#file').val('');
                $('#filename').text('').css('display', 'none');
                $('.file').css('display', 'flex');
            });
        } else {
            $('#filename').text('').css('display', 'none');
            $('.file').css('display', 'flex');
        }
    });

    $('form').on('submit', function(event) {
        event.preventDefault();
        if (this.checkValidity()) {
            $('#output').text('Успешно отправлено!');
        }
    });
});