
// Maps the API's icons to the ones from https://erikflowers.github.io/weather-icons/
var weatherIconsMap = {
    "01d": "wi-day-sunny",
    "01n": "wi-night-clear",
    "02d": "wi-day-cloudy",
    "02n": "wi-night-cloudy",
    "03d": "wi-cloud",
    "03n": "wi-cloud",
    "04d": "wi-cloudy",
    "04n": "wi-cloudy",
    "09d": "wi-showers",
    "09n": "wi-showers",
    "10d": "wi-day-hail",
    "10n": "wi-night-hail",
    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",
    "13d": "wi-snow",
    "13n": "wi-snow",
    "50d": "wi-fog",
    "50n": "wi-fog"
  };
  
  $(function(){
    getClientPosition();
    startClock();  
  });
   
  function startClock(){
    setInterval(function(){
      $("#localTime").text(new Date().toLocaleTimeString());
    }, 1000);
  }
  function getClientPosition(){
    $.getJSON("https://ipapi.co/json/", function(position) {
      $("#cityName").text(position.country_capital);
      $("#cityCode").text(position.country);
      
      getWeatherData(position.country_capital, position.country);
    });
  }
  
  function getWeatherData(city, country){
   
      
      var url ="http://api.openweathermap.org/data/2.5/forecast?q="+ city +","+country+"&APPID=6fbf3d490ccc6ad3518dac15ad1d3d92";
      $.getJSON(url, function(data) {
      
          // console.log(data);
          updateForecast(data);
          weaterforcast(data);
    });
  
  }

  // Update view values from passed forecast
  function updateForecast(forecast){
  
    // Present day
    var today = forecast.list[0];
    // console.log(today);
  
    $("#tempDescription").text(toCamelCase(today['weather'][0]['description']));
    $("#humidity").text(today['main']['humidity']);
    $("#wind").text(today['wind']['speed']);
    $("#localDate").text(getFormattedDate(today['dt']));
    $("#main-icon").addClass(weatherIconsMap[today['weather'][0].icon]);
    $("#mainTemperature").text(toCelcius(today['main']['temp']));
    $("#mainTempHot").text(toCelcius(today['main']['temp_max']));
    $("#mainTempLow").text(toCelcius(today['main']['temp_min']));
  
  
  //   // Following days data
      var dayName = getFormattedDate(forecast.list[0]['dt']).substring(0,3);
      var j =1;
    for(var i = 1; i < (forecast.list).length; i++){
      var day = forecast.list[i];
      // console.log(day);
  
  //     // Day short format e.g. Mon
      if(dayName != getFormattedDate(day.dt).substring(0,3)){
          var dayName = getFormattedDate(day.dt).substring(0,3);
          $("#forecast-day-" + j + "-name").text(dayName);
          var weatherIcon = weatherIconsMap[day.weather[0].icon];
          $("#forecast-day-" + j + "-icon").addClass(weatherIcon);
          $("#forecast-day-" + j + "-main").text(toCelcius(day['main']['temp']));
          $("#forecast-day-" + j + "-ht").text(toCelcius(day['main']['temp_max']));
          $("#forecast-day-" + j + "-lt").text(toCelcius(day['main']['temp_min']));
          j++;
      }
     
    }
  
  
  }
  
  // // Applies the following format to date: WeekDay, Month Day, Year
  function getFormattedDate(date){
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date * 1000).toLocaleDateString("en-US",options);
  }
  
  // // Formats the text to CamelCase
  function toCamelCase(str) {
    var arr = str.split(" ").map(
      function(sentence){
        return sentence.charAt(0).toUpperCase() + sentence.substring(1);
      }
    );
    return arr.join(" ");
  }
  
  // // Converts to Celcius
  function toCelcius(val){
    return Math.floor((((( val - 273.15) * 9/5) + 32) - 32) * (5/9));
  }
  


  function weaterforcast(forcast){
      // console.log(forcast);

      

      var weater_forcast = [];
    // console.log(response);

    var i=0;
    for(i=0;i<(forcast.list).length; i++ ){
      var data = forcast['list'][i];
        
      weater_forcast += '<tr class="table-row-zoom">';
      weater_forcast += '<td>'+ data['dt_txt'] + '</td>' ;
      weater_forcast += '<td>'+ getFormattedDate(data.dt).substring(0,3); + '</td>' ;
      weater_forcast += '<td>'+ data['main']['humidity'] + '</td>' ;
      weater_forcast += '<td>'+ toCelcius(data['main']['temp']);  + 'c°</td>' ;
      weater_forcast += '<td>'+ toCelcius(data['main']['temp_max'])  + 'c°</td>' ;
      weater_forcast += '<td>'+ toCelcius(data['main']['temp_min'])  + 'c°</td>' ;
      weater_forcast += '<td>'+ toCamelCase(data['weather'][0]['description'])  + '</td>' ;

      var weatherIcon = weatherIconsMap[data.weather[0].icon];
      weater_forcast += '<td><i class="wi '+weatherIcon+'"></i> </td>' ;
      weater_forcast += '<td>'+ data['weather'][0]['main']+ '</td>' ;
      weater_forcast += '</tr>';


    }

    $('.weather-forcast').append(weater_forcast);
      
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  $(document).ready(function(){

    var url = "https://www.hpb.health.gov.lk/api/get-current-statistical";
    $.getJSON(url, function(data) {
            
        // console.log(data);
        var local_active_cases = data['data']['local_active_cases'];
        var local_deaths = data['data']['local_deaths'];
        var local_new_cases = data['data']['local_new_cases'];
        var local_new_deaths = data['data']['local_new_deaths'];
        var local_recovered = data['data']['local_recovered'];
        var local_total_cases = data['data']['local_total_cases'];
        var total_antigen_testing_count = data['data']['total_antigen_testing_count'];
        var total_pcr_testing_count = data['data']['total_pcr_testing_count'];  

      // var sri_lanka_covid_barchart = "https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:"+ 
      // "{labels:['total_cases','active_cases','new_cases','recovered','new_deaths','deaths','antigen_testing','pcr_testing'],"+
      // "datasets:[{label:%27COVID_CASES%27,"+
      // "data:["+local_total_cases +","+local_active_cases+","+local_new_cases+","+local_recovered+","+local_new_deaths+","+
      // local_deaths+","+total_antigen_testing_count+","+total_pcr_testing_count+"]}]}}";


      // var piecart = "https://quickchart.io/chart?c={type:'pie',data:"+
      // "{labels:['total_cases','active_cases','new_cases'],"+
      //  "datasets:[{data:["+local_total_cases +","+local_active_cases+","+local_new_cases+"]}]}}";


      //  $(".barchart-srilanka-covid").html('<img src="' +piecart + ' "  width="400px" height= "250px" />');
 
      // console.log(piecart);
      // console.log(sri_lanka_covid_barchart);
        // console.log(local_active_cases);
        // console.log(local_deaths);
        // console.log(local_new_cases);
        // console.log(local_new_deaths);
        // console.log(local_recovered);
        // console.log(local_total_cases);
        // console.log(total_antigen_testing_count);
        // console.log(total_pcr_testing_count);

        
        $('.last_update').text(data['data']['update_date_time'])

        $('.local_total_cases').each(function() {
            var $this = $(this),
                countTo = local_total_cases;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });

          $('.local_active_cases').each(function() {
            var $this = $(this),
                countTo = local_active_cases;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });

          $('.local_new_cases').each(function() {
            var $this = $(this),
                countTo = local_new_cases;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });


          $('.local_recovered').each(function() {
            var $this = $(this),
                countTo = local_recovered;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });

          $('.total_antigen_testing_count').each(function() {
            var $this = $(this),
                countTo = total_antigen_testing_count;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });


          $('.total_pcr_testing_count').each(function() {
            var $this = $(this),
                countTo = total_pcr_testing_count;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });

          $('.local_new_deaths').each(function() {
            var $this = $(this),
                countTo = local_new_deaths;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });

          $('.local_deaths').each(function() {
            var $this = $(this),
                countTo = local_deaths;
            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 8000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });              
          });







    });
  })


  ////////////////////////////////////////////////////////////////////////////////////////


  const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "58eb4d9b4dmsh14274a94e28b480p1147aejsne335bedda88c",
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
  

    $('.global_last_update').text(response['statistic_taken_at']);
    var active_cases = response['world_total']['active_cases'];
    var new_cases = response['world_total']['new_cases'];
    var new_deaths = response['world_total']['new_deaths'];
    var serious_critical = response['world_total']['serious_critical'];
    var total_cases = response['world_total']['total_cases'];
    var total_deaths = response['world_total']['total_deaths'];
    var total_recovered = response['world_total']['total_recovered'];

    // console.log(active_cases);
    // console.log(new_cases);
    // console.log(new_deaths);
    // console.log(serious_critical);
    // console.log(total_cases);
    // console.log(total_deaths);
    // console.log(total_recovered);


    function replcing(value){
        return value.replace(/[,]+/g, '')
    }
  

    $('.Global_Total_Patients').each(function() {
        var $this = $(this),
            countTo = replcing(total_cases);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });

      $('.Active_Cases').each(function() {
        var $this = $(this),
            countTo = replcing(active_cases);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });

      $('.global_new_cases').each(function() {
        var $this = $(this),
            countTo = replcing(new_cases);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });

      $('.Global_Recovered').each(function() {
        var $this = $(this),
            countTo = replcing(total_recovered);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });


      $('.serious_critical').each(function() {
        var $this = $(this),
            countTo = replcing(serious_critical);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });


      $('.Global_New_Deaths').each(function() {
        var $this = $(this),
            countTo = replcing(new_deaths);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });

      $('.Global_Deaths').each(function() {
        var $this = $(this),
            countTo = replcing(total_deaths);
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 8000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });              
      });





});