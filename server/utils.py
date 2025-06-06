from flask import current_app
def calculate_bmr(gender, weight, height, age):
    if gender == 'male':
        return 10 * weight + 6.25 * height - 5 * age + 5
    else:
        return 10 * weight + 6.25 * height - 5 * age - 161

def get_activity_multiplier(activity_level):
    activity_levels = {
        "sedentary": 1.2,
        "light": 1.375,
        "moderate": 1.55,
        "active": 1.725,
        "very_active": 1.9
    }
    return activity_levels.get(activity_level, 1.2)

def adjust_calories_for_goal(calories, goal):
    if goal == "weight_loss":
        return calories - 500
    elif goal == "weight_gain":
        return calories + 500
    return calories  # maintain weight

def recommend_meals(target_calories):
    db = current_app.config['DB']
    cursor = db.cursor(dictionary=True)

    # Example: Divide calories approx across meals
    meal_ratios = {
        "Breakfast": 0.3,
        "Lunch": 0.4,
        "Dinner": 0.3
    }

    meals = []

    for meal_type, ratio in meal_ratios.items():
        limit =target_calories * ratio

        cursor.execute("""
            SELECT * FROM meals
            WHERE type = %s AND calories <= %s
            ORDER BY RAND() LIMIT 1
        """, (meal_type, limit))

        result = cursor.fetchone()
        if result:
            meals.append(result)

    return meals

def generate_diet_plan(data):
    age = int(data["age"])
    gender = data["gender"]
    weight = float(data["weight"])
    height = float(data["height"])
    activity = data["activity_level"]
    goal = data["goal"]

    bmr = calculate_bmr(gender, weight, height, age)
    multiplier = get_activity_multiplier(activity)
    maintenance_calories = bmr * multiplier
    target_calories = adjust_calories_for_goal(maintenance_calories, goal)

    meals = recommend_meals(target_calories)
    return meals
