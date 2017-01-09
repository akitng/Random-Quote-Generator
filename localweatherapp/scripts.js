
function getDate() {
  var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  var monthNow = months[dateNow.getMonth()];
  var dayNow = dateNow.getDate();
  var today = monthNow + " " + dayNow + "," + " " + yearNow;
  $('#date').html(today); // today's date
}


function getWeather() {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    getLocation();

    function showPosition(position) {
         var lat = (position.coords.latitude).toString();
         var lon = (position.coords.longitude).toString();
         var coordinates = ("lat=" + lat + "&" + "lon=" + lon);
    //coordinates = "lat=42&lon=-87" for morton grove;

        $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather/?" + coordinates + "&APPID=79f640b08c9c9854b4d540d9b8219209",
          dataType: "jsonp",
          success: function(response) {
            console.log(response);


            // Iterate through object to get weather info
            function Iterate(obj) {
              for (prop in obj) {
                if (obj.hasOwnProperty(prop) && isNaN(prop)) {
                  console.log(prop + ': ' + obj[prop]);  // this is just a check in the console
                  Iterate(obj[prop]);
                  }
                }
            }

              // this is just a check in the console
              console.log("name: " + response.name);
              console.log("main.temp: " + response.main.temp);
              console.log("main.humidity: " + response.main.humidity);
              console.log("windspeed" + response.wind.speed);

              // using jQuery to find and replace html elements with weather info
              $('#city').html(response.name);  // city name
              $('#description').html(response.weather[0].description);  //short weather description

              // this function links the weather code to it's corresponding icon
                function getIcon() {
                  if (response.weather[0].icon === "01d") {
                    $('#weathericon').attr('src', '/icons/01d.png');
                    //  $('#weathericon').html(icons/01d.png);
                  }

                }




              $('#humidity').html("Humidity: " + response.main.humidity + "%");

              // Users of open weather API have commented that using the imperial parameter
              // is glitchy.  In light of that, I have ajax requesting the
              // wind speed in meters/second.  This function converts the speed
              // to miles/per hour
              (function convertWindSpeed() {
                var imperialSpeed = Math.round(response.wind.speed * 3600 / 1609.34)
                $('#windspeed').html("Wind: " + imperialSpeed + " " + "mph");
              })();



              // Users of open weather API have commented that using the imperial parameter to get
              // the temperature in farenheit is glitchy.  In light of that, ajax is requesting the
              // temperature in Kelvin and this function will convert it to farenheit.
              (function convertTemp() {
                var tempInFaren = Math.round(1.8 * (response.main.temp - 273) + 32);
                $('#temp').html(tempInFaren);
              })();



          }
        });

    }
}

$(document).ready(function() {
    getDate();
    getWeather();
});
