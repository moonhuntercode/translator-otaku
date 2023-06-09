import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
  <h1>Hello World!</h1>
  <p>This is your space to practice, get creative, and build your own projects from scratch.</p>
<a href="./p2.html">click</a>
<br>
  <textarea id="input"></textarea>
  <br>
<textarea id="output"></textarea>
  <script src="script.js"></script>
  </div>
`;

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  const text = input.value;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=${text}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data[0][0][0];
      output.value = translatedText;
    });
});
