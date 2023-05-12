from soccerlytic import soccerlytic
from flask import Flask, request, jsonify, make_response, Response
import flask_cors
import json
app = Flask(__name__)
flask_cors.CORS(app)
cors = flask_cors.CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'


Soccerlytic=soccerlytic()

@app.route('/login', methods=['GET','POST'])
@flask_cors.cross_origin()
def login():
    email=request.json.get('email')
    password=request.json.get('password')
    print(email,password)
    responsedata = Soccerlytic.login(email,password)
    return {"data": responsedata}

@app.route('/register', methods=['GET','POST'])
@flask_cors.cross_origin()
def register():
    username=request.json.get('username')
    email=request.json.get('email')
    password=request.json.get('password')
    print(username,email,password)
    responsedata = Soccerlytic.register(username,email,password)
    return {"data": responsedata}


if __name__ == '__main__':
    app.run(debug=True)

