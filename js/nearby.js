const array = [...$(".block-nearby")];

const api_key_ = "21315b2c0670f5f62ad9427e6b6cd4c4";
const _city = ["Tashkent", "Bali", "New York", "Tokyo"];

for (let i = 0; i < _city.length; i++) {
  const _url = `http://api.openweathermap.org/data/2.5/forecast?q=${_city[i]}&appid=${api_key_}`;
  async function nearby_() {
    const responce = await fetch(_url);
    const data = await responce.json();
    console.log(data);
    try {
      array[i].innerHTML = `
            <p>${_city[i]}</p>
            <div style="display:flex; align-items:center; padding:0">
            <img alt="zdes" src=http://openweathermap.org/img/wn/${
              data.list[i].weather[0].icon
            }.png
            <p>${Math.floor(data.list[i].main.temp - 273)} ℃</p>
            </div>
            `;
    } catch (error) {}
  }
  nearby_();
}
