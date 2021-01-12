<?php
include('dbFunctions.php');

$cat_id = $_GET['id'];
$statistics = Array();

//SQL 
$query = "SELECT * FROM statistics WHERE id = $cat_id";
$result = mysqli_query($link,$query);

while($row = mysqli_fetch_assoc($result)){
    $statistics[] = $row;
}

echo json_encode($statistics);
?>


