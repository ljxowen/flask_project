from flask import request, Blueprint, jsonify, abort
from flask_apispec import doc, marshal_with, use_kwargs
# from flask_jwt_extended import get_current_user, jwt_required
# from webargs import fields
from app.core.config import settings
from app.core.init_db import db_session
from app.schemas.user import UserSchema, LoginSchema
from app.db.utils import (
    authenticate,
)

bp = Blueprint('login', __name__, url_prefix=f"{settings.API_V1_STR}/login")

@doc(description="Login to get token(email)", tags=["login"])
@bp.route("/users", methods=["Post"])
@use_kwargs(LoginSchema, location="json")
@marshal_with(LoginSchema())
def route_login_email(email):
    user = authenticate(db_session, email)

    if not user:
        return abort(
            400, f"The user with this email doesn't exists: {email}"
        )
    
    return {"email": user.email}