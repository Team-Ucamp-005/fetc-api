console.log('hola')

const getWeather = async () => {

  // let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Ottawa&appid=616629f9acdc3b22b8b09553e632e5da")
  // const res = await data.json();
  // console.log(res);

  const ciudad = document.getElementById('ciudad').value

  let container = document.getElementById('contain-info')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad === '' ? 'Mexico' : ciudad}&appid=616629f9acdc3b22b8b09553e632e5da`)
    .then(response => response.json())
    .then(res => {
      container.innerHTML = `
        <p>
          ${res.name}
        </p>
        <p>
          ${res.main.temp}
        </p>
      `
    })
}

getWeather()