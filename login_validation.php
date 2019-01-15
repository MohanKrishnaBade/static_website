<?php



$email=$_POST['email'];
$password=$_POST['password'];
$fb=mysqli_connect('localhost:8889','root','root','Gre_Batch_Data');

    $check="select * from data where Email='$email'and Password='$password'";
    $result=mysqli_query($fb,$check);
    $resultset = mysqli_fetch_all($result, MYSQLI_ASSOC);
 if(isset($email)&&isset($password)){
        foreach ($resultset as $key => $value) {

            if($value["Email"]=$email && $value["Password"]=$password){
                echo "welcome back ".$value["Firstname"];
            }else{
                echo"failed to login";
            }

        }
    }



?>