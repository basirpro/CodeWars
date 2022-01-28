/*                                  Задача
         Учитывая целое число, определите, квадратное ли это число :
*/

                            /*  Решение    */
var isSquare = (n) => {
    let result = Math.sqrt(n);
        if (result % 1 === 0){
    return true
        }else if (n < 0) {
    return false; // fix me
        } else {
    return false;
    }
}