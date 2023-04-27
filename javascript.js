let firstNum, operator, secondNum, result;
let numbers=['',''];
let i=0;

const displayBox=document.querySelector('#display');

const numBtns=document.querySelectorAll('.num');
numBtns.forEach((numBtn) => {
  numBtn.addEventListener('click',function(){ numbers[i]+=numBtn.textContent;});
});

const addBtn=document.querySelector('#add');
addBtn.addEventListener('click',function(){ operator="+"; i=1; });

const subBtn=document.querySelector('#subtract');
subBtn.addEventListener('click',function(){ operator="-"; i=1;});

const multiBtn=document.querySelector('#multiply');
multiBtn.addEventListener('click',function(){ operator="*"; i=1; });

const divBtn=document.querySelector('#divide');
divBtn.addEventListener('click',function(){ operator="/"; i=1; });

const equalBtn=document.querySelector('#equals');
equalBtn.addEventListener('click',function(){ 
  firstNum = Number(numbers[0]);
  secondNum = Number(numbers[1]);
  result = operate(firstNum,operator,secondNum);
  displayBox.textContent=result;
  i=0;
  firstNum='';secondNum='';
});




const add = function(x,y) {
    return x+y;	
  };
  
  const subtract = function(x,y) {
      return x-y;
  };

  const multiply = function(x,y) {
    return x*y;
  };

  const divide = function(x,y){
    if(y===0){
        return "You can't do that!";
    }
    else{
        return x/y;
    }
  }

  const operate=function(x,operator,y){
    switch(operator){
      case '+':
        return add(x,y);
        break;

      case '-':
        return subtract(x,y);
        break;

      case '*':
        return multiply(x,y);
        break;

      case '/':
        return divide(x,y);    
    }
  }