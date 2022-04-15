export class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetArray = [
      "Mercury",
      0.24,
      "../assets/images/mercueryRotation.gif",
      "Venus",
      0.62,
      "../assets/images/venusRotation.gif",
      "Mars",
      1.88,
      "../assets/images/marsRotation.gif",
      "Jupiter",
      11.86,
      "../assets/images/jupiter.gif",
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
    for (let i = 0; i < this.planetArray.length; i += 3) {
      let array = [];
      const planetAge = this.ageOnPlanet(this.planetArray[i + 1], this.age);
      array.push(planetAge);
      array.push(this.leftToLive(planetAge, this.planetArray[i + 1]));
      array.push(this.planetArray[i]);
      array.push(this.planetArray[i + 2]);
      array.push;
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
