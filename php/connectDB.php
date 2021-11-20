<?php
$servername = "localhost:8000";
$database = "pos_system";
$username = "cnpm_web";
$password = "Sx6tH_Z96JnB7z_cjbuJJg=G7cmQ8_-t";

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_POST["x"], false);

$conn = new mysqli($servername, $username, $password, $dbname);
$stmt = $conn->prepare("SELECT `name` as name_item,`name-eng` as name_eng,`img` as img,`price` as price,`description` as desc_item
                        FROM `menu`, `category_food`
                        WHERE  `menu`.`id` = `category_food`.`id` AND `category_food`.`id_cate`= ?");
$stmt->bind_param("s", $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
?>