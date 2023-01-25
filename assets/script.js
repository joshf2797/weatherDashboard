var owmAPI = "5930816b7ab69a5a9b93e8fa1e48ab05";
let weatherData = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + owmAPI;
    fetch(weatherData)
    // .then(handleErrors)
    .then((response) => {
        return response.json();
    })
    console.log(response);