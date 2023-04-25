<?php
// Check for form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	// Get form data
	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	
	// Set up email headers
	$to = "yadvirkaur@gmail.com";
	$subject = "Message from Yadvir's Portfolio";
	$headers = "From: " . $email . "\r\n";
	
	// Build email message
	$email_message = "Name: " . $name . "\n";
	$email_message .= "Email: " . $email . "\n";
	$email_message .= "Message: \n" . $message . "\n";
	
	// Send email
	if (mail($to, $subject, $email_message, $headers)) {
		echo "Thank you for your message!";
	} else {
		echo "Oops! Something went wrong.";
	}
}
?>
