import openai
from config import Config

openai.api_key = Config.OPENAI_API_KEY

def get_chat_response(message):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": message}],
        max_tokens=150
    )
    return response['choices'][0]['message']['content'].strip()
