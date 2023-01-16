const convertToCelsius = function(temp) {
  let c=(temp-32)*(5/9);
  return parseInt(c.toFixed(1));
  //can also use Math.round(num*10)/10;
};

const convertToFahrenheit = function(temp) {
  let f=temp*(9/5)+32;
  return parseInt(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
