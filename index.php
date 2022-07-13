<?php
    ob_start();
    include ("header.php");
?>

<main>



<?php

include('templates/_weather_all.php');

include ("templates/home.php");

?>




</main>


<?php
    include("footer.php");
?>