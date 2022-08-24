let weather = {
    openWeatherKey: 'bc5da231624367ff2ddd2e1cadaaa586',
    openWeather: function(location){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + this.openWeatherKey + "&units=imperial"
        ).then((response) => response.json())
        .then((data) => this.weatherInfo(data));
    },
    weatherInfo: function(data) {
        fetch(
            "https://api.openweathermap.org/data/3.0/onecall?lat=" + data.lat + "&lon=" + data.lon + "&appid=" + this.openWeatherKey + "&units=imperial"
        ).then((response) => response.json())
        .then((_data) => {
            console.log(_data)
            const uvIndex = _data.daily.uvi;
            document.querySelector(".uvIndex").innerText = "uv index: " + uvIndex;
        });

        const location = data.name;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        document.querySelector(".location").innerText = location;
        document.querySelector(".temperature").innerText = "temperature: " + temp + "°f";
        document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed: " + speed + "mph"
    },
    search: function() {
        this.openWeather(document.querySelector(".search").value);
    }
};



// ANOTHER
// BLOCK
// TO KEEP
// MY THOUGHTS
// SEPARATED
// LOL

document.querySelector("#search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        weather.search();
        var history = document.createElement("li");
        history.textContent = document.querySelector(".search").value;
        document.getElementById("searchHistory").appendChild(history);
}

});
