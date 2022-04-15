export class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetArray = [
      "Mercury",
      0.24,
      "Venus",
      0.62,
      "Mars",
      1.88,
      "Jupiter",
      11.86,
    ];
    this.ageArray = [];
    if (lifeExpectancy < age) {
      this.overLifeExpectency = true;
    } else {
      this.overLifeExpectency = false;
    }
  }

  ageOnPlanet(planetYears, age) {
    const ageNum = age / planetYears;
    return Math.round(ageNum * 10) / 10;
  }

  calculateAllAges() {
    for (let i = 0; i < this.planetArray.length; i += 2) {
      let array = [];
      const planetAge = this.ageOnPlanet(this.planetArray[i + 1], this.age);
      array.push(planetAge);
      array.push(this.leftToLive(planetAge, this.planetArray[i + 1]));
      array.push(this.planetArray[i]);
      this.ageArray.push(array);
    }
  }

  leftToLive(planetAge, planetYears) {
    const lifeExpecentyPlanet = this.ageOnPlanet(
      planetYears,
      this.lifeExpectancy
    );
    const leftToLive = lifeExpecentyPlanet - planetAge;
    return Math.abs(Math.round(leftToLive * 10) / 10);
  }
}
