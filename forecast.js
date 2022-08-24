let forecast = {
    openWeatherKey: 'bc5da231624367ff2ddd2e1cadaaa586',
    fiveDay: function(location){
        fetch(
            "http://api.openweathermap.org/data/2.5/forecast?q=" + location + "&exclude=hourly,minutely,current,alerts&appid=" + this.openWeatherKey + "&units=imperial"
        ).then((response) => response.json())
        .then((data) => this.forecastInfo(data))
    },
    forecastInfo: function(data) {
        //FIRST DAY
        
        const date1 = data.list[8].dt_txt; 
        const temp51 = data.list[8].main.temp;
        const humidity51 = data.list[8].main.humidity;
        const speed51 = data.list[8].wind.speed;

        document.querySelector(".dateFirst").innerText = date1;
        document.querySelector(".forecastTempFirst").innerText = "temperature: " + temp51 + "°F";
        document.querySelector(".forecastWindFirst").innerText = "wind speed: " + speed51 + "mph";
        document.querySelector(".forecastHumidityFirst").innerText = "humidity: " + humidity51 + "%";

        //SECOND DAY
        
        const date2 = data.list[16].dt_txt; 
        const temp52 = data.list[16].main.temp;
        const humidity52 = data.list[16].main.humidity;
        const speed52 = data.list[16].wind.speed;

        document.querySelector(".dateSecond").innerText = date2;
        document.querySelector(".forecastTempSecond").innerText = "temperature: " + temp52 + "°F";
        document.querySelector(".forecastWindSecond").innerText = "wind speed: " + speed52 + "mph";
        document.querySelector(".forecastHumiditySecond").innerText = "humidity: " + humidity52 + "%";


        //THIRD DAY
        
        const date3 = data.list[3].dt_txt; 
        const temp53 = data.list[3].main.temp;
        const humidity53 = data.list[3].main.humidity;
        const speed53 = data.list[3].wind.speed;

        document.querySelector(".dateThird").innerText = date3;
        document.querySelector(".forecastTempThird").innerText = "temperature: " + temp53 + "°F";
        document.querySelector(".forecastWindThird").innerText = "wind speed: " + speed53 + "mph";
        document.querySelector(".forecastHumidityThird").innerText = "humidity: " + humidity53 + "%";

        //FORTH DAY
        
        const date4 = data.list[4].dt_txt; 
        const temp54 = data.list[4].main.temp;
        const humidity54 = data.list[4].main.humidity;
        const speed54 = data.list[4].wind.speed;

        document.querySelector(".dateForth").innerText = date4;
        document.querySelector(".forecastTempForth").innerText = "temperature: " + temp54 + "°F";
        document.querySelector(".forecastWindForth").innerText = "wind speed: " + speed54 + "mph";
        document.querySelector(".forecastHumidityForth").innerText = "humidity: " + humidity54 + "%";

        //FIFTH DAY
        
        const date5 = data.list[5].dt_txt; 
        const temp55 = data.list[5].main.temp;
        const humidity55 = data.list[5].main.humidity;
        const speed55 = data.list[5].wind.speed;

        document.querySelector(".dateFifth").innerText = date5;
        document.querySelector(".forecastTempFifth").innerText = "temperature: " + temp55 + "°F";
        document.querySelector(".forecastWindFifth").innerText = "wind speed: " + speed55 + "mph";
        document.querySelector(".forecastHumidityFifth").innerText = "humidity: " + humidity55 + "%";

              
    },
    search: function() {
        this.fiveDay(document.querySelector(".search").value);
    }
};

document.querySelector("#search").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        forecast.search();
    }
});
