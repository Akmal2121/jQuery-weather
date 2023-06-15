function fivedays() {
  const blocks = document.querySelectorAll(".blocks");
  async function fivefetch() {
    const city = $(".logo-input input").val();
    const api_key = "21315b2c0670f5f62ad9427e6b6cd4c4";
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      console.log(data);
      let j = 0;
      for (let i = 0; i < data.list.length; i += 8) {
        if (i == 0) {
          blocks[j].innerHTML = `
       <h3 class="blocks-tonight">Tonight</h3>
            
            <p class="blocks-date">${window
              .moment(data.list[i].dt * 1000)
              .format("MMMM Do")
              .substring(0, 3)} ${window
            .moment(data.list[i].dt * 1000)
            .format("MMMM Do")
            .slice(9, -2)}</p>
            <img src=http://openweathermap.org/img/wn/${
              data.list[i].weather[0].icon
            }.png class="osadki" alt="" />
            <h1 class="blocks-temp">${Math.floor(
              data.list[i].main.temp - 273
            )}</h1>
            <p class="blocks-cloud">${data.list[i].weather[0].description}</p>
       `;
        } else {
          blocks[j].innerHTML = `
       <h3 class="blocks-tonight">${window
         .moment(data.list[i].dt * 1000)
         .format("dddd")
         .substring(0, 3)}</h3>
            <p class="blocks-date">${window
              .moment(data.list[i].dt * 1000)
              .format("MMMM Do")
              .substring(0, 3)} ${window
            .moment(data.list[i].dt * 1000)
            .format("MMMM Do")
            .slice(9, -2)}</p>
            <img src=http://openweathermap.org/img/wn/${
              data.list[i].weather[0].icon
            }.png class="osadki" alt="" />
            <h1 class="blocks-temp">${Math.floor(
              data.list[i].main.temp - 273
            )}</h1>
            <p class="blocks-cloud">${data.list[i].weather[0].description}</p>
       `;
        }

        j++;
      }
      j = 0;
    } catch (error) {
      console.log(error);
    }
  }
  fivefetch();
  $(".logo-input img").click(() => {
    $("footer").hide();
    async function fivefetch() {
      const city = $(".logo-input input").val();
      const api_key = "21315b2c0670f5f62ad9427e6b6cd4c4";
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`;
      try {
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data);
        if (data.message == "city not found") {
          $("footer").show();
          $(".footer-container").text("");
          $(".footer-container").append(`
        <img src="./images/code404.png" class="footer-img" alt="qwe">
        ${$(".logo-input input").val()} could not be found!
        `);
          $(".main-container").hide();
          $(".main-container").hide();
          $("section").hide();
          $("li").css("pointer-events", "none");
        } else {
          $("li").css("pointer-events", "auto");
        }
        let j = 0;
        // blocks[j].innerHTML = "";
        for (let i = 0; i < data.list.length; i += 8) {
          if (i == 0) {
            blocks[j].innerHTML = `
       <h3 class="blocks-tonight">Tonight</h3>
            <p class="blocks-date">${window
              .moment(data.list[i].dt * 1000)
              .format("MMMM Do")}</p>
            <img src=http://openweathermap.org/img/wn/${
              data.list[i].weather[0].icon
            }.png class="osadki" alt="" />
            <h1 class="blocks-temp">${Math.floor(
              data.list[i].main.temp - 273
            )}</h1>
            <p class="blocks-cloud">${data.list[i].weather[0].description}</p>
       `;
          } else {
            blocks[j].innerHTML = `
       <h3 class="blocks-tonight">${window
         .moment(data.list[i].dt * 1000)
         .format("dddd")
         .substring(0, 3)}</h3>
            <p class="blocks-date">${window
              .moment(data.list[i].dt * 1000)
              .format("MMMM Do")}</p>
            <img src=http://openweathermap.org/img/wn/${
              data.list[i].weather[0].icon
            }.png class="osadki" alt="" />
            <h1 class="blocks-temp">${Math.floor(
              data.list[i].main.temp - 273
            )}</h1>
            <p class="blocks-cloud">${data.list[i].weather[0].description}</p>
       `;
          }

          j++;
        }
        j = 0;
      } catch (error) {
        console.log(error);
      }
    }
    fivefetch();
  });
}

function navigation_list() {
  $("#today").click(() => {
    $(".main-container").show();
    $("section").hide();
    $(".morecast").hide();
  });
  $("#li-days").click(() => {
    $(".main-container").hide();
    $(".five-days").show();
    $(".nearby").hide();
    $(".morecast").show();
  });
  $("#li-nearby").click(() => {
    $(".main-container").hide();
    $("section").hide();
    $(".nearby").show();
    $(".morecast").hide();
  });
}
// }

navigation_list();
