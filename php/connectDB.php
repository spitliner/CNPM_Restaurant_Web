<?php
$servername = "localhost";
$database = "pos_system";
$username = "cnpm_web";
$password = "Sx6tH_Z96JnB7z_cjbuJJg=G7cmQ8_-t";

// Create connection

// $conn = mysqli_connect($servername, $username, $password, $database);

// $sql = "SELECT mm.id as id, mm.name as name, mm.name_eng as name_eng, mm.price as price, mm.desciption as desciption, mm.img as img, c.name as categoryFROM menu as mm INNER JOIN category c ON c.id = mm.id INNER JOIN category_food cf ON c.id = cf.id_cate order by mm.id;";

// $query = mysqli_query($conn, $sql);

//mysqli_stmt_bind_result($query, $query_result);
$conn = new mysqli($servername, $username, $password, $dbname);
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