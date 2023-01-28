const randomNumber = Math.ceil(Math.random() * 100) ;

const findNumber = (number) => {
    let start = 0,
        end = 100;

    for (let i = start; i < end; i++) {
        let diapazon = +prompt(`Введите среднее между ${start} и ${end}`);

        if (diapazon > start && diapazon < end) {
            if (diapazon == number) {
                alert(`Вы угадали, оно равно  ${number} !`);
                break;
            } else if (number > diapazon) {
                end = diapazon;
                alert(`Вы ввели ${diapazon} и это слишком большое число`);
            } else if (number < diapazon) {
                start = diapazon;
                alert(`Вы ввели ${diapazon} и это слишком маленькое число `);
            }
        }
    }
};

findNumber(randomNumber);
