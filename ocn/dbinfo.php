<?php
$host = "localhost";
$user = "summer0207"; 
$pwd = "summer0824!";
$dbname = "summer0207";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>