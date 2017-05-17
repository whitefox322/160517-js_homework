/*Написати функцію, яка буде виводити переданий їй масив через 1 елемент.*/

var arr = [3, 4, 5, 6, 7, 8, 9];
var answer = nextOne(arr);

function nextOne(array) {
    var result = [];
    for (var counter = 0; counter < array.length; counter+=2) {
        result.push(array[counter]);
    }

    return result;
}

console.log(answer);