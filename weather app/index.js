
const apiKey = "9e4a9b74b1dbc16b29cd67e1e758c12e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=bangalore";

async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = awit response.json();

  console.log(data)
}


checkWeather()