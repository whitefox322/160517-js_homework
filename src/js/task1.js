/*Написати функцію, яка буде виводити переданий їй масив через 1 елемент.*/

/*Вивід як елемент*/

var arr = [0, 1, 2, 3, 4, 5];

function array () {
    var arg = arguments;
    return arg[0];
}

console.log(array(arr));


/*Вивід як масив*/
//
// var arr = [0, 1, 2, 3, 4, 5];
//
// function array (arr) {
//     return arr;
// }
//
// console.log(array(arr));

