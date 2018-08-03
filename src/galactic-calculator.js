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
    return (today.getTime() - this.birthday.getTime()) / 1000;
  }

  earthYearsConverter(planet) {
    return this.age / this.planets[planet];
  }
}