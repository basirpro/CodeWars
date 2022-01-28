/*                                  Задача
                Даны два целочисленных массива a, b , оба length >= 1, 
                создать программу , которая возвращает ,
                true если сумма квадратов каждого элемента aявляется строго больше,
                 чем в сумме кубов каждого элемента b.
*/

                            /*  Решение    */

function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  let result = 0;
  let res = 0
  for (let i = 0; i < a.length; i++){
    result += a[i] * a[i];
}
  for (let j = 0; j < b.length; j++){
    res += b[j] * b[j] * b[j];
  }
    if (result > res){
      return true;
    }else {
      return false;
    }
  }