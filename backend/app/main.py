from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.database import Base, engine
from app.routes import auth, exam, upload, evaluation, results

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(auth.router)
app.include_router(exam.router)
app.include_router(upload.router)
app.include_router(evaluation.router)
app.include_router(results.router)

@app.get("/")
def root():
    return {"message": "AI Exam System Running"}