const randomNumber = Math.ceil(Math.random() * 100);

const findNumber = (number) => {
    let diapazon = +prompt(`Введите число от 0 до 100`);
    if (diapazon < number) {
        alert(`Вы ввели ${diapazon} и это слишком маленькое число`);
        return findNumber(number);
    } else if (diapazon > number) {
        alert(`Вы ввели ${diapazon} и это слишком большое число `);
        return findNumber(number);
    } else if (diapazon === number)  return alert(`Вы угадали !`);
};

findNumber(randomNumber);