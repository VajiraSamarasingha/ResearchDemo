$(document).ready(function() {
    $('#fontSelect').change(function() {
        var selectedFont = $(this).val();
        if (selectedFont != "0") {
            $('#Checkbox11').css('font-family', selectedFont);
        } else {
            $('#Checkbox11').css('font-family', '');
        }
    });
});
