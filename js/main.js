function calculator([...str]) {
  let operator;
  str.forEach((el) => {
    if (el === '+' || el === '-' || el === '/' || el === '*') {
      operator = el;
    }
  });

  if (str === null || str.length > 9 || str.length < 5 || str[0] === ' ' || operator.length !== 1) {
    throw new Error(`1) Error: "${str.join('')}" `);
  }

  const array = str.join('').split(' ');

  if (
    array.length > 3 ||
    array[0] === '0' ||
    array[2] === '0' ||
    isNaN(array[0]) !== isNaN(array[2]) ||
    +array[0] > 10 ||
    +array[2] > 10
  ) {
    throw new Error(`2) Error: "${str.join('')}"`);
  }

  if (Number.isInteger(+array[0]) === true && Number.isInteger(+array[2]) === true) {
    return String(Math.floor(eval(array[0] + array[1] + array[2])));
  }

  if (isNaN(array[0]) === true && isNaN(array[0]) === true) {
    const romanNumber = [100, 50, 40, 10, 9, 5, 4, 1];
    const romanLetters = ['C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const elements = array.filter((el) => el !== operator);
    let elementOne = '';
    let elementTwo = '';

    for (let i = 0; i <= 1; i++) {
      if (elements[i] !== 'IV' && elements[i] !== 'IX') {
        i == 0 ? (elementOne = Array.from(elements[i])) : (elementTwo = Array.from(elements[i]));
      } else {
        i == 0 ? (elementOne = [elements[i]]) : (elementTwo = [elements[i]]);
      }
    }

    let valueOne = 0;
    let valueTwo = 0;

    elementOne.forEach((element) => {
      romanLetters.forEach((Letters, index) => {
        if (element === Letters) {
          valueOne += romanNumber[index];
        }
      });
    });

    elementTwo.forEach((element) => {
      romanLetters.forEach((Letters, index) => {
        if (element === Letters) {
          valueTwo += romanNumber[index];
        }
      });
    });

    if (valueOne > 10 || valueTwo > 10) {
      throw new Error(`3) Error: ${str.join('')}`);
    }

    let result = 0;
    if (operator === '+') {
      result = valueOne + valueTwo;
    } else if (operator === '-') {
      result = valueOne - valueTwo;
    } else if (operator === '*') {
      result = valueOne * valueTwo;
    } else if (operator === '/') {
      result = valueOne / valueTwo;
    }

    let roman = '';
    romanNumber.forEach((item, index) => {
      for (let i = 0; result >= item; ++i) {
        roman += romanLetters[index];
        result -= item;
      }
    });

    return roman;
  }

  return 'Функция выполнилась';
}

// module.exports = calculator;

calculator('I + I');
