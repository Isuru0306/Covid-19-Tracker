
<hr>
<div class="container consola testcolor" id="wrapper" >
    
  <div class="container-fluid testcolor" id="current-weather">
    <div class="row">
      
      <!-- Right panel -->
      <div class="col-md-4 col-sm-5">
        <h5><spam id="cityName"></spam>, <spam id="cityCode"></spam></h5>
        <h6 id="localDate"></h6>
        <h5 id="localTime"></h5>
        <a id="refreshButton" href="#"><i class="fa fa-refresh fa-fw" aria-hidden="true"></i> Refresh</a>
      </div>
      
      <!-- Center panel -->
      <div class="col">
        <div class="row zoomweathermain">
          <i class="wi" id ="main-icon" style="font-size: 85px;"></i>
          <div class="text-center ">
            <spam id="mainTemperature"></spam>
            <p  id="tempDescription"></p>
          </div>
          <p style="font-size: 1.5rem;"><a href="#" class="active" id="celcius">°C</a> | <a href="#" id="farenheit">°F</a></p>
        </div>
      </div>
      
      <!-- Left panel -->
      <div class="col-xs-12 col-sm-12 col-md-3 row" style="text-align: right;">
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Humidity: <spam id="humidity"></spam>%</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Wind: <spam id="wind"></spam> m/s</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>High: <spam id="mainTempHot"></spam>°</h6>
        </div>
        <div class="col-md-12 col-sm-3 col-xs-3 side-weather-info">
          <h6>Low: <spam id="mainTempLow"></spam>°</h6>
        </div>
      </div>
      
    </div>
  </div>
  
  <!-- Modal -->
  <div class="modal fade" id="protocol-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <p>Due to weather api restrictions, data can only be shown via HTTP request.</p>
          <p>Sorry for the inconvenience.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  



  
  <!-- 4 days forecast -->
  <div class="container-fluid">
    <div class="row" >
      
      <!-- Day 1 -->
      <div class="col day-weather-box">
        <div class="col day-weather-inner-box zoom">
          <div class="col forecast-main">
            <p id="forecast-day-1-name"></p>
            <div class="row">
              <h5 id="forecast-day-1-main"></h5>
              <i class="wi forecast-icon" id="forecast-day-1-icon"></i>
            </div>
          </div>
          <div class="col forecast-min-low text-center">
            <p class="high-temperature">H-<spam  id="forecast-day-1-ht"></spam>°C</p>
            <p class="low-temperature">L-<spam  id="forecast-day-1-lt"></spam>°C</p>
          </div>
        </div>
      </div>
      
      <!-- Day 2 -->
      <div class="col day-weather-box ">
        <div class="col day-weather-inner-box zoom">
          <div class="col forecast-main">
            <p id="forecast-day-2-name"></p>
            <div class="row">
              <h5 id="forecast-day-2-main"></h5>
              <i class="wi forecast-icon" id="forecast-day-2-icon"></i>
            </div>
          </div>
          <div class="col forecast-min-low ">
          <p class="high-temperature">H-<spam  id="forecast-day-2-ht"></spam>°C</p>
            <p class="low-temperature">L-<spam  id="forecast-day-2-lt"></spam>°C</p>
          </div>
        </div>
      </div>
      
      <!-- Day 3 -->
      <div class="col day-weather-box">
        <div class="col day-weather-inner-box zoom">
          <div class="col forecast-main">
            <p id="forecast-day-3-name"></p>
            <div class="row">
              <h5 id="forecast-day-3-main"></h5>
              <i class="wi forecast-icon" id="forecast-day-3-icon"></i>
            </div>
          </div>
          <div class="col forecast-min-low">
            <p class="high-temperature">H-<spam  id="forecast-day-3-ht"></spam>°C</p>
            <p class="low-temperature">L-<spam  id="forecast-day-3-lt"></spam>°C</p>
          </div>
        </div>
      </div>
      
      <!-- Day 4 -->
      <div class="col day-weather-box">
        <div class="col day-weather-inner-box zoom">
          <div class="col forecast-main">
            <p id="forecast-day-4-name"></p>
            <div class="row">
              <h5 id="forecast-day-4-main"></h5>
              <i class="wi forecast-icon" id="forecast-day-4-icon"></i>
            </div>
          </div>
          <div class="col forecast-min-low">
            <p class="high-temperature">H-<spam  id="forecast-day-4-ht"></spam>°C</p>
            <p class="low-temperature">L-<spam  id="forecast-day-4-lt"></spam>°C</p>
          </div>
        </div>
      </div>

         <!-- Day 5 -->
         <div class="col day-weather-box">
        <div class="col day-weather-inner-box zoom">
          <div class="col forecast-main">
            <p id="forecast-day-5-name"></p>
            <div class="row">
              <h5 id="forecast-day-5-main"></h5>
              <i class="wi forecast-icon" id="forecast-day-5-icon"></i>
            </div>
          </div>
          <div class="col forecast-min-low">
            <p class="high-temperature">H-<spam  id="forecast-day-5-ht"></spam>°C</p>
            <p class="low-temperature">L-<spam  id="forecast-day-5-lt"></spam>°C</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
