let {
  getValidNumber,
  farenheitToCelcius,
  celciusToFarenheit
} = require("../src/temperature-converter");

describe("get valid number", () => {
  test("valid integer number", () => {
    expect(getValidNumber("123")).toBe(123);
  });
  
  test("invalid integer number", () => {
    expect(() => {
      getValidNumber("1a23");
    }).toThrow("1a23 is not a valid number");
  });
  
  test("valid float number", () => {
    expect(getValidNumber("1.23")).toBe(1.23);
  });

  test("fraction number", () => {
    expect(() => {
      getValidNumber("9/5");
    }).toThrow("9/5 is not a valid number");
  });
  
  test("invalid float number", () => {
    expect(() => {
      getValidNumber("1.a23");
    }).toThrow("1.a23 is not a valid number");
  });
  
  test("very large number", () => {
    expect(() => {
      getValidNumber("1.8e+308");
    }).toThrow("1.8e+308 is too large a positive number");
  });
  
  test("very large negative number", () => {
    expect(() => {
      getValidNumber("-1.8e+308");
    }).toThrow("-1.8e+308 is too large a negative number");
  });
  
//   test("very small negative number", () => {
//     expect(() => {
//       getValidNumber("-5e-334");
//     }).toThrow("-5e-334 is too small a number");
//   });
  
//   test("very small positive number", () => {
//     expect(() => {
//       getValidNumber("5e-334");
//     }).toThrow("5e-334 is too small a number");
//   });
});

describe("farenheit to celcius", () => {
  test("valid conversion of a positive integer", () => {
    expect(farenheitToCelcius(46.4)).toBe("8.00");
  });
  
  test("valid conversion of a positive float", () => {
    expect(farenheitToCelcius(72)).toBe("22.22");
  });
  
});

describe("celcius to farenheit", () => {
  test("valid conversion of a positive integer temperature", () => {
    expect(celciusToFarenheit(10)).toBe("50.00");
  });
  
  test("valid conversion of a positive float temperature", () => {
    expect(celciusToFarenheit(22.22)).toBe("72.00");
  });
  
  test("invalid positive float number", () => {
    expect(() => {
      celciusToFarenheit(1.7976931348623157e+308);
    }).toThrow("Celcius value is too large");
  });
  
  test("invalid negative float number", () => {
    expect(() => {
      celciusToFarenheit(-1.7976931348623157e+308);
    }).toThrow("Celcius value is too large");
  });
});
