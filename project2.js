$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=Columbus&units=imperial&APPID=25e65cd6afc954f39118548e333d3011",
    function (data) {
        console.log(data);

        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        var weather = data.weather[0].main;
        var temp = Math.floor(data.main.temp);


        $(".icon").attr('src', icon);
        $(".weather").append(weather);
        $(".temp").append(temp);

    }
)