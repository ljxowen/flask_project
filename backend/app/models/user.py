from app.db.base_class import Base
from sqlalchemy import Column, Integer, DateTime, String, Boolean, ForeignKey

class User(Base):
    id = Column(Integer, primary_key=True)
    first_name = Column(String, unique=False, nullable=False)
    last_name = Column(String, unique=False, nullable=False)
    email_name = Column(String, unique=True, nullable=False)

    # cover to json for api communication 
    def to_json(self):
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "email": self.email,
        }