/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let hacks = [".com", ".net"];
  for (let pronoun of pronoun) {
    for (adj of adj) {
      for (noun of noun) {
        for (let hacks of hacks) {
          document.querySelector(
            "#domains"
          ).innerHTML += `<ul>${pronoun}${adj}${noun}${hacks}</ul>`;
        }
      }
    }
  }
};
