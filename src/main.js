import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["One horse", "My dog", "My brother", "My grandfather"];
  let what = ["broke", "stole", "ran over", "hid"];
  let objet = ["my laptop", "the keys", "the car"];
  let when = [
    "while I was getting ready",
    "on the way to work",
    "when I finished my lunch",
    "in the middle of the night",
    "in front of my eyes"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let objetIndex = Math.floor(Math.random() * objet.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let ExcSentence =
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    objet[objetIndex] +
    " " +
    when[whenIndex] +
    ".";

  document.querySelector("#excuses").innerHTML = ExcSentence;
};
