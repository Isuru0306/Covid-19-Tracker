<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />

    <!-- bootstrap CDN CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    


    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="static/css/weather-icons-master/css/weather-icons.min.css">

    <title>Covid-Tracker</title>
</head>
<body>

<!-- Primary Navigation -->
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <div class="container"><img src="https://www.pikpng.com/pngl/b/200-2005193_api-api-logo-transparent-clipart.png" alt="logo" srcset="" height="25" width="25"> ---Covid-Tracker---</div>
        
       </a>
   <button class="navbar-toggler" type="button"   aria-label="Toggle navigation">
       
       <div id="mySidenav" class="sidenav">
           <a href="javascript:void(0)" class="closebtn">&times;</a>
           <ul class="navbar-nav m-auto font-rubik">
               <li class="nav-item">
                 <a class="nav-link" href="index.php">Home</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="global_covid.php">Global</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="sri_lanka_covid.php" >Sri Lanka</a>
               </li>
               <li class="nav-item">
              <a class="nav-link" href="weather.php">Weather</a>
           </li>
             </ul>
         </div>
         <span style="font-size:30px;cursor:pointer" onclick="openNavColose(1)">&#9776;</span>
   </button>
   <div class="collapse navbar-collapse" id="navbarText">
       <ul class="navbar-nav m-auto font-rubik">
           <li class="nav-item">
              <a class="nav-link" href="index.php">Home</a>
           </li>
           <li class="nav-item">
              <a class="nav-link" href="global_covid.php">Global</a>
           </li>
           <li class="nav-item">
              <a class="nav-link" href="sri_lanka_covid.php">Sri Lanka</a>
           </li>
           <li class="nav-item">
              <a class="nav-link" href="weather.php">Weather</a>
           </li>
           <li class="nav-item">
              <a class="nav-link" href="login.php">Login</a>
           </li>
         
         </ul>
   </div>
 </nav>          
<!-- !Primary Navigation -->

