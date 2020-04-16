const secondneedle = document.querySelector(".seconds");
const minuteneedle = document.querySelector(".minutes");
const hourneedle = document.querySelector(".hours");

setInterval(() => {
  const currentTime = new Date();
  var second = currentTime.getSeconds();
  var minute = currentTime.getMinutes();
  var hour = currentTime.getHours();
  secondneedle.style.transform = `rotate(${(360 * second) / 60}deg)`;

  minuteneedle.style.transform = `rotate(${(360 * minute) / 60}deg)`;

  hourneedle.style.transform = `rotate(${(360 * hour) / 60}deg)`;
}, 1000);
