export class Person {
  constructor(age) {
    this.age = age;
  }

  ageOnPlanet(planetYears) {
    const ageNum = this.age / planetYears;
    return Math.round(ageNum * 10) / 10;
  }
}
