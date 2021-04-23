
// You're gonna need this
const header = document.querySelector("h2");

const time = {
  getDaysleft: function (timeLeft) {
    return Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  },
  getHoursLeft: function (timeLeft) {
    const hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    return hoursLeft > 9 ? `${hoursLeft}` : `0${hoursLeft}`;
  },
  getMinutesLeft: function (timeLeft) {
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return minutesLeft > 9 ? `${minutesLeft}` : `0${minutesLeft}`;
  },
  getSecondsLeft: function (timeLeft) {
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return secondsLeft > 9 ? `${secondsLeft}` : `0${secondsLeft}`;
  }
};

function paintTime(timeLeft) {
  const days = time.getDaysleft(timeLeft);
  const hours = time.getHoursLeft(timeLeft);
  const minutes = time.getMinutesLeft(timeLeft);
  const seconds = time.getSecondsLeft(timeLeft);
  const hearts = ["❤️", "💛", "💚", "💜"];
  const randomHeartColors = hearts[Math.floor(Math.random() * hearts.length)];
  header.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s left\nbefore Xmas in Korea ${randomHeartColors}`;
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const localTime = new Date(); // I live in the Philippines GMT+8 :)
  const timeLeft = xmasDay.getTime() - localTime.getTime();
  paintTime(timeLeft);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
