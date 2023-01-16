const add = function(num1,num2) {
	return parseInt(num1)+parseInt(num2);
};

const subtract = function(num1,num2) {
  return parseInt(num1)-parseInt(num2)
};

const sum = function(arr) {
	let s=0;
  for(let i=0;i<arr.length;i++){
    s+=parseInt(arr[i]);
  }
  return s;
};

const multiply = function(arr) {
  let p=1;
  for(let i=0;i<arr.length;i++)
    p*=parseInt(arr[i]);
  return p;
};

const power = function(a,b) {
	let po=parseInt(a);
  for(let i=1;i<b;i++){
    po*=parseInt(a);
  }
  return po;
};

const factorial = function(n) {
  if(n==0||n==1)
  return 1;
  return n*factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
