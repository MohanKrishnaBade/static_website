<?php
/**
 * Created by PhpStorm.
 * User: mohankrishnareddybade
 * Date: 3/24/17
 * Time: 3:32 PM
 */

$a=$b=$c=$d="null";
$a=$_POST['userName'];
$b=$_POST['lastName'];
$c=$_POST['email1'];
$d=$_POST['password1'];
$e=$_POST['password2'];
$fb=mysqli_connect('localhost:8889','root','root','Gre_Batch_Data');
if(empty($a)||empty($b)||empty($c)||empty($d)){
    echo"you need to some access perission";
    echo"<br/>";
    echo"must enter something";
}else{
    $sql = "INSERT INTO data (Firstname, Lastname, Email, Password)
VALUES ('$a', '$b', '$c','$d')";

    $query= mysqli_query($fb,$sql);
    $mohan="select* from data";
    $query1= mysqli_query($fb,$mohan);
    $resultset = mysqli_fetch_all($query1, MYSQLI_ASSOC);

    echo '<table border="3" style="color: green" align="center" width="57%" text-align="center">
	<tr>
		<th><strong>ID</strong></th>
		<th><strong>FNAME</strong></th>
		<th><strong>LNAME</strong></th>
		<th><strong>email</strong></th>
		<th><strong>password</strong></th>
		<th><strong>DATE</strong></th>
	</tr>';
    if( count($resultset) >0) {
        foreach ($resultset as $key => $value) {
            echo '<tr>
			<td>'.$value["id"].'</td>
			<td>'.$value["Firstname"].'</td>
			<td>'.$value["Lastname"].'</td>
			<td>'.$value["Email"].'</td>
			<td>'.$value["Password"].'</td>
			<td>'.$value["date"].'</td>

		</tr>';
        }
    }
    echo '</table>';

}

mysqli_close($fb);


?>

<a href="index.html">back to login page</a>