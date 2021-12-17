function MathAction (e){
    e.preventDefault();
let InputOne = +document.querySelector('.one').value;
let InputTwo = +document.querySelector('.two').value;
let Sign = document.querySelector('.ourSelect');
let result = 0;
let res = document.querySelector(".out");


switch (Sign.value) {

    case '+':
        if(Number.isNaN(InputOne) || Number.isNaN(InputTwo) ){
            res.innerHTML = "Input valid data";
            break; 
        }else{
            

      result = InputOne + InputTwo;
      if(Number.isInteger(result)){
        res.innerHTML = result; 
      }else{
      res.innerHTML = "Result has been rounded" +  ' ' +  Math.round(result); 
    }
      break;
        }

    case '-':
        if(Number.isNaN(InputOne) || Number.isNaN(InputTwo) ){
            res.innerHTML = "Input valid data";
            break; 
        }else{

      result = InputOne - InputTwo;
      if(Number.isInteger(result)){
          res.innerHTML = result;
      }else{
        res.innerHTML = "Result has been rounded" +  ' ' +  Math.round(result); 
      }
      break;
        }

    case '*':
        if(Number.isNaN(InputOne) || Number.isNaN(InputTwo) ){
            res.innerHTML = "Input valid data";
            break; 
        }else{

      result = InputOne * InputTwo;
      if(Number.isInteger(result)){
      res.innerHTML = result; 
      }else{
        res.innerHTML = "Result has been rounded" +  ' ' +  Math.round(result); 

      }
      break;
        }
    case '/':
        if(Number.isNaN(InputOne) || Number.isNaN(InputTwo) ){
            res.innerHTML = "Input valid data";
            break; 
        }else{

      result = InputOne / InputTwo;
      if(Number.isInteger(result)){
      res.innerHTML = result; 
      }
      else{
        res.innerHTML = "Result has been rounded" +  ' ' +  Math.round(result);
      }
      break;
        }
}
}
document.querySelector(".btn").onclick = MathAction;

