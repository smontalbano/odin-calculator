const calcButtons = document.querySelectorAll('button');
const lowerLine = document.querySelector('.lower-line');
const upperLine = document.querySelector('.upper-line');
let firstNum = '';
let operator = '';
let secondNum = '';
let total = '';

calcButtons.forEach(function(btn){
  btn.addEventListener('click', () => {
    if (btn.className === 'operator'){
      let tempOp = getOperator(btn.id);
      if (tempOp === '=') {
        calc(firstNum, secondNum, operator);
      } else {
        operator = tempOp;
        upperLine.textContent = lowerLine.textContent + ' ' + operator;
        lowerLine.textContent = '0';
      }
    } else if (btn.id === 'clearButton'){
      clear();
    } else if (btn.id === 'decimal'){
        if (firstNum !== '' && operator !== ''){
            if(secondNum.indexOf('.') === -1){
                secondNum = secondNum + '.';
                lowerLine.textContent = secondNum;
            }
        } else if (operator === ''){
            if (firstNum.indexOf('.') === -1){
                firstNum = firstNum + '.';
                lowerLine.textContent = firstNum;
            }
        }
    } else if(firstNum !== '' && operator !== '') {
        secondNum = secondNum + btn.id;
        lowerLine.textContent = secondNum;
    } else {
        firstNum = firstNum + btn.id;
        lowerLine.textContent = firstNum;
    }

  });
});

function getOperator(str) {
  if (firstNum === ''){
    firstNum = '0';
  }
  switch (str) {
    case 'plus':
        return '+';
        break;
    case 'minus':
        return '-';
        break;
    case 'multiply':
        return '*';
        break;
    case 'divide':
        return  '/';
        break;
    case 'equals':
        return '=';
        break;     
  }
};

function clear(){
    firstNum = '';
    secondNum = '';
    operator = '';
    total = '';
    lowerLine.textContent = '0'
    upperLine.textContent = ' ';
}

function calc(num1, num2, op){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (op){
        case '+':
            total = num1 + num2;
            displayTotal(total);
            break;
        case '-':
            total = num1 - num2;
            displayTotal(total);
            break;
        case '*':
            total = num1 * num2;
            displayTotal(total);
            break;
        case '/':
            total = num1 / num2;
            displayTotal(total);
            break;
    }
}

function displayTotal(tot) {
    if(Number.isInteger(tot)){
        tot = parseInt(tot);
        upperLine.textContent = '';
        lowerLine.textContent = tot;
        firstNum = tot;
        secondNum = '';
        operator = '';
    } else {
        upperLine.textContent = '';
        lowerLine.textContent = tot;
        firstNum = tot;
        secondNum = '';
        operator = '';
    }

}