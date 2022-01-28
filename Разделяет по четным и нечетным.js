/*                                  Задача
                Кодирование в функции pickIt, функция принимает 1 параметр:, 
                arrэто числовой массив, нам нужен обход arrс помощью forцикла,
                если элемент нечетное число, вставьте его в массив odd, если это
                четное число, вставьте его в массив even.
*/

                            /*  Решение    */

function squareDigits(num){
    var arr = num.toString().split('');
    let result = 0;
    let res = 0;
        for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
        
}
    return Number(arr.join(''));
}