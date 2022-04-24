import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Person } from "./planet-age";
/* eslint-disable */
import { img } from "../assets/images/jupiter.gif";
import { img2 } from "../assets/images/mars.gif";
import { img3 } from "../assets/images/venus.gif";
import { img4 } from "../assets/images/mercuery.gif";
/* eslint-enable */

$("#user-form")
  .children("button")
  .click(function (event) {
    event.preventDefault();
    const age = parseInt($("#age-input").val());
    const lifeExpectancy = parseInt($("#life-input").val());
    const person = new Person(age, lifeExpectancy);
    person.isOverLifeExpectency(age, lifeExpectancy);
    person.calculateAllAges();
    $("#output").text("");
    loading(person);
  });
function loading(person) {
  $("#loading").removeClass("hidden");
  setTimeout(() => {
    $("#loading").addClass("hidden");
    buildUI(person);
  }, 1500);
}
function buildUI(person) {
  let imageUrls = [
    "../assets/images/mercuery.gif",
    "../assets/images/venus.gif",
    "../assets/images/mars.gif",
    "../assets/images/jupiter.gif",
  ];
  let string;
  if (person.overLifeExpectency) {
    string = "Over Life Expectancy By: ";
  } else {
    string = "Life Expectancy Remaining: ";
  }
  let output = $("#output");
  let i = 0;
  person.ageArray.forEach((element) => {
    $(output).append(
      `<div class='planet-container'><img src='${imageUrls[i]}'><ul class='planet'><li><h3>${element[2]}:</h3></li><li>Age on Planet: ${element[0]} years</li><li>${string}${element[1]} years</li></ul></div>`
    );
    i++;
  });
}
