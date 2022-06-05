const result = document.querySelector('.result');
const buttons = Array.from(document.querySelectorAll('.number'));

const add = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const multiply = (num1, num2) => {
  return num1 * num2;
};
const divide = (num1, num2) => {
  if (num2 == 0) {
    return 'error!';
  }
  return num1 / num2;
};

const operate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '/':
      multiply(num1, num2);
      break;
    case '*':
      divide(num1, num2);
      break;
    default:
      break;
  }
};
// console.log(buttons);
buttons.map((button) => {
  button.addEventListener('click', () => {
    switch (button.innerHTML) {
      case 'del':
        result.innerText = '';
        break;

      case '=':
        try {
          result.innerText = eval(result.innerText);
        } catch (error) {
          result.innerText = 'ERROR!';
        }
        break;
      case 'EUR TO ILS':
        result.innerText *= 3.95;
        break;
      case 'ILS TO EUR':
        result.innerText /= 3.95;
        break;
      case 'USD TO ILS':
        result.innerText *= 3.35;
        break;
      case 'ILS TO USD':
        result.innerText /= 3.35;
        break;

      default:
        result.innerText += button.innerText;

        break;
    }
  });
});
