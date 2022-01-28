/*                                  Задача
               For example, if we run 9119 through the function, 811181 will come out, 
               because 92 is 81 and 12 is 1.
                Note: The function accepts an integer and returns an integer
*/

                            /*  Решение    */

function squareDigits(num){
    var arr = num.toString().split('');
    for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i];
        
}
    return Number(arr.join(''));
}