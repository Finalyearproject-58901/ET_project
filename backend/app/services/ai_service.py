import openai
from app.core.config import OPENAI_API_KEY

openai.api_key = OPENAI_API_KEY

def generate_questions(syllabus, difficulty):
    prompt = f"""
    Generate 5 {difficulty} level questions from:
    {syllabus}
    Also provide answers.
    """

    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content