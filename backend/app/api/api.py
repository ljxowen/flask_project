from app.main import app
from app.api.routes.user import bp as user_bp

app.register_blueprint(user_bp)
