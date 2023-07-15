import "../scss/style.scss";

const Clock = <Type extends Date>(d: Type): string => {
  type sn = string | number;

  let day: string = d.toDateString();
  let h: sn = d.getHours();
  let m: sn = d.getMinutes();
  let s: sn = d.getSeconds();
  let AMAndPM: string = h < 12 ? "AM" : "PM";

  h = h < 10 ? (h = `0${h}`) : h;
  m = m < 10 ? (m = `0${m}`) : m;
  s = s < 10 ? (s = `0${s}`) : s;

  return `
    <span class="display-time">
        <header><h3>${day}</h3></header>
        <p id="am-pm">${AMAndPM}</p>
            <span class="box-container">
                <div class="box">
                    <p>${String(h)}</p>       
                </div>
                <p class="colon">:</p>
                <div class="box">
                    <p>${String(m)}</p>
                </div>
                <p class="colon">:</p>
                <div class="box">
                    <p>${String(s)}</p>
                </div>
            </span>
    </span>
    `;
};

export default Clock;
