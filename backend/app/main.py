from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from app.core.init_db import db, db_config

# initalize the flask app
app = Flask(__name__)
# help us disable cors error
CORS(app)

#load db config
app.config.from_object(db_config)

#init database, binds the global db object to the current app(postgresql database).
db.init_app(app)

# set flask migrate
migrate = Migrate(app, db, compare_type=True)

if __name__ == "__main__":
    # with app.app_context():
    #     db.create_all()

    print("start application")
    app.run(debug=True, port=5001)