<html>
	<head>
		<title>Twilio and Sendgrid Script</title>
	</head>

	<body>
		<form name="postform" action="TwilioAndSendgrid.php" method="post">
            <label style="margin-left: 15%">Your Name</label>
            <center><input type="text" name="user"></center>
            <label style="margin-left: 15%">Friend's Name</label>
            <center><input type="text" name="name"></center>
            <label style="margin-left: 15%">Phone Number</label>
            <center><input type="text" name="phone"></center>
            <label style="margin-left: 15%">Your Email</label>
            <center><input type="text" name="yremail"></center>
            <label style="margin-left: 15%">Email</label>
            <center><input type="text" name="email"></center>
            <label style="margin-left: 15%">Message</label>
            <center><textarea style="resize: none" rows=5 name="descript"></textarea>
            <p><button style="height:50px; width:130px;" type="submit" class="btn btn-large">Submit</button></p>
        </form>

		<?php
			$user = $_POST['user'];
            $name = $_POST['name'];
            $phone = $_POST['phone'];
            $yremail = $_POST['yremail'];
            $email = $_POST['email'];
            $descript = $_POST['descript'];
            if ($name != "" && $phone != "" && $descript != "" && $email != "")
            {
                /* Send an SMS using Twilio. You can run this file 3 different ways:
                 *
                 * - Save it as sendnotifications.php and at the command line, run 
                 *        php sendnotifications.php
                 *
                 * - Upload it to a web host and load mywebhost.com/sendnotifications.php 
                 *   in a web browser.
                 * - Download a local server like WAMP, MAMP or XAMPP. Point the web root 
                 *   directory to the folder containing this file, and load 
                 *   localhost:8888/sendnotifications.php in a web browser.
                 */
             
                // Step 1: Download the Twilio-PHP library from twilio.com/docs/libraries, 
                // and move it into the folder containing this file.
                require "Services/Twilio.php";
             
                // Step 2: set our AccountSid and AuthToken from www.twilio.com/user/account
                $AccountSid = "ACeca28c70e4a3d5d4bea2e1be2f608876";
                $AuthToken = "474465c0bacbb4f013c39ef1da106cc6";
             
                // Step 3: instantiate a new Twilio Rest Client
                $client = new Services_Twilio($AccountSid, $AuthToken);
             
                // Step 4: make an array of people we know, to send them a message. 
                // Feel free to change/add your own phone number and name here.
                $people = array(
                    $phone => $name,
                );
             
                // Step 5: Loop over all our friends. $number is a phone number above, and 
                // $name is the name next to it
                foreach ($people as $number => $name) {
             
                    $sms = $client->account->sms_messages->create(
             
                    // Step 6: Change the 'From' number below to be a valid Twilio number 
                    // that you've purchased, or the (deprecated) Sandbox number
                        "408-514-5160", 
             
                        // the number we are sending to - Any phone number
                        $number,
             
                        // the sms body
                        "Hey " . $name . ", ". $descript . "\n-From " . $user
                    );
              
                }
            }

            include 'sendgrid-php-master/SendGrid_loader.php';

            $sendgrid = new SendGrid('YeshRam', 'yeshrameshiscool');

            $mail = new SendGrid\Mail();
			$mail->
				addTo($email)->
			  	setFrom($yremail)->
			  	setSubject('Message From ' . $user . ' with TwilioAndSendgrid Script')->
			  	setText($descript)->
			  	setHtml('<strong>' . $descript . '</strong>');

			$sendgrid->
				web->
  					send($mail);
        ?>
	</body>
</html>