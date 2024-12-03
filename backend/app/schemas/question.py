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
    rank = fields.List(fields.Int())