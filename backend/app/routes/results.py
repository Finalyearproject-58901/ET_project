from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import SessionLocal
from app.models.result import Result

router = APIRouter()

def get_db():
    db = SessionLocal()
    yield db

@router.get("/results/{student_id}")
def get_results(student_id: int, db: Session = Depends(get_db)):
    return db.query(Result).all()