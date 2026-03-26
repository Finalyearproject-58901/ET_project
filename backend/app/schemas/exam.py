from pydantic import BaseModel

class ExamCreate(BaseModel):
    subject: str
    difficulty: str