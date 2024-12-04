from flask import request, Blueprint, jsonify, abort
from flask_apispec import doc, marshal_with, use_kwargs
# from flask_jwt_extended import get_current_user, jwt_required
# from webargs import fields
from app.core.config import settings
from app.core.init_db import db_session
from app.schemas.user import (
    UserSchema,
    UserCreateSchema,
    UserUpdateSchema,
    UserDeleteSchema,
) 
from app.db.utils import (
    get_user_by_mail,
    create_user,
    update_user,
    get_users,
    delete_user,
)


bp = Blueprint('user', __name__, url_prefix=f"{settings.API_V1_STR}/user")

@doc(description="Retrieve the users", tags=["users"])
@bp.route("/users", methods=["GET"])
@marshal_with(UserSchema(many=True))
def route_get_users():
    users = get_users(db_session=db_session)
    return users


@doc(
    description="Create the users", 
    tags=["users"], 
    # requestBody={
    #     "required": True,
    #     "content": {
    #         "application/json": {
    #             "schema": UserCreateSchema
    #         }
    #     }
    # }
)
@bp.route("/create_user", methods=["POST"])
@use_kwargs(UserCreateSchema, location="json")
@marshal_with(UserSchema())
def route_create_user(first_name=None, last_name=None, email=None):
    if not first_name or not last_name or not email:
        return (
            jsonify({"message": "You must include a email and password"}),
            400,
        )

    user = get_user_by_mail(email=email, db_session=db_session)

    if user:
        return abort(
            400, f"The user with this email already exists: {email}"
        )
    
    user = create_user(
        db_session=db_session,
        email=email,
        first_name=first_name,
        last_name=last_name,
    )

    return user


@doc(description="Update the users", tags=["users"], consumes=["application/json"])
@bp.route("/update_user/<int:user_id>", methods=["PATCH"])
@use_kwargs(UserUpdateSchema, location="json")
@marshal_with(UserSchema())
def route_update_user(db_session, current_email, new_email, first_name, last_name):
    user = update_user(
        db_session=db_session,
        first_name=first_name,
        last_name=last_name,
        new_email=new_email,
    )

    if user is None:
        return abort(
            400, f"The user with this email doesn't exists: {current_email}"
        )

    return user


@doc(description="Delete the users", tags=["users"], consumes=["application/json"])
@bp.route("/delete_user/<int:user_id>", methods=["DELETE"])
@use_kwargs(UserDeleteSchema, location="json")
@marshal_with(UserSchema())
def route_delete_user(db_session, email):
    user = delete_user(
        db_session=db_session,
        email=email,
    )

    if user is None:
        return abort(
            400, f"The user with this email doesn't exists: {email}"
        )

    return user

