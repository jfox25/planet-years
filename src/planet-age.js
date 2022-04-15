export class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetArray = [
      "mercuryAge",
      0.24,
      "venusAge",
      0.62,
      "marsAge",
      1.88,
      "jupiterAge",
      11.86,
    ];
  }

  ageOnPlanet(planetYears) {
    const ageNum = this.age / planetYears;
    return Math.round(ageNum * 10) / 10;
  }

  calculateAllAges(planetArray) {
    for (let i = 0; i < planetArray.length; i += 2) {
      this[planetArray[i]] = this.ageOnPlanet(planetArray[i + 1]);
    }
  }
}
