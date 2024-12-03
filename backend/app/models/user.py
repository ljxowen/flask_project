from app.db.base_class import Base
from sqlalchemy import Column, Integer, DateTime, String, Boolean, ForeignKey, ARRAY
from datetime import datetime


class User(Base):
    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow(), index=True)
    first_name = Column(String, nullable=False, index=True)
    last_name = Column(String, nullable=False, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    designed_question_id = Column(ARRAY(String), default=[], unique=False, nullable=False)

