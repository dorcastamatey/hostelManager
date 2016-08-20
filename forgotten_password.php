<?php
include("adb.php");
require 'PHPMailer/PHPMailerAutoload.php';

if(isset($_REQUEST['email'])){
 			$mail=$_REQUEST['email'];
$connect =mysql_connect("localhost","root","");

$selection=mysql_select_db("key_management");

 $select ="SELECT password, firstName, email from admin WHERE email='$mail'";
 $row =mysql_query($select);


 	while($result=mysql_fetch_assoc($row)){
 		$password=$result['password'];
 		$email=$result['email'];
 		$name=$result['firstName'];
 		
 		}
 		if($email==$mail){
 			//$pass= echo $password;
 			$mail = new PHPMailer;

			$mail->isSMTP();                            // Set mailer to use SMTP
			$mail->Host = 'smtp.gmail.com';             // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                     // Enable SMTP authentication
			$mail->Username = 'ashesi.hostel.manager@gmail.com';          // SMTP username
			$mail->Password = 'hostelManager2016'; // SMTP password
			$mail->SMTPSecure = 'tls';                  // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                          // TCP port to connect to

			$mail->setFrom('ashesi.hostel.manager@gmail.com', 'Hostel Manager');
			$mail->addReplyTo('ashesi.hostel.manager@gmail.com', 'Hostel Manager');
			$mail->addAddress($email);   // Add a recipient
			// $mail->addCC('cc@example.com');
			// $mail->addBCC('bcc@example.com');

			$mail->isHTML(true);  // Set email format to HTML
             
			$bodyContent =  '<h1>Password recovery</h1>' ;
			 $bodyContent .= 'Dear' .$name.' Please your password is: <strong><h2>'.$password. '</h2></strong>';

			$mail->Subject = 'Password Recovery';
			$mail->Body    = $bodyContent;

			if(!$mail->send()) {
			    echo 'Message could not be sent.';
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			} else {
				//echo $result['password'];
				//echo $password;
			    echo 'A message has been sent to your email address. Kindly check it up';

			}
 			// $from="From:Hostel@Manager.com";
 			// $to=$email;
 			// $subject="Forgotten password";
 			// $message="Dear $name your password";

 			// mail($to,$subject,$message,$from);
 			// echo "Please check your email";


 		}
 		else{
 			echo "incorrect mail";
 		}

 	}



 else{
 	echo "Please enter your email";
 }

?>