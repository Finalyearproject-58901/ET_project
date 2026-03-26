from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True)
    exam_id = Column(Integer, ForeignKey("exams.id"))
    question_text = Column(String)
    marks = Column(Integer)
    model_answer = Column(String)