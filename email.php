<?php
if($_POST) {

	// Enter the email where you want to receive the message
	$emailTo = 'murinskii@gmail.com';
	$subject = 'New Client';

	$name  = addslashes(trim($_POST['name']));
	$email = addslashes(trim($_POST['email']));
	$message = addslashes(trim($_POST['message']));

	// If all values exist, send the email
	if ( $name && $email && $message ) {
		// Send email
		$headers = "From: " . $name . " <" . $email . ">" . "\r\n" ;
		mail($emailTo, $subject , $message, $headers);
	}
}
