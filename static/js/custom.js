function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    weather();
  }

 

  // var url = 'https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data: {labels:[20119,2020,2021,2022,2023],datasets:[{label:%27covid_case%27,data:[120,60,50,180,120]}]}}';