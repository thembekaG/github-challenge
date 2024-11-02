function showCurrentDetails(event) {
  event.preventDefault();

  let now = new Date();

  let day = now.getDay();
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let days = dayNames[now.getDay()];
  let currentDay = document.querySelector("#current-day");
  currentDay.innerHTML = `${days}`;
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    minutes = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${hours}:${minutes}`;
  let searchInput = document.querySelector(".search-input");
  let city = document.querySelector("#input-city");
  city.innerHTML = searchInput.value.toUpperCase();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCurrentDetails);
