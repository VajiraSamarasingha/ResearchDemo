from flask import Flask, request, send_file
from gtts import gTTS
from flask_cors import CORS
import os
from io import BytesIO

app = Flask(__name__)
CORS(app)

@app.route('/speak', methods=['POST'])
def speak():
    text = request.json.get('text', '')
    print(text)
    if text:
        tts = gTTS(text, lang='si')
        audio = BytesIO()
        tts.write_to_fp(audio)
        audio.seek(0)
        return send_file(audio, mimetype='audio/mp3')
    return {'error': 'No text provided'}, 400

if __name__ == '__main__':
    app.run(debug=True)
