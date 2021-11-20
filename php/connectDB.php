<?php
$servername = "127.0.0.1:5500";
$database = "pos_system";
$username = "cnpm_web";
$password = "Sx6tH_Z96JnB7z_cjbuJJg=G7cmQ8_-t";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$cate = $_POST['cate'];
function fetch_data($cate){
    global $db;
        $query="
            SELECT `name`,`name-eng`,`img`,`price`,`description`
            FROM `menu`, `category_food`
            WHERE  `menu`.`id` = `category_food`.`id` AND `category_food`.`id_cate`=$cate";
        $exec=mysqli_query($db, $query);
        if(mysqli_num_rows($exec)>0){
            $row= mysqli_fetch_all($exec, MYSQLI_ASSOC);
            return $row;  
        }else{
            return $row=[];
        }
}
$fetchData= fetch_data($cate);
getMenu($fetchData);
function getMenu($fetchData) {
  foreach($fetchData as $data) {
    echo '
<div class="main-product" >
    <div class="open-mini-zone">
        <div class="img-product">
            <img class="img-prd" src="'.$data[`img`].'" alt="">
        </div>
        <div class="content-product">
            <h3 class="content-product-h3">'.$data[`name`].'</h3>
            <span class="content-product-des">'.$data[`name-eng`].'</span>
        </div>
    </div>
    <div class="content-product-deltals">
        <span class="price">'.$data[`price`].'</span>
        <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
    </div>
</div > 
    '
  }
}
// function getMiniZone($cate) {

// }
?>