from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import SessionLocal
from app.models.exam import Exam
from app.models.question import Question
from app.schemas.exam import ExamCreate
from app.services.ai_service import generate_questions

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/generate-paper")
def generate_paper(data: ExamCreate, db: Session = Depends(get_db)):
    exam = Exam(subject=data.subject, difficulty=data.difficulty)
    db.add(exam)
    db.commit()

    questions_text = generate_questions("Sample syllabus", data.difficulty)

    # simple parsing (can improve later)
    for i in range(5):
        q = Question(
            exam_id=exam.id,
            question_text=f"Question {i+1}",
            marks=10,
            model_answer="Sample answer"
        )
        db.add(q)

    db.commit()
    return {"exam_id": exam.id, "questions": questions_text}

@router.get("/exam/{id}")
def get_exam(id: int, db: Session = Depends(get_db)):
    return db.query(Question).filter(Question.exam_id == id).all()