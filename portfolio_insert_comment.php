<?php 
require 'portfolio_dbconnect.php';

$name = $_POST["name"];
$email = $_POST["email"];
$role = $_POST["role"];
$school = $_POST["school"];
$comment = $_POST["comment"];

$sql = "INSERT INTO portfolio_comment(full_name,email,my_role,school,comment) VALUES('$name','$email','$role','$school','$comment')";
$result = mysqli_query($connect,$sql);

if($result){
    echo '<script language="javascript">'; 
    echo 'alert("ขอบคุณสำหรับความคิดเห็นและข้อเสนอแนะ"); location.href="index.php#comment"'; 
    echo '</script>';
}else{
    echo mysqli_error($connect);
}  
?>
