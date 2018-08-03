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
});