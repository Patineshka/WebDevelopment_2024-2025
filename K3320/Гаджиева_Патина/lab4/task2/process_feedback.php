<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $feedback = htmlspecialchars($_POST['feedback']);
    $source = htmlspecialchars($_POST['source']);
    $services = isset($_POST['services']) ? implode(", ", $_POST['services']) : '';

    // Выводим данные на экран
    echo "<h2>Ваши данные</h2>";
    echo "Имя: $first_name<br>";
    echo "Фамилия: $last_name<br>";
    echo "Электронная почта: $email<br>";
    echo "Обратная связь: $feedback<br>";
    echo "Источник: $source<br>";
    echo "Интересующие услуги: $services<br>";
}
?>
