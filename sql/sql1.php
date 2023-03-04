<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=ISO-8859-1");

$conn = new mysqli("localhost", "root", "lastborn231", "test1_db");
$result = $conn->query("SELECT CompanyName, City, Country FROM companies");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
    $outp .= '"City":"'   . $rs["City"]        . '",';
    $outp .= '"Country":"'. $rs["Country"]     . '"}';
}
$outp = '{"records": ['.$outp.']}';
$conn->close();

echo($outp);
?>