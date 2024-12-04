from app.main import app

# init the api docs first 
from app.api.api_docs import docs

# then, load the api
from app.api.routes.user import bp as user_bp

app.register_blueprint(user_bp)

# register all the routes in bp into docs
docs.register_existing_resources()


