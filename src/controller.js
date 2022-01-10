let {
  getValidNumber,
  celciusToFarenheit,
  farenheitToCelcius
} = require("./temperature-converter");


exports.convertTemperature = function(temperatureString, conversion){
  try{
    if(conversion?.trim() === "CF"){
      let temperatureValue = getValidNumber(temperatureString);
      let convertedTemperature = celciusToFarenheit(temperatureValue);

      return `${temperatureString}\u00B0C is ${convertedTemperature}\u00B0F`;
    }else if(conversion?.trim() === "FC"){
      let temperatureValue = getValidNumber(temperatureString);
      let convertedTemperature = farenheitToCelcius(temperatureValue);

      return `${temperatureString}\u00B0F is ${convertedTemperature}\u00B0C`;
    }else{
      return `Invalid conversion string.`
    }
  }catch(error){
    return error.message;
  }
}