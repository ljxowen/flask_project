from app.db.base_class import Base
from sqlalchemy import Column, Integer, DateTime, String, Boolean, ForeignKey, ARRAY


class Question(Base):
    id = Column(Integer, primary_key=True)
    question = Column(String, unique=False, nullable=False)
    description = Column(String, unique=False, nullable=False)
    is_open = Column(Boolean, unique=False, nullable=False)
    answer = Column(String, unique=False, nullable=False)
    rank = Column(ARRAY(Integer), unique=False, nullable=True)
    
