/*Написати функцію, яка буде шукати найбільший елемент в масиві.*/

var arr = [34, 56, 23, 4, 89, 143, 16];
var numbers = max(arr);

function max(array) {
    var result = array[0];

    for (var counter = 1; counter < array.length; counter++) {
        if (array[counter] >= result) {
            result = array[counter];
        }
    }

    return result;
}

console.log(numbers);