// Проверка возраста
function checkAge() {
    const age = prompt("Сколько тебе лет?");
    if (age === null || age === "") {
        alert("Доступ запрещён. Возраст не указан.");
        window.close();
    } else if (parseInt(age, 10) < 23) {
        alert("Доступ запрещён. Возраст меньше 23.");
        window.close();
    }
}

window.onload = checkAge;
