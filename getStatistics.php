
<?php
include('dbFunctions.php');

$statistics = Array();

//SQL 
$query = "SELECT * FROM statistics order by id";
$result = mysqli_query($link,$query);

while($row = mysqli_fetch_assoc($result)){
    $statistics[] = $row;
}

echo json_encode($statistics);
?>


