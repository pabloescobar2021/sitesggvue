<?php
ini_set('display_errors', 1);  // Включаем отображение ошибок
error_reporting(E_ALL);        // Показываем все ошибки

// Параметры подключения
$servername = "localhost";  // Обычно localhost на Beget, если не указано другое
$username = "mishutvd_1";   // Имя пользователя базы данных
$password = "Sas1Lkapaha1";    // Пароль для пользователя
$dbname = "mishutvd_1";      // Имя базы данных

// Создаем соединение с базой данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Получаем данные из формы
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Подготовленное выражение для безопасности
$stmt = $conn->prepare("INSERT INTO mydatabase (name, email, phone) VALUES (?, ?, ?)");

// Проверка на ошибку при подготовке запроса
if (!$stmt) {
    die("Ошибка подготовки запроса: " . $conn->error);
}

// Привязываем параметры
$stmt->bind_param("sss", $name, $email, $phone);

// Выполнение запроса
if ($stmt->execute()) {
    echo "Данные успешно сохранены!";
} else {
    echo "Ошибка при выполнении запроса: " . $stmt->error;
}

// Закрытие соединения
$stmt->close();
$conn->close();
?>
