from flask_sqlalchemy import SQLAlchemy
from app.core.config import settings
from app.db.base import Base

class db_config:
    # initialize database by specifying the location of local database stored on machine
    SQLALCHEMY_DATABASE_URI = settings.SQLALCHEMY_DATABASE_URI
    # track the modification history on database, set false
    SQLALCHEMY_TRACK_MODIFICATIONS = False

#create a SQLAlchemy instance
db = SQLAlchemy(model_class=Base)
db_session = db.session

