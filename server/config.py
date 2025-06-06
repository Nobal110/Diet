import mysql.connector



db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Nobal@110",
    database="DIETPLANRECOMM"
)
cursor = db.cursor(dictionary=True)
