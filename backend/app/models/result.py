from sqlalchemy import Column, Integer, String, ForeignKey
from app.core.database import Base

class Result(Base):
    __tablename__ = "results"

    id = Column(Integer, primary_key=True)
    submission_id = Column(Integer, ForeignKey("submissions.id"))
    score = Column(Integer)
    feedback = Column(String)