document.getElementById('cbtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('upimg');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select an image file first.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        const extractedText = response.data.text;
        document.getElementById('Checkbox11').value = extractedText;
    } catch (error) {
        console.error('Error uploading file:', error);
    }
});

document.getElementById('upimg').addEventListener('change', (event) => {
    const fileName = event.target.files[0]?.name || 'No file chosen';
    document.getElementById('fileimg').textContent = fileName;
});
