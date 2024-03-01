from flask import Flask,request,jsonify
from flask_cors import CORS
from flask_pymongo import pymongo
import easyocr
import base64
from PIL import Image
import io
from keys import MONGO_KEY
from datetime import datetime

app=Flask(__name__)

client = pymongo.MongoClient('mongodb+srv://mprsem6:'+MONGO_KEY+'@cluster0.ph8rdne.mongodb.net/')
db = client.get_database('MPRSEM6')
user_collection = pymongo.collection.Collection(db, 'user_collection')


@app.route("/")
def index():
    return "Hello, Welcome to MPR SEM 6 !!"

CORS(app)

@app.route("/signup", methods=['POST'])
def signup():
    body=request.json
    fname=body.get('fname')
    lname=body.get('lname')
    phone=body.get('phone')
    email=body.get('email')
    password=body.get('password')

    collegename=body.get('collegename')
    branch=body.get('branch')
    rollno=body.get('rollno')
    prn=body.get('prn')
    collegeemail=body.get('collegeemail')

    cgpa=body.get('cgpa')
    percentage=body.get('percentage')

    linkedin=body.get('linkedin')
    github=body.get('github')
    codechef=body.get('codechef')
    codeforces=body.get('codeforces')
    leetcode=body.get('leetcode')
    discord=body.get('discord')
    date=datetime.now().date()

    try:
        db['student'].create_index([('phone', pymongo.ASCENDING)], unique=True)
        result = db['student'].insert_one({
            "fname":fname,
            "lname":lname,
            "phone":phone,
            "email":email,
            "password":password,
            "collegename": collegename,
            "branch": branch,
            "rollno": rollno,
            "rollno": prn,
            "collegeemail": collegeemail,
            "cgpa": cgpa,
            "percentage": percentage,
            "linkedin": linkedin,
            "github": github,
            "codechef": codechef,
            "codeforces": codeforces,
            "leetcode": leetcode,
            "discord": discord
        })
        return jsonify({
            'status': 'Success',
            "inserted_id":str(result.inserted_id)
        })
    except Exception as e:
        print(e)
        return jsonify({
            'status': 'Error occurred'
        })

@app.route("/timetable", methods=['POST'])
def timetable():
    try:
        request_data = request.get_json()
        image_data_base64 = request_data['image']  # assuming image data is sent as base64 encoded string
        
        image_data_bytes = base64.b64decode(image_data_base64)
        
        reader = easyocr.Reader(['en'])
        result = reader.readtext(image_data_bytes)
        count = 0
        for (bbox, text, prob) in result:
            print(f'{text} ', end="")
            count += 1
            if count % 7 == 0:
                print()
        # for (bbox, text, prob) in result:
            # print(f'{text}',end="")
            # print(text+" ",end="")

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
