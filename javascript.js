let firstNum, secondNum, result, num, justEqualed;
let operator='';
let numbers=['',''];
let i=0;

const displayBox=document.querySelector('#display');
const displayResult=document.querySelector('#displayResult');

const numBtns=document.querySelectorAll('.num');
numBtns.forEach((numBtn) => {
  numBtn.addEventListener('click',function(){ 
    num=Number(numBtn.textContent);
    if(justEqualed==true && i==1 && operator==''){i=0; numbers[0]=`${num}`; justEqualed=false; updateDisplay();}   
    else{ numbers[i]=numbers[i].concat(num); updateDisplay(); }
  });
});

const addBtn=document.querySelector('#add');
addBtn.addEventListener('click',function(){ 
  if(!operator=='' && !numbers[0]=='' && !numbers[1]==''){equals(); operator="+"; updateDisplay();}
  else if(!numbers[0]==''){operator="+"; i=1; updateDisplay();} 
});

const subBtn=document.querySelector('#subtract');
subBtn.addEventListener('click',function(){ 
  if(!operator=='' && !numbers[0]=='' && !numbers[1]==''){equals(); operator="-"; updateDisplay();}
  else if(!numbers[0]==''){operator="-"; i=1; updateDisplay();} 
});

const multiBtn=document.querySelector('#multiply');
multiBtn.addEventListener('click',function(){ 
  if(!operator=='' && !numbers[0]=='' && !numbers[1]==''){equals(); operator="*"; updateDisplay();}
  else if(!numbers[0]==''){operator="*"; i=1; updateDisplay();} 
});

const divBtn=document.querySelector('#divide');
divBtn.addEventListener('click',function(){ 
  if(!operator=='' && !numbers[0]=='' && !numbers[1]==''){equals(); operator="/"; updateDisplay();}
  else if(!numbers[0]==''){operator="/"; i=1; updateDisplay();} 
});

const decBtn=document.querySelector('#decimal');
decBtn.addEventListener('click',function(){ 
  if(justEqualed==true && operator==''){i=0; numbers[0]='0.'; justEqualed=false; updateDisplay();}
  else if((operator=='' && i!=0) || numbers[i].includes('.')){numbers[i]+=''; updateDisplay();}
  else if(numbers[i]==''){numbers[i]+='0.'; updateDisplay();}
  else{numbers[i]+='.'; updateDisplay();}


});

const equalBtn=document.querySelector('#equals');
equalBtn.addEventListener('click',function(){ 
  if(numbers[1]=='' || operator==''){displayResult.textContent=numbers[0]; operator='';}
  else{ equals();} });

const clearBtn=document.querySelector('#clear');
clearBtn.addEventListener('click',function(){ numbers[0]=''; numbers[1]=''; operator=''; i=0; updateDisplay();});




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

  const equals=function(){
    firstNum = Number(numbers[0]);
    secondNum = Number(numbers[1]);
    result = operate(firstNum,operator,secondNum);
    updateDisplay;
    displayResult.textContent=result;
    numbers[0]=result ; numbers[1]=''; operator=''; justEqualed=true;
  }