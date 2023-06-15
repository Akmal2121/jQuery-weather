const duration = document.querySelector(".today-time");
const date = new Date();
const mtnh = date.getMonth();
const hour = date.getHours();
const _date = date.getDate();
const minut = date.getMinutes();
const format_date = _date < 10 ? "0" + _date : _date;
const format_mtnh = mtnh < 10 ? "0" + mtnh : mtnh;
const format_hour = hour < 10 ? "0" + hour : hour;
const format_minut = minut < 10 ? "0" + minut : minut;
// $("main").hide();
document.querySelector(".date").textContent = `${format_date}.${
  format_mtnh + 1
}.${date.getFullYear()}`;

duration.textContent = `Duration: ${format_hour}:${format_minut} hr`;

const api_key = "21315b2c0670f5f62ad9427e6b6cd4c4";
const city = $(".logo-input input").val();
const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
function get_weather() {
  async function fetchData() {
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      console.log(data);
      duration.textContent = `Duration: ${window
        .moment(data.list[0].clouds.dt_txt)
        .format("HH:mm")} hr`;
      $(".blocks-clouds").text(`${data.list[0].weather[0].description}`);
      $(".osadki").attr(
        `src`,
        `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
      );
      $(".temp-today").text(`${Math.floor(data.list[0].main.temp - 273)} ℃`);
      $(".temp-today-feels-like").text(
        `Feels like ${Math.floor(data.list[0].main.feels_like - 273)} ℃`
      );
      $(".today-sunrise").text(
        `Sunrise: ${window.moment(data.city.sunrise * 1000).format("HH:mm")} hr`
      );
      $(".today-sunset").text(
        `Sunset: ${window.moment(data.city.sunset * 1000).format("HH:mm ")} hr`
      );
    } catch (error) {
      console.log(error);
    }
  }

  fetchData();
}

get_weather();
$(".logo-input img").click(() => {
  const api_key = "21315b2c0670f5f62ad9427e6b6cd4c4";
  const city = $(".logo-input input").val();
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
  function get_weather() {
    async function fetchData() {
      try {
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data);
        $(".osadki").attr(
          `src`,
          `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
        );
        $(".blocks-clouds").text(`${data.list[0].weather[0].description}`);
        $(".temp-today").text(`${Math.floor(data.list[0].main.temp - 273)} ℃`);
        $(".temp-today-feels-like").text(
          `Feels like ${Math.floor(data.list[0].main.feels_like - 273)} ℃`
        );
        $(".today-sunrise").text(
          `Sunrise: ${window
            .moment(data.city.sunrise * 1000)
            .format("HH:mm")} hr`
        );
        $(".today-sunset").text(
          `Sunset: ${window
            .moment(data.city.sunset * 1000)
            .format("HH:mm ")} hr`
        );
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }

  get_weather();
});
fivedays();

// $("blocks").append(`<h3>Tonight</h3>
//             <p>JUN 30</p>
//             <img src="./images/sub.png" class="osadki" alt="" />
//             <h1>25C</h1>
//             <p>clear, warm</p>`);
