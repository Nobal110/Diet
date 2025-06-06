from flask import Blueprint, request, jsonify
from utils import generate_diet_plan
from config import db, cursor

diet_routes = Blueprint('diet_routes', __name__)

db_config = diet_routes.config['DB']




@diet_routes.route('/')
def home():
    return jsonify({"message": "Diet Plan API is running."})

@diet_routes.after_request
def after_request(response):
    print(response.headers)
    return response

@diet_routes.route('/api/meals', methods=['GET'])
def get_meals():
    cursor.execute("SELECT * FROM meals")
    meals = cursor.fetchall()
    return jsonify(meals)

@diet_routes.route('/recommendation', methods=['POST'])
def recommendation():
    data = request.get_json()
    meals = generate_diet_plan(data)
    return jsonify({"meals": meals})

@diet_routes.route('/api/grocery', methods=['GET'])
def get_grocery_list():
    cursor.execute("SELECT * FROM grocery_items")
    items = cursor.fetchall()
    return jsonify(items)

@diet_routes.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    message = data.get('message', '')

    if "protein" in message.lower():
        reply = "Include more eggs, chicken, or lentils in your diet."
    elif "weight loss" in message.lower():
        reply = "Try a calorie-deficit plan with high fiber and low carbs."
    else:
        reply = f"You said: {message}"

    return jsonify({"reply": reply})
