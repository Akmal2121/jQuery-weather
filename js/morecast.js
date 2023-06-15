const api = "21315b2c0670f5f62ad9427e6b6cd4c4";
const city_ = $(".logo-input input").val();
const url_ = `http://api.openweathermap.org/data/2.5/forecast?q=${city_}&appid=${api}`;

async function morecast() {
  const responce = await fetch(url_);
  const data = await responce.json();

  try {
    // Describe morecast for the fst time
    $(".morecast-day").text(`tonight`);
    $(".morecast-img").attr(
      `src`,
      `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`
    );
    $(".morecast-sunrise").text(
      `Sunrise: ${window.moment(data.city.sunrise * 1000).format("HH:mm")} hr`
    );

    $(".morecast-sunset").text(
      `Sunset: ${window.moment(data.city.sunset * 1000).format("HH:mm")} hr`
    );

    $(".morecast-temp").text(
      `Temperature: ${Math.floor(data.list[0].main.temp - 273)} ℃`
    );
    $(".morecast-feelslike").text(
      `Feelslike: ${Math.floor(data.list[0].main.feels_like - 273)} ℃`
    );
    $(".morecast-cloud").text(
      `Cloudly ${Math.floor(data.list[0].clouds.all)} %`
    );
    $(".morecast-humadity").text(
      `Humidity: ${Math.floor(data.list[0].main.humidity)} %`
    );
    $(".morecast-pressure").text(
      `Pressure: ${Math.floor(data.list[0].main.pressure)} bar`
    );
    $(".morecast-wind").text(`Wind speed: ${data.list[0].wind.speed} km/h`);
    $(".morecast-description").text(
      `Description: ${data.list[0].weather[0].description} `
    );
    // Describe morecast for the first time
    $(".blocks").click(function () {
      const newarr = [...$(this)];
      console.log(newarr);
      const array = [...$(".blocks")];
      array.forEach((element) => {
        element.style.background = "honeydew";
      });
      console.log(this);
      this.style.background = "white";
      let index = +this.getAttribute("data-cast");
      $(".morecast-day").text(`${newarr[0].children[0].innerText}`);
      $(".morecast-img").attr(
        `src`,
        `http://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`
      );
      $(".morecast-sunrise").text(
        `Sunrise: ${window.moment(data.city.sunrise * 1000).format("HH:mm")} hr`
      );

      $(".morecast-sunset").text(
        `Sunset: ${window.moment(data.city.sunset * 1000).format("HH:mm")} hr`
      );

      $(".morecast-temp").text(
        `Temperature: ${Math.floor(data.list[index].main.temp - 273)} ℃`
      );
      $(".morecast-feelslike").text(
        `Feelslike: ${Math.floor(data.list[index].main.feels_like - 273)} ℃`
      );
      $(".morecast-cloud").text(
        `Cloudly ${Math.floor(data.list[index].clouds.all)} %`
      );
      $(".morecast-humadity").text(
        `Humidity: ${Math.floor(data.list[index].main.humidity)} %`
      );
      $(".morecast-pressure").text(
        `Pressure: ${Math.floor(data.list[index].main.pressure)} bar`
      );
      $(".morecast-wind").text(
        `Wind speed: ${data.list[index].wind.speed} km/h`
      );
      $(".morecast-description").text(
        `Description: ${data.list[index].weather[0].description} `
      );
    });
  } catch (error) {}
}

morecast();

$(".logo-input img").click(function () {
  const api = "21315b2c0670f5f62ad9427e6b6cd4c4";
  const city_ = $(".logo-input input").val();
  const url_ = `http://api.openweathermap.org/data/2.5/forecast?q=${city_}&appid=${api}`;

  async function morecast() {
    try {
      const responce = await fetch(url_);
      const data = await responce.json();

      if (data.message == "city not found") {
        $("footer").show();
        $(".footer-contianer").append(`
        <img src="./images/code404.png" alt="qwe">
        qwe
        ${$(".logo-input input").val()} could not be found!
        `);
        $(".main-container").hide();
        $(".main-container").hide();
        $("section").hide();
      }
      $(".blocks").click(function () {
        const newarr = [...$(this)];
        console.log(newarr);
        const array = [...$(".blocks")];
        array.forEach((element) => {
          element.style.background = "honeydew";
        });
        console.log(this);
        this.style.background = "white";
        let index = +this.getAttribute("data-cast");
        $(".morecast-day").text(`${newarr[0].children[0].innerText}`);
        $(".morecast-img").attr(
          `src`,
          `http://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`
        );
        $(".morecast-sunrise").text(
          `Sunrise: ${window
            .moment(data.city.sunrise * 1000)
            .format("HH:mm")} hr`
        );

        $(".morecast-sunset").text(
          `Sunset: ${window.moment(data.city.sunset * 1000).format("HH:mm")} hr`
        );

        $(".morecast-temp").text(
          `Temperature: ${Math.floor(data.list[index].main.temp - 273)} ℃`
        );
        $(".morecast-feelslike").text(
          `Feelslike: ${Math.floor(data.list[index].main.feels_like - 273)} ℃`
        );
        $(".morecast-cloud").text(
          `Cloudly ${Math.floor(data.list[index].clouds.all)} %`
        );
        $(".morecast-humadity").text(
          `Humidity: ${Math.floor(data.list[index].main.humidity)} %`
        );
        $(".morecast-pressure").text(
          `Pressure: ${Math.floor(data.list[index].main.pressure)} bar`
        );
        $(".morecast-wind").text(
          `Wind speed: ${data.list[index].wind.speed} km/h`
        );
        $(".morecast-description").text(
          `Description: ${data.list[index].weather[0].description} `
        );
      });
    } catch (error) {}
  }

  morecast();
});
