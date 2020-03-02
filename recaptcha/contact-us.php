<?php
/**
 * Contact-us page
 * @package  FASTnEASY Taxes
 * @author   Bala
 * @todo Notes,
*/

	require_once ("includes/common.inc.php");	 
	require_once (CLASS_PATH."FormBuilder.php"); //to build security que field
	require_once(CLASS_PATH.'Response.php');

	//filter request array
	$req_data = cleanInputArray($_REQUEST);	

	if(isset($req_data['email']))  
	{
 		$to = "support@fastneasytax.com" ; // receivers address
		$subject = $req_data['subject'] ;  // your subject
  
  		$header = "From: ".$req_data['email'] ; 
		$message = $req_data['description'] ;  // your message

		if(mail($to, "Subject: $subject", $message, $header))
			$msg = "Mail sent successfully " ;
		else
			$msg = "Mail not sent successfully " ; 	
	}	
	$smarty->assign('title','Income Tax Canada Inquiry - Contact us');
	$smarty->assign('message', $msg);
	$smarty->clear_cache("contact-us.tpl");
	$smarty->display("contact-us.tpl"); 
?>