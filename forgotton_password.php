<?php
include("adb.php");

class forgot extends adb(){
	function forgottenPassword(){
 	$select ="SELECT password, firstName, email from admin WHERE email='$email'";
 	$mail=$_REQUEST['email'];
 	$row= $this->query($select);
 	while($row){
 		$password=$row['password'];
 		$email=$row['email'];
 		$name=$row['firstName'];
 		if($email==$mail){
 			$from="Hostel Manager";
 			$to=$email;
 			$subject="Forgotten password";
 			$body="Dear $name your password is. $row['password']";


 		}
 		else{
 			echo "incorrect mail";
 		}

 	}



 }
}

?>