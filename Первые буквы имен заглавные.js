/*                                  Задача
          Есть массив ответов имен. Необходимо сделать так чтобы первые буквы каждого слова с большой буквы
          


*/

                            /*  Решение    */
let NameAnswers = ['IvaN', 'annA', 'KosTya', 'NatasHA']

NameAnswers = NameAnswers.map(item => item.toLowerCase());
NameAnswers = NameAnswers.map(item => item[0].toUpperCase() + item.substring(1)).join(' ');
console.log(NameAnswers);