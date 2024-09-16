let arrayofoperator = ["+","-","*","/"];
let input = document.getElementById("input-group");
console.log(input)
let subInput = document.getElementById("sub-input");
console.log(subInput)
let button = document.querySelectorAll("button");
button.forEach((element) => {
  element.addEventListener("click", () => {
    if (input.value=== '0' && !isNaN(parseInt(element.value))) {
      input.value = element.value;
    } else {
    switch (element.value) {
      case "+":
        checkOperator();
        
        break;
      case "-":
        checkOperator();
        break;
      case "*":
      checkOperator();
        break;
      case "/":
        checkOperator();
        break;

      case "=":
        input.value = eval(input.value);

        
        break;

        case "C":
          input.value=0;
          subInput.value=0;

          break;
        case "xx":
            input.value = input.value.slice(0, -1);
            break;
      default:
        // console.log(element.value)
        input.value += element.value;
        break;
        // console.log(arrayofoperator.includes(element.value))
       
    }}
  });

  function checkOperator(){
    subInput.value = input.value+element.value;

  if(!arrayofoperator.includes(element.value)) input.value+=element.value
    
    if (arrayofoperator.includes(input.value.charAt(input.value.length - 1))) {
      input.value = input.value.slice(0, -1) + element.value;
    } else {
  
      input.value += element.value;
    }
  }});