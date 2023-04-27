let firstNum, operator, secondNum, result;
let numbers=['',''];
let i=0;

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
    console.log(x+' '+operator+' '+y);
    switch(operator){
      case '+':
        console.log("adding");
        return add(x,y);
        break;

      case '-':
        console.log("subtracting");
        return subtract(x,y);
        break;

      case '*':
        console.log("multiply");
        return multiply(x,y);
        break;

      case '/':
        console.log("divide");
        return divide(x,y);
        break;       
    }
  }