const express = require('express');
const multer = require('multer');
const path = require('path');
const Tesseract = require('tesseract.js');
const app = express();
const port = 3000;

// Setup static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
  }
});

const upload = multer({ storage: storage });

// Route to handle file upload and text extraction
app.post('/upload', upload.single('image'), (req, res) => {
  const imagePath = req.file.path;

  Tesseract.recognize(
    imagePath,
    'sin', // Sinhala language code
    {
      logger: m => console.log(m)
    }
  ).then(({ data: { text } }) => {
    res.json({ text });
    console.log(text);
    
  }).catch(err => {
    res.status(500).send({ error: 'Failed to extract text' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
