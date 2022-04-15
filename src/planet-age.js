export class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetArray = [
      "mercury",
      0.24,
      "venus",
      0.62,
      "mars",
      1.88,
      "jupiter",
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
      // this[this.planetArray[i] + "Age"] = this.ageOnPlanet(
      //   this.planetArray[i + 1],
      //   this.age
      // );
      // this[this.planetArray[i] + "LeftToLive"] = this.leftToLive(
      //   this[this.planetArray[i] + "Age"],
      //   this.planetArray[i + 1]
      // );
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
