import cloudinary
import cloudinary.uploader
from app.core.config import CLOUDINARY_SECRET_KEY as SECRET_KEY
from app.core.config import CLOUDINARY_API_KEY, CLOUDINARY_API_KEY
from app.core.config import CLOUDINARY_NAME, CLOUD_NAME

cloudinary.config(
    cloud_name = CLOUDINARY_NAME, 
    api_key = CLOUDINARY_API_KEY, 
    api_secret = SECRET_KEY
)

def upload_file(file):
    result = cloudinary.uploader.upload(file)
    return result["secure_url"]