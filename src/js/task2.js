/*Написати функцію, яка буде виводити переданий масив
з вказаним кроком. Величина кроку також передається,
як аргумент. (Приклад виклику: printArray([1,2,3,4,5,6, 7], 3).
Перший аргумент масив, який буде виведено, а другий - крок.
Тобто виводом буде 1,4,7)*/

var arr = [1, 2, 3, 4, 5, 6, 7];
var step = 3;
var newArr = newArray(arr,step);

function newArray(array, move) {
    var result = [];

    for (var counter = 0; counter < array.length; counter += move) {
        result.push(array[counter]);
    }

    return result;
}

console.log(newArr);