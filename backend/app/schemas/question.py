# Import standard library packages

# Import installed packages
from marshmallow import fields

# Import app code
from .base import BaseSchema


class QuestionSchema(BaseSchema):
    # Own properties
    id = fields.Int()
    question = fields.Str()
    description = fields.Str()
    is_open = fields.Bool()
    answer = fields.Str()
    # rank = fields.List(fields.Int())


class QuestionListSchema(BaseSchema):
    user_email = fields.Email()
    questions = fields.List(fields.Nested(QuestionSchema))