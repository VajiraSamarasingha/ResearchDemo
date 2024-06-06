$(document).ready(function(){
    $('#upimg').change(function(e){
        var fileName = e.target.files[0].name;
        $('#fileimg').text(fileName);
    });

    $('#cbtn').click(function(){
        var file = $('#upimg')[0].files[0];
        if (!file) {
            alert("Please upload an image first.");
            return;
        }

        // Show the progress bar
        $('#progress-container').show();

        Tesseract.recognize(
            file,
            'sin',
            {
                logger: function(m) {
                    console.log(m);

                    if(m.status === 'recognizing text'){
                        var progress = Math.floor(m.progress * 100);
                        $('#progress-bar').css('width',progress + '%').text(progress + '%');
                    }
                }
            }
        ).then(function(result){
            $('#Checkbox11').val(result.data.text);
            $('#progress-container').hide();
        }).catch(function(err){
            console.error(err);
            $('#progress-container').hide();
        });
    });
});