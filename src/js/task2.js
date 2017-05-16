/*Написати функцію, яка буде виводити переданий масив
з вказаним кроком. Величина кроку також передається,
як аргумент. (Приклад виклику: printArray([1,2,3,4,5,6, 7], 3).
Перший аргумент масив, який буде виведено, а другий - крок.
Тобто виводом буде 1,4,7)*/

var arr = [1, 2, 3, 4, 5, 6, 7];
var step = 3;
var newArr = newArray(arr,step);

function newArray(array, move) {
    var mass = [];
    var result = mass;

    for (var counter1 = 0, counter2 = 0; counter2 < array.length; counter1++, counter2 += move) {
        mass[counter1] = array[counter2];
    }

    return result;
}

console.log(newArr);