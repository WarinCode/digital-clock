import Clock from "./components/Clock";
import "./scss/style.scss"

const app:HTMLElement = document.querySelector("#app")!;
const s:number = 1000;

setInterval(():void => { // callback function ทุกๆ 1วินาที
  app.innerHTML = `
    <section class="container">
      ${Clock<Date>(new Date())}
    </section>
  `;
} , s);
