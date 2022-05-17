// ------------1.-------создать функцию принимающую строку и возвращающая гласные буквы

// function disemvowel(str) {
//     let newStr = (str.replace(/A|E|I|O|U|a|e|i|o|u/g, ''))
//     return newStr;
//    }

//2.========= Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

// function XO(str) {
   
//         return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
//     }



//---3----------Завершите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.

//Пример

//const divisibleBy = (numbers, divisor) => numbers.filter( num => num % divisor ===0)

//---4-----------Ваша функция принимает два аргумента:

/*текущий возраст отца (лет)
текущий возраст сына (лет)
Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
 */
// function learnJavaScript() {
//     const twiceAsOld = (dadYearsOld, sonYearsOld) => {
//       return Math.abs(dadYearsOld * - sonYearsOld)
//     }
//     return twiceAsOld(36, 7)
//   }


//-----------------5 ПРИМЕР----------------
/*failuresListдолжен быть массивом, содержащим result failureсообщения.

failuresListдолжен быть равен указанному выходу.

Следует использовать строки шаблонов и интерполяцию выражений.

Следует использовать итератор.*/
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
    
//    const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
   
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);



//--------------------------------------6 ПРИМЕР
/*Thermostatдолжен быть classс определенным constructorметодом.

classследует использовать ключевое слово.

Thermostatдолжна быть возможность создания экземпляра.

При создании экземпляра со значением по Фаренгейту Thermostatследует установить правильный temperature.

А getterследует определить.

А setterследует определить.

Вызов setterсо значением в градусах Цельсия должен установить temperature.*/

// class Thermostat {
//     constructor(thermos) {
//       this._thermos = thermos
//     }
//     get temperature() {
//       return (5 / 9) * (this._thermos - 32);
//     }
    
//     set temperature(celsius) {
//       this._thermos = (celsius * 9.0) / 5 + 32;
//     }
//   }
    
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in Celsius
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in Celsius



//--------------------ПРИМЕР ----------------
/*Сделайте так, чтобы обещание учитывало успех и неудачу. Если responseFromServerесть true, вызовите resolveметод для успешного выполнения обещания. Передайте resolveстроку со значением We got the data. Если responseFromServerесть false, используйте rejectвместо этого метод и передайте ему строку: Data not received.
*/
const makeServerRequest = new Promise((resolve, reject) => {
    
    let responseFromServer;
      
    if(responseFromServer) {
      resolve ('We got the data')
    } else {  
     reject ('Data not received')
    }
  });


  //----------------------------ПРИМЕР--------------------
