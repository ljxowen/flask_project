from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# initalize the flask app
app = Flask(__name__)
# help us disable cors error
CORS(app)

# initialize database by specifying the location of local database stored on machine
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
# track the modification history on database, set false
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

#create a database instance
db = SQLAlchemy(app)

