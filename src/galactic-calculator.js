export class GalacticCalculator {
  constructor(sex, age, birthday) {
    this.sex = sex;
    this.age = age;
    this.birthday = birthday;
    this.planets = {
      "Earth": 1,
      "Mercury": 0.24,
      "Venus": 0.62,
      "Mars": 1.88,
      "Jupiter": 11.86
    }
  }

  yearsToSeconds() {
    let secondsInAYear = 365.25 * 24 * 60 * 60;
    return this.age * secondsInAYear;
  }

  ageSecondCalculator() {
    let today = new Date();
    return Math.floor((today.getTime() - this.birthday.getTime()) / 1000);
  }

  yearsConverter(planet) {
    return this.age / this.planets[planet];
  }

  lifeExpectancy(planet) {
      return this.yearsLeft(planet) + this.yearsConverter(planet);
  }

  yearsLeft(planet) {
    let ageRaise = {
      1: this.age,
      2: this.age * this.age,
      3: this.age * this.age * this.age
    }
    if (this.sex === "M") {
      //equations comes from polynomial slope of life expectancy data provided by the Social Security Administration at https://www.ssa.gov/OACT/STATS/table4c6.html
      return ((76.3) - (0.932 * ageRaise[1]) - (0.002 * ageRaise[2]) + (0.0000385 * ageRaise[3])) / this.planets[planet];
    } else {
      return ((80.9) - (0.903 * ageRaise[1]) - (0.00342 * ageRaise[2]) + (0.0000455 * ageRaise[3])) / this.planets[planet];
    }
  }

  outlivedExpectancyBy(planet) {
    //average life expectancy, in years, of a male and female, respectively, in the US
    let standardMaleLifeExpectancy = 76.9;
    let standardFemaleLifeExpectancy = 81.6;
    let planetLifeExpectancy = 0;
    if (this.sex === "M") {
      planetLifeExpectancy = standardMaleLifeExpectancy / this.planets[planet];
    } else {
      planetLifeExpectancy = standardFemaleLifeExpectancy / this.planets[planet];
    }
    if (this.yearsConverter(planet) < planetLifeExpectancy) {
      return "N/A"
    } else {
      return this.yearsConverter(planet) - planetLifeExpectancy;
    }
  }
}