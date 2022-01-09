exports.celciusToFarenheit = function(temperature){
  let celciusEquivalent = temperature * 1.8 + 32;
  if(isFinite(celciusEquivalent)) return celciusEquivalent.toFixed(2);

  throw new Error(`Celcius value is too large`)
}

exports.farenheitToCelcius = function(temperature){
  let farenheitEquivalent = (temperature -32) /1.8;

  return farenheitEquivalent.toFixed(2);
}

exports.getValidNumber = function(numberString){
  let number = 0;
  try {
    number = eval(numberString)
  } catch (error) {
    throw Error(`${numberString} is not a valid number`);
  }
  if(!isFinite(number)){
    if(number > 0) throw Error(`${numberString} is too large a positive number`);
    throw Error(`${numberString} is too large a negative number`);
  } 
  if(number > 0 && number < Number.MIN_VALUE) throw Error(`${numberString} is too small a number`);

  return number;
}