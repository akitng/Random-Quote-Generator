
function getDate() {
  var months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateNow = new Date();
  var yearNow = dateNow.getFullYear();
  var monthNow = months[dateNow.getMonth()];
  var dayNow = dateNow.getDate();
  var today = monthNow + " " + dayNow + "," + " " + yearNow;
  $('#date').html(today); // today's date
}

function getTime() {
  var timeNow = new Date();
  var hourNow = timeNow.getHours();
  var minuteNow = timeNow.getMinutes();
  // I want the minutes to show the zero in front of single digits (i.e. 10:09 instead of 10:9)
  if (minuteNow < 10) {
    nowMinute = "0" + nowMinute;
  }
  // I want the time to be based on 12 hour clock and have AM or PM attached to the time
  if (hourNow > 12) {
    hourNow -+ 12;
    var time = hourNow + ":" + minuteNow + " " + "PM";
  }
  else {
    var time = hourNow + ":" + minuteNow + " " + "AM";
  }

  $('#time').html(time); // the time right now
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
              $('#description').html(response.weather[0].description);  // weather description
              $('#humidity').html("Humidity: " + response.main.humidity + "%");  //humidity

              // this switch statement links the weather code to it's corresponding icon
              switch(response.weather[0].icon)
              {
                case "01d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/01d.png');
                  break;
                case "01n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/01n.png');
                  break;
                case "02d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/02d.png');
                  break;
                case "02n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/02n.png');
                  break;
                case "03d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/03d.png');
                  break;
                case "03n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/03n.png');
                  break;
                case "04d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/04d.png');
                  break;
                case "04n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/04n.png');
                  break;
                case "09d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/09d.png');
                  break;
                case "09n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/09n.png');
                  break;
                case "10d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/10d.png');
                  break;
                case "10n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/10n.png');
                  break;
                case "11d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/11d.png');
                  break;
                case "11n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/11n.png');
                  break;
                case "13d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/13d.png');
                  break;
                case "13n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/13n.png');
                  break;
                case "50d":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/50d.png');
                  break;
                case "50n":
                  $('#weathericon').attr('src', 'http://openweathermap.org/img/w/50n.png');
                  break;
                default:
                  break;
              }


              // Users of open weather API have commented that using the imperial parameter
              // is glitchy.  In light of that I have ajax requesting the
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
                return tempInFaren;
              })();

              

          }
        });

    }
}

$(document).ready(function() {
    getDate();
    getTime();
    getWeather();
});
