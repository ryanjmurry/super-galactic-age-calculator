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
}