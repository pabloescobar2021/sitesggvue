from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

# Функция для подключения к базе данных SQLite
def get_db():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

# Создаем таблицу, если ее нет
def init_db():
    conn = get_db()
    conn.execute('''CREATE TABLE IF NOT EXISTS survey_data (
                       id INTEGER PRIMARY KEY AUTOINCREMENT,
                       name TEXT,
                       email TEXT,
                       message TEXT)''')
    conn.commit()

# Записываем данные анкеты в базу
@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    conn = get_db()
    conn.execute('''INSERT INTO survey_data (name, email, message) VALUES (?, ?, ?)''',
                 (name, email, message))
    conn.commit()
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
