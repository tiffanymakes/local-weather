$(document).ready(function(){
  // declare global variables
  var ip;
  var lat;
  var lon;
  var api;
  // get client IP data
  // Modified: http://ip-api.com/json can't be accessed over HTTPS
  $.getJSON ('https://ipapi.co/json', function (data){
    ip = data.ip;
    lat = data.latitude;
    lon = data.longitude;
    console.log(lat+" "+lon);
    // add lat and long to api variable
    // Use cors-anywhere to do HTTPS request
    api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=7f842c1177a1806b57342c903d207ffc'; 
    // Open Weather Map API
    //converted main.temp from K to C to F and used .fromCharCode() method to get degree symbol and toFixed() to specify decimal places
  $.getJSON(api, function(data){
    console.log(api);
    console.log(data);
    var city = data.name;      
    var cTemp = data.main.temp-273.15;
    var fTemp = cTemp*(9/5)+32;
    $('#city').text(city);        
    $('#celsius').text(cTemp.toFixed(0) + ' ' + String.fromCharCode(176) + 'C');
    $('#fahrenheit').text(fTemp.toFixed(0) + ' ' + String.fromCharCode(176) + 'F');
    $('#condition').text(data.weather[0].description);
    // change background based on weather conditions
    // refer to icons from https://openweathermap.org/weather-conditions
    console.log(data.weather[0].icon);
    var weatherIcon = data.weather[0].icon;
    switch (weatherIcon) {
      case '01d':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/273757/pexels-photo-273757.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '01n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/81310/pexels-photo-81310.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '02d':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/261515/pexels-photo-261515.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '02n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/577289/pexels-photo-577289.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '03d':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '03n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/239107/pexels-photo-239107.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;  
      case '04d':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/141876/pexels-photo-141876.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '04n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/416920/pexels-photo-416920.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;  
      case '09d':
        //rain
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/69927/rain-floor-water-wet-69927.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '09n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/69927/rain-floor-water-wet-69927.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;  
      case '10d':
        //rain
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/1553/glass-rainy-car-rain.jpg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '10n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/268787/pexels-photo-268787.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '11d':
        //storm
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/56614/lightning-storm-night-firebird-56614.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '11n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/56614/lightning-storm-night-firebird-56614.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '13d':
        //snow
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/688660/pexels-photo-688660.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '13n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/280204/pexels-photo-280204.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '50d':
        //fog
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      case '50n':
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg") no-repeat fixed center', 'background-size': 'cover'});
        break;
      default:
        $('body').css({'background': '#ffffff url("https://static.pexels.com/photos/125457/pexels-photo-125457.jpeg") no-repeat fixed center', 'background-size': 'cover'});
        }; // close background switch statement
      }); // close Open Weather Map API       
  }); // close client IP data
    // toggle() between celsius and fahrenheit
  //on text click
  $('#fahrenheit').hide();
  $('#celsius, #fahrenheit').on(
  'click',
  function() 
  {
  $('#celsius, #fahrenheit').toggle()
  }
);
  // on button click
  $('#toggle').on(
  'click',
  function() 
  {
  $('#celsius, #fahrenheit').toggle()
  }
);
});