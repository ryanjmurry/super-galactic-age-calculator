import { GalacticCalculator } from "../src/galactic-calculator.js";

describe('GalacticCalculator', function () {

  it('should test GalacticCalculator Constructor', function () {
    let birthday = new Date("August 2, 2018");
    let newGalacticCalculator = new GalacticCalculator("M", 5, birthday);
    expect(newGalacticCalculator.sex).toEqual("M");
    expect(newGalacticCalculator.age).toEqual(5);
    expect(newGalacticCalculator.birthday).toEqual(birthday);
  });

  it('should convert an age, in years, to seconds', function () {
    let birthday = new Date("August 2, 2018");
    let newGalacticCalculator = new GalacticCalculator("M", 5, birthday);
    expect(newGalacticCalculator.yearsToSeconds()).toEqual(157788000);
  });

  it('should determine an age, in seconds, from a given birthday', function () {
    let birthday = new Date("August 2, 2018");
    let today = new Date();
    let result = (today.getTime() - birthday.getTime()) / 1000;
    let newGalacticCalculator = new GalacticCalculator("M", 5, birthday);
    expect(newGalacticCalculator.ageSecondCalculator()).toEqual(result);
  });

  it('should convert an age in Earth years to Mercury, Venus, Mars, and Jupiter years', function () {
    let birthday = new Date("August 2, 2018");
    let newGalacticCalculator = new GalacticCalculator("M", 5, birthday);
    expect(newGalacticCalculator.earthYearsConverter("Mercury").toFixed(1)).toEqual("20.8");
    expect(newGalacticCalculator.earthYearsConverter("Venus").toFixed(1)).toEqual("8.1");
    expect(newGalacticCalculator.earthYearsConverter("Mars").toFixed(1)).toEqual("2.7");
    expect(newGalacticCalculator.earthYearsConverter("Jupiter").toFixed(1)).toEqual("0.4");
  });

  it('should calculate the life expectancy of a male or female at a given age in Earth, Mercury, Venus, Mars, and Jupiter years', function () {
    let birthday = new Date("August 2, 2018");
    let newGalacticCalculatorM = new GalacticCalculator("M", 5, birthday);
    let newGalacticCalculatorF = new GalacticCalculator("F", 5, birthday);
    expect(newGalacticCalculatorM.lifeExpectancy("Earth").toFixed(1)).toEqual("76.6");
    expect(newGalacticCalculatorM.lifeExpectancy("Mercury").toFixed(1)).toEqual("319.1");
    expect(newGalacticCalculatorM.lifeExpectancy("Venus").toFixed(1)).toEqual("123.5");
    expect(newGalacticCalculatorM.lifeExpectancy("Mars").toFixed(1)).toEqual("40.7");
    expect(newGalacticCalculatorM.lifeExpectancy("Jupiter").toFixed(1)).toEqual("6.5");
    expect(newGalacticCalculatorF.lifeExpectancy("Earth").toFixed(1)).toEqual("81.3");
    expect(newGalacticCalculatorF.lifeExpectancy("Mercury").toFixed(1)).toEqual("338.8");
    expect(newGalacticCalculatorF.lifeExpectancy("Venus").toFixed(1)).toEqual("131.1");
    expect(newGalacticCalculatorF.lifeExpectancy("Mars").toFixed(1)).toEqual("43.2");
    expect(newGalacticCalculatorF.lifeExpectancy("Jupiter").toFixed(1)).toEqual("6.9");
  });

  it('should calculate the expected years remaining of a male or female at a given age in Earth, Mercury, Venus, Mars, and Jupiter years', function () {
    let birthday = new Date("August 2, 2018");
    let newGalacticCalculatorM = new GalacticCalculator("M", 5, birthday);
    let newGalacticCalculatorF = new GalacticCalculator("F", 5, birthday);
    expect(newGalacticCalculatorM.yearsLeft("Earth").toFixed(1)).toEqual("71.6");
    expect(newGalacticCalculatorM.yearsLeft("Mercury").toFixed(1)).toEqual("298.3");
    expect(newGalacticCalculatorM.yearsLeft("Venus").toFixed(1)).toEqual("115.5");
    expect(newGalacticCalculatorM.yearsLeft("Mars").toFixed(1)).toEqual("38.1");
    expect(newGalacticCalculatorM.yearsLeft("Jupiter").toFixed(1)).toEqual("6.0");
    expect(newGalacticCalculatorF.yearsLeft("Earth").toFixed(1)).toEqual("76.3");
    expect(newGalacticCalculatorF.yearsLeft("Mercury").toFixed(1)).toEqual("317.9");
    expect(newGalacticCalculatorF.yearsLeft("Venus").toFixed(1)).toEqual("123.1");
    expect(newGalacticCalculatorF.yearsLeft("Mars").toFixed(1)).toEqual("40.6");
    expect(newGalacticCalculatorF.yearsLeft("Jupiter").toFixed(1)).toEqual("6.4");
  });

  it('should determine how many years a male or female has outlived the average life expectancy in Earth, Mercury, Venus, Mars, and Jupiter years', function () {
    let birthday = new Date("August 2, 2018");
    let newGalacticCalculatorM = new GalacticCalculator("M", 80, birthday);
    let newGalacticCalculatorF = new GalacticCalculator("F", 85, birthday);
    expect(newGalacticCalculatorM.outlivedExpectancyBy("Earth").toFixed(1)).toEqual("3.1");
    expect(newGalacticCalculatorM.outlivedExpectancyBy("Mercury").toFixed(1)).toEqual("12.9");
    expect(newGalacticCalculatorM.outlivedExpectancyBy("Venus").toFixed(1)).toEqual("5.0");
    expect(newGalacticCalculatorM.outlivedExpectancyBy("Mars").toFixed(1)).toEqual("1.6");
    expect(newGalacticCalculatorM.outlivedExpectancyBy("Jupiter").toFixed(1)).toEqual("0.3");
    expect(newGalacticCalculatorF.outlivedExpectancyBy("Earth").toFixed(1)).toEqual("3.4");
    expect(newGalacticCalculatorF.outlivedExpectancyBy("Mercury").toFixed(1)).toEqual("14.2");
    expect(newGalacticCalculatorF.outlivedExpectancyBy("Venus").toFixed(1)).toEqual("5.5");
    expect(newGalacticCalculatorF.outlivedExpectancyBy("Mars").toFixed(1)).toEqual("1.8");
    expect(newGalacticCalculatorF.outlivedExpectancyBy("Jupiter").toFixed(1)).toEqual("0.3");
  });

});