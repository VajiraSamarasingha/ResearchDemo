document.getElementById('speakBtn').addEventListener('click', function() {
    const text = document.getElementById('Checkbox11').value;
    if (text) {
        document.getElementById('listeningGif').style.display = 'block';

        fetch('http://127.0.0.1:5000/speak', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        })
        .then(response => response.blob())
        .then(blob => {

            document.getElementById('listeningGif').style.display = 'none';
            document.getElementById('speakingGif').style.display = 'block'

            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            audio.play();

            audio.onended = function(){
                document.getElementById('speakingGif').style.display = 'none'
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('listeningGif').style.display = 'none';
        });
    } else {
        alert('Please enter some text to speak');
    }
});
