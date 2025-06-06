
-- DROP TABLES IF THEY EXIST
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS progress;
DROP TABLE IF EXISTS grocery_items;

-- CREATE USERS TABLE
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    age INT,
    weight FLOAT,
    height FLOAT,
    goal ENUM('maintain', 'lose', 'gain') DEFAULT 'maintain',
    diet_type VARCHAR(50) DEFAULT 'balanced',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CREATE MEALS TABLE
CREATE TABLE meals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image VARCHAR(255),
    calories INT,
    protein FLOAT,
    carbs FLOAT,
    fats FLOAT
);

-- CREATE PROGRESS TABLE
CREATE TABLE progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    date DATE,
    weight FLOAT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- CREATE GROCERY ITEMS TABLE
CREATE TABLE grocery_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100),
    quantity VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- INSERT SAMPLE USERS
INSERT INTO users (username, email, password_hash, age, weight, height, goal, diet_type) VALUES
('john_doe', 'john@example.com', 'hashed_password_123', 28, 72.5, 175, 'lose', 'balanced'),
('jane_smith', 'jane@example.com', 'hashed_password_456', 32, 65.0, 160, 'maintain', 'vegan');

-- INSERT SAMPLE MEALS
INSERT INTO meals (name, description, image, calories, protein, carbs, fats) VALUES
('Grilled Chicken Salad', 'A healthy salad with grilled chicken, mixed greens, and olive oil.', 'https://source.unsplash.com/400x300/?salad,chicken', 350, 30, 12, 15),
('Vegan Buddha Bowl', 'Quinoa, chickpeas, roasted veggies with tahini dressing.', 'https://source.unsplash.com/400x300/?vegan,buddha-bowl', 420, 15, 50, 18),
('Keto Avocado Egg Salad', 'Eggs, avocado, and spinach mixed with mayo.', 'https://source.unsplash.com/400x300/?keto,egg,avocado', 300, 20, 8, 22);

-- INSERT SAMPLE PROGRESS ENTRIES
INSERT INTO progress (user_id, date, weight) VALUES
(1, '2025-05-01', 73.0),
(1, '2025-05-15', 71.0),
(1, '2025-06-01', 70.0),
(2, '2025-05-01', 65.0),
(2, '2025-05-15', 65.0);

-- INSERT SAMPLE GROCERY ITEMS
INSERT INTO grocery_items (user_id, name, quantity) VALUES
(1, 'Chicken Breast', '500g'),
(1, 'Mixed Greens', '200g'),
(2, 'Quinoa', '1kg'),
(2, 'Chickpeas', '400g');
