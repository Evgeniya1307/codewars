// ------------создать функцию принимающую строку и возвращающая гласные буквы

// function disemvowel(str) {
//     let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
//     return newStr;
//    }

// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

function XO(str) {
return str.toLoverCase().split('x').length === str.toLoverCase().split('o').length
}



 


