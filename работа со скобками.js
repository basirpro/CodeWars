/*                                  Задача
                Напишите функцию, которая принимает строку круглых скобок и определяет, 
                допустим ли порядок скобок. Функция должна возвращать, 
                trueесли строка действительна, и falseесли она недействительна.

                                            Примеры
                            "()"              =>  true
                            ")(()))"          =>  false
                            "("               =>  false
                            "(())((()())())"  =>  true
*/

/*  Решение    */

function validParentheses(parens) {
   // your code here ..
   let res = 0;
   if (parens[0] == ")") {
      return false;
   }
   for (let i = 0; i < parens.length; i++) {
      if (parens[i] == "(") {
         res++;
      } else if (parens[i] == ")") {
         res--;
         if (res < 0) {
            return false;
         }
      }
   }
   if (res == 0) {
      return true;
   } else {
      return false;
   }
}
