from fastapi import APIRouter, UploadFile, File
import shutil
import os

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload-answer")
def upload(file: UploadFile = File(...)):
    url = upload_file(file.file)
    return {"file_url": url}