let firstNum, secondNum, result, num;
let operator='';
let numbers=['',''];
let i=0;

const displayBox=document.querySelector('#display');
const displayResult=document.querySelector('#displayResult');

const decBtn=document.querySelector('#decimal');
decBtn.addEventListener('click',function(){ 
  if(operator===''){numbers[i]+=''; updateDisplay();}
  else if(numbers[i]===''){numbers[i]+='0.'; updateDisplay();} 
  else if(!numbers[i].includes('.')){numbers[i]+='.'; updateDisplay();}; 
});

const numBtns=document.querySelectorAll('.num');
numBtns.forEach((numBtn) => {
  numBtn.addEventListener('click',function(){ 
    num=Number(numBtn.textContent);
    numbers[i]=numbers[i].concat(num); 
    //if(equalBtn.disabled){equalBtn.disabled=false;}
    if(decBtn.disabled){decBtn.disabled=false;}
    updateDisplay();
  });
});

const addBtn=document.querySelector('#add');
addBtn.addEventListener('click',function(){ operator="+"; i=1; updateDisplay();});

const subBtn=document.querySelector('#subtract');
subBtn.addEventListener('click',function(){ operator="-"; i=1; updateDisplay();});

const multiBtn=document.querySelector('#multiply');
multiBtn.addEventListener('click',function(){ operator="*"; i=1; updateDisplay();});

const divBtn=document.querySelector('#divide');
divBtn.addEventListener('click',function(){ operator="/"; i=1; updateDisplay();});

const equalBtn=document.querySelector('#equals');
equalBtn.addEventListener('click',function(){ 
  if(numbers[1]===''){displayResult.textContent=numbers[0];}
  else{firstNum = Number(numbers[0]);
  secondNum = Number(numbers[1]);
  result = operate(firstNum,operator,secondNum);
  updateDisplay;
  displayResult.textContent=result;
  numbers[0]=result ; numbers[1]=''; operator='';
  }
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

  const updateDisplay=function(){
    displayResult.textContent='';
    if(i===0){displayBox.textContent=`${numbers[0]}`+`${operator}`;}
    else{displayBox.textContent=`${numbers[0]}${operator}${numbers[1]}`;}
    
  }