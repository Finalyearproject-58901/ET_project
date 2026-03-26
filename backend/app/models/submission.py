from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class Submission(Base):
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True)
    exam_id = Column(Integer, ForeignKey("exams.id"))
    file_url = Column(String)
    question_text = Column(String)
    marks = Column(Integer)
    model_answer = Column(String)