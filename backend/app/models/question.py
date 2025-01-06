from app.db.base_class import Base
from sqlalchemy import Column, Integer, DateTime, String, Boolean, ForeignKey, ARRAY
from sqlalchemy.orm import relationship


class Question(Base):
    __tablename__ = "question"

    id = Column(Integer, primary_key=True)
    question = Column(String, unique=False, nullable=False)
    description = Column(String, unique=False, nullable=False)
    is_open = Column(Boolean, unique=False, nullable=False)
    answer = Column(String, unique=False, nullable=False)
    rank = Column(ARRAY(Integer), unique=False, nullable=True)

    # Foreign Key
    designed_by_user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    
    # ORM relation key
    designed_by_user = relationship("User", back_populates="designed_questions")