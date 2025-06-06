from flask import Flask
from flask_cors import CORS
from routes import diet_routes  # import the Blueprint

app = Flask(__name__)
CORS(app)

# Register Blueprint
app.register_blueprint(diet_routes)

if __name__ == '__main__':
    app.run(debug=True)
