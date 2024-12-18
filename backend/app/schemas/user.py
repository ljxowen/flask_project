# Import standard library packages

# Import installed packages
from marshmallow import fields

# Import app code
from .base import BaseSchema


class UserSchema(BaseSchema):
    # Own properties
    id = fields.Int()
    created_at = fields.DateTime()
    first_name = fields.Str()
    last_name = fields.Str()
    email = fields.Email()
    designed_question_id = fields.List(fields.Str())
    is_active = fields.Bool()


class UserCreateSchema(BaseSchema):
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)
    email = fields.Email(required=True)


class UserUpdateSchema(BaseSchema):
    current_email = fields.Email(required=True)
    new_email = fields.Email(required=False)
    first_name = fields.Str(required=True)
    last_name = fields.Str(required=True)


class UserDeleteSchema(BaseSchema):
    email = fields.Email(required=True)


class LoginSchema(BaseSchema):
    email = fields.Email()