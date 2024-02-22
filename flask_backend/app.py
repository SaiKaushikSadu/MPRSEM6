from flask import Flask,request,jsonify
from flask_cors import CORS
import easyocr
import base64
from PIL import Image
import io

app=Flask(__name__)

@app.route("/")
def index():
    return "Hello, Welcome to MPR SEM 6 !!"

CORS(app)

@app.route("/timetable", methods=['POST'])
def timetable():
    try:
        request_data = request.get_json()
        image_data_base64 = request_data['image']  # assuming image data is sent as base64 encoded string
        
        image_data_bytes = base64.b64decode(image_data_base64)
        
        reader = easyocr.Reader(['en'])
        result = reader.readtext(image_data_bytes)
        for (bbox, text, prob) in result:
            print(f'Text: {text}, Probability: {prob}')

        return jsonify({
            'status': 'Image received and processed successfully'
        })
    except Exception as e:
        # print(e)
        return jsonify({
            'status': 'Error occurred while processing the image'
        })

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=3001)
