const stringResult = document.getElementById('string-result');
const numberResult = document.getElementById('number-result');
const booleanResult = document.getElementById('boolean-result');
const nullResult = document.getElementById('null-result');
const undefinedResult = document.getElementById('undefined-result');
const check = document.getElementById('check');

var stringData = "String value";
var numberData = 42;
var booleanData = true;
var nullData = null;
nullData = "Hellpp"
var undefinedData = undefined;

check.onclick = () => {
  if(typeof stringData === 'string'){stringResult.innerHTML = 'Completed';}
  if(typeof numberData === 'number'){numberResult.innerHTML = 'Completed';}
  if(typeof booleanData === 'boolean'){booleanResult.innerHTML = 'Completed';}
  if(nullData !== null){nullResult.innerHTML = 'Completed';}
  if(typeof undefinedData === 'undefined'){undefinedResult.innerHTML = 'Completed';}
}