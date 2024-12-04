from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from app.core.config import settings

# initalize the flask app
app = Flask(__name__)
# help us disable cors error
CORS(app)

# setup application
from app.core.init_db import db, db_config

# load db config
app.config.from_object(db_config)

# init database, binds the global db object to the current app(postgresql database).
db.init_app(app)

# set flask migrate
migrate = Migrate(app, db, compare_type=True)

# setup api
from app.api import api # noqa
# setup error handle
from app.core import errors # noqa

if __name__ == "__main__":
    app.run(debug=True, port=5001)