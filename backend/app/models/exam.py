from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class Exam(Base):
    __tablename__ = "exams"

    id = Column(Integer, primary_key=True)
    subject = Column(String)
    difficulty = Column(String)
    created_by = Column(Integer, ForeignKey("users.id"))