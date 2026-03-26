def evaluate_answers(student_text, model_answer):
    score = 0

    student_text = student_text.lower()
    model_words = model_answer.lower().split()

    for word in model_words:
        if word in student_text:
            score += 1

    return min(score, 10)