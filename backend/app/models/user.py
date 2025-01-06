from app.db.base_class import Base
from sqlalchemy import Column, Integer, DateTime, String, Boolean
from datetime import datetime, timezone
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime, default=datetime.now(timezone.utc))
    first_name = Column(String, nullable=False, index=True)
    last_name = Column(String, nullable=False, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    is_active = Column(Boolean(), default=True)

    # ORM relation key
    designed_questions = relationship(
        "Question", 
        back_populates="designed_by_user", 
        cascade="all, delete-orphan"
        )

