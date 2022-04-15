export class Person {
  constructor(age) {
    this.age = age;
  }

  ageOnPlanet(planetYears) {
    return this.age / planetYears;
  }
}
