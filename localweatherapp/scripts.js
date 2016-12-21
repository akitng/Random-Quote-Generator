// API key: 79f640b08c9c9854b4d540d9b8219209
//   url: "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=79f640b08c9c9854b4d540d9b8219209",


$(document).ready(function() {
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          console.log("Geolocation is not supported by this browser.");
      }
  }
  function showPosition(position) {
    var x = position.coords.latitude;
    var y = position.coords.longitude;
    return x.toString;
    return y.toString;
  }
/*
    var getWeather = function() {
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather/?lat=" + x + "lon=" + y + "&units=imperial&APPID=79f640b08c9c9854b4d540d9b8219209",
        success: function(response) {
          console.log(response);
          }
        });
      }
*/
getLocation();
//getWeather();


});
