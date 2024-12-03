from flask import request, Blueprint, jsonify
from flask_apispec import doc, marshal_with, use_kwargs
from webargs import fields
from app.core.config import settings
from app.core.init_db import db
from app.models.question import Question
from app.schemas.question import QuestionSchema

bp = Blueprint('question', __name__, url_prefix=f"{settings.API_V1_STR}/question")

@doc(description="Retrieve the questions", tags=["questions"])
@bp.route("/questions", methods=["GET"])
@marshal_with(QuestionSchema(many=True))
def get_questions():
    questions =Question.query.all() # get all context in Question
    json_questions = list(map(lambda x: x.to_json(), questions))
    return jsonify({"users": questions})



@doc(description="Create the questions", tags=["questions"])
@bp.route("/create_question", methods=["POST"])
@use_kwargs(
    {
        "id": fields.Str(required=True),
        "question": fields.Str(required=True),
        "description": fields.Str(required=True),
        "is_open": fields.Str(required=True),
        "rank": fields.Str(required=True),
    }
)
@marshal_with(QuestionSchema())
def create_question():
    question = request.json.get("")