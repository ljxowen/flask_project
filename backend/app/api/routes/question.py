from flask import request, Blueprint, jsonify, abort
from flask_apispec import doc, marshal_with, use_kwargs
from webargs import fields
from app.core.config import settings
from app.core.init_db import db_session
from app.models.question import Question
from app.schemas.question import QuestionSchema, QuestionListSchema
from app.db.utils import create_question_list

bp = Blueprint('question', __name__, url_prefix=f"{settings.API_V1_STR}/question")

@doc(description="Retrieve the questions", tags=["questions"])
@bp.route("/questions", methods=["GET"])
@marshal_with(QuestionSchema(many=True))
def get_questions():
    questions =Question.query.all() # get all context in Question
    json_questions = list(map(lambda x: x.to_json(), questions))
    return jsonify({"users": questions})



@doc(description="Create the questions", tags=["questions"])
@bp.route("/create_questions", methods=["POST"])
@use_kwargs(QuestionListSchema, location="json")
@marshal_with(QuestionSchema(many=True))
def create_questions(questions, user_email):
    if not questions or len(questions) == 0:
        return abort(
            400, f"Can't submit a empty question list"
        )
    
    question_list = create_question_list(
        db_session=db_session,
        questions=questions,
        email=user_email
    )

    return question_list
    
    