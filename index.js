let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
let selectOption = document.getElementById('mathOption');
let submitBtn = document.getElementById('submitBtn');

function math(argument1, argument2, operator) {
  switch (operator) {
    case '+':
      return argument1 + argument2;
    case '-':
      return argument1 - argument2;
    case '*':
      return argument1 * argument2;
    case '/':
      return argument1 / argument2;
  }
}

const alertResult = (event) => {
  event.preventDefault();

  if (input1.value && input2.value) {
    const result = Math.trunc(
      math(+input1.value, +input2.value, selectOption.value)
    );

    alert(result);
  }
};

submitBtn.addEventListener('click', alertResult);