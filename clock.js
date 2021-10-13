const clock = document.querySelector(".js-time");
const clockSwitch = document.querySelector(".js-time-switch");

const clockTimes = () => {
    const time = new Date();
    const currentHours = time.getHours();
    const currentMinutes = time.getMinutes();
    const currentSeconds = time.getSeconds();

    const hours = currentHours < 10 ? `0${currentHours}`:`${currentHours}`;
    const minutes = currentMinutes < 10 ? `0${currentMinutes}`:`${currentMinutes}`;
    const seconds = currentSeconds < 10 ? `0${currentSeconds}`:`${currentSeconds}`;

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

clockTimes();
setInterval(clockTimes, 1000);

// String.padStart(2, "0")
// String.padEnd(2, "0")