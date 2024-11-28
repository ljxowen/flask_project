from app.db.base_class import Base
from sqlalchemy import Column, Integer, DateTime, String, Boolean, ForeignKey, List

class User(Base):
    id = Column(Integer, primary_key=True)
    first_name = Column(String, unique=False, nullable=False)
    last_name = Column(String, unique=False, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, unique=False, nullable=False)
    designed_question_id = Column(List(String), unique=False, nullable=False)

    # cover to json for api communication 
    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email,
            "password": self.password,
            "designed_question_id": self.designed_question_id,
        }