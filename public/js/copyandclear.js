$(document).ready(function() {
    $('#clearBtn').click(function() {
        console.log("clear text");
        $('#Checkbox11').val('');
    });

    $('#copyBtn').click(function() {
        var textArea = document.getElementById('Checkbox11');
        textArea.select();
        textArea.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        document.execCommand('copy');

        // Alert the copied text
        alert('Copied the text: ' + textArea.value);
    });
});