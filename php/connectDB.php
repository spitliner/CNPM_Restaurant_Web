<?php
$servername = "localhost";
$database = "pos_system";
$username = "cnpm_web";
$password = "Sx6tH_Z96JnB7z_cjbuJJg=G7cmQ8_-t";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

function getDatabase($cate) {
    $sql = "SELECT * FROM `menu` M, `category_food` C WHERE  M.`id`=C.`id` AND C.`id_cate`=$cate";
    $result = $conn->query($sql);
    return $result
}
//
$result = Array();
while ($arr = mysqli_fetch_assoc($query))
{
    $result[] = $arr;
}
/*
$arr = mysqli_fetch_assoc($query);
echo json_encode($arr);
*/
echo json_encode($result, JSON_UNESCAPED_UNICODE);
mysqli_close($conn);
?>