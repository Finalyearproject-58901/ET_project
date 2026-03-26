from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import SessionLocal
from app.models.submission import Submission
from app.models.result import Result
from app.models.question import Question
from app.services.ocr_service import extract_text
from app.services.evaluation_service import evaluate_answers

router = APIRouter()

def get_db():
    db = SessionLocal()
    yield db

@router.post("/evaluate")
def evaluate(submission_id: int, db: Session = Depends(get_db)):
    submission = db.query(Submission).get(submission_id)
    questions = db.query(Question).filter(
        Question.exam_id == submission.exam_id
    ).all()

    text = extract_text(submission.file_url)

    total_score = 0
    for q in questions:
        total_score += evaluate_answers(text, q.model_answer)

    result = Result(
        submission_id=submission_id,
        score=total_score,
        feedback="Auto-evaluated"
    )

    db.add(result)
    db.commit()

    return {"score": total_score}