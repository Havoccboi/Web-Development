function emailValidation(str) {
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	str = str.replace(/\s+/g, '');
	return filter.test(str);
}
function phoneValidation(str) 
{
	if(str == "")
		return true;
	//var phone2 = /^(\+\d)*\s*(\(\d{3}\)\s*)*\d{3}(-{0,1}|\s{0,1})\d{2}(-{0,1}|\s{0,1})\d{2}$/; 
	
	var phone2 = /^([0-9]{3}(\-)[0-9]{3}(\-)[0-9]{4})|([0-9]{10})$/;
	if (str.match(phone2)) {
		return true;
	} else {
		return false;
	}
}
function validateZipCode(elementValue){
	if(elementValue == "")
		return true;
	//var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
	var zipCodePattern = /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
	return elementValue.match(zipCodePattern);
}


function validateSignup(){
	$("#successMessage").html("");
	var msg = "";

	var pwd = $("#password").val();
	var secans = $("#sec_answer").val();

	if ($("#email").val() == "" || emailValidation($("#email").val()) == false){
		msg = "Invalid Email. If you are getting this message with a valid email, try again after removing any space at the end of the email. If needed, contact us at support@fastneasytax.com for help.";
		$("#email").focus();
	}else if($("#password").val() == ""){
		msg = "Password can not be blank.";
		$("#password").focus();
	}else if($.trim(pwd) == ""){
		msg = "Please enter valid password";
		$("#password").focus();
	}else if($("#password").val().length < 6){
		msg = "Password must have at least 6 characters.";
		$("#password").focus();
	}else if($("#re_password").val() != $("#password").val()){
		msg = "Passwords do not match.";
		$("#re_password").focus();
	}else if($("#first_name").val() == ""){
		msg = "Please enter First name.";
		$("#first_name").focus();
	/*}else if($("#zip_code").val() != "" && !validateZipCode($("#zip_code").val())){
		msg = "Invalid Postal code.";
		$("#zip_code").focus();
	}else if($("#phone").val() != "" && !phoneValidation($("#phone").val())){
		msg = "Invalid Phone.";
		$("#phone").focus();
	}else if($("#sec_question").val() == ""){
		msg = "Please select security question.";
		$("#sec_question").focus();
	}else if($("#sec_answer").val() == ""){
		msg = "Please enter security answer.";
		$("#sec_answer").focus();
	}else if($.trim(secans) == ""){
		msg = "Please enter valid security answer.";
		$("#sec_answer").focus();
	}else if($("#retype_sec_answer").val() == ""){
		msg = "Please retype security answer.";
		$("#retype_sec_answer").focus();
	}else if($("#retype_sec_answer").val() != $("#sec_answer").val()){
		msg = "Security answers do not match.";
		$("#re_password").focus();*/
	}else if($("#security_code").val() == ""){
		msg = "Verification code can not be blank.";
		$("#security_code").focus();
	}
	if(msg != ""){
		$("#signupMessage").show();
		$("#message").text(msg);
		document.getElementById("signup_heading").scrollIntoView();
		return false;
	}else{
		$("#signupMessage").hide();
		$.ajax({
		  type: 'POST',
		  data: 'func=validate_signup&rand='+$("#security_code").val()+'&email='+$("#email").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(data){
			if(data == '1'){
				$("#signupMessage").hide();
				$("#country_code").removeAttr('disabled');
				$("#language").removeAttr('disabled');
				$("#contacts-form").submit();
			}else{
				$("#message").text(data);
				document.getElementById("signup_heading").scrollIntoView();
				if(data != "")
					$("#signupMessage").show();
			}
		  }
		});
	}
	$("#signupMessage").hide();
	return false;
}
function reloadCaptcha(name,src){
	var rand = Math.random(65000);
	document.images[name].src = base_url+"images/loading.gif";
	setTimeout("setSource('"+name+"','"+base_url+src+"?rand="+rand+"')",2000);
}
function setSource(name,src){
	document.images[name].src = src;
}


function validateMyAccount(){
	$("#successMessage").html("");
	var msg = "";
	if ($("#email").val() == "" || emailValidation($("#email").val()) == false){
		msg = "Invalid Email.";
		$("#email").focus();
	}else if($("#first_name").val() == ""){
		msg = "Please enter First name.";
		$("#first_name").focus();
	/*}else if($("#zip_code").val() != "" && !validateZipCode($("#zip_code").val())){
		msg = "Invalid Postal code.";
		$("#zip_code").focus();
	}else if($("#phone").val() != "" && !phoneValidation($("#phone").val())){
		msg = "Invalid Phone.";
		$("#phone").focus();*/
	}else if($("#sec_question").val() == ""){
		msg = "Please select security question.";
		$("#sec_question").focus();
	}else if($("#sec_answer").val() == ""){
		msg = "Please enter security answer.";
		$("#sec_answer").focus();
	}else if($("#retype_sec_answer").val() == ""){
		msg = "Please retype security answer.";
		$("#retype_sec_answer").focus();
	}else if($("#retype_sec_answer").val() != $("#sec_answer").val()){
		msg = "Security answers do not match.";
		$("#re_password").focus();
	}

	if(msg != ""){
		$("#signupMessage").show();
		$("#message").text(msg);
		document.getElementById("signup_heading").scrollIntoView();
		return false;
	}else{
		$("#signupMessage").hide();
		$.ajax({
		  type: 'POST',
		  data: 'func=validate_myaccount&id='+$("#user_id").val()+'&email='+$("#email").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(data){
			if(data == '1'){
				
				$("#signupMessage").hide();
				$("#country_code").removeAttr('disabled');
				$("#language").removeAttr('disabled');
				$("#contacts-form").submit();
			}else{
				$("#message").text(data);
				document.getElementById("signup_heading").scrollIntoView();
				if(data != "")
					$("#signupMessage").show();
			}
		  }
		});
	}
	$("#signupMessage").hide();
	return false;
}

function validateCommonLogin(){
	msg = "";
	if ($("#cmn_email").val() == "" || emailValidation($("#cmn_email").val()) == false){
		msg = "Invalid email";
	}else if($("#cmn_password").val() == ""){
		msg = "Password can not be blank";
	}
	if(msg != ""){
		document.location.href = base_url+'signup.html?au=f';
		return false;
	}else{
		$.ajax({
		  type: 'POST',
		  data: 'func=checksignin&email='+$("#cmn_email").val()+'&password='+$("#cmn_password").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(data){
			if(data == '1'){
				document.cmn_login.submit();
			}else{
				document.location.href = base_url+'signup.html?au=f';
			}
		  }
		});
	}
	return false;
}

function validateSignin(){
	$msg = "";
	$("#signin_email").attr("style","");
	$("#signinMessage").hide();
	if ($("#signin_email").val() == "" || emailValidation($("#signin_email").val()) == false){
		$("#signinMessage").show();
		$("#signin_message").text("Invalid email. Remove any extra space at the end of the email and try again.");
		$("#signin_email").focus();
		return false
	}else if($("#signin_password").val() == ""){
		$("#signinMessage").show();
		$("#signin_message").text("Invalid password");
		$("#signin_password").focus();
		return false
	}else{
		$("#signinMessage").hide();
		$.ajax({
		  type: 'POST',
		  data: 'func=checksignin&email='+$("#signin_email").val()+'&password='+$("#signin_password").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(data){
			if(data == '1'){
				$("#signinMessage").hide();
				document.signin_frm.submit();
			}else{
				$("#signin_message").text(data);
				if(data != "")
					$("#signinMessage").show();
			}
		  }
		});
	}
	return false;
}

function redirectUrl(url)
{
	window.location= url;
}


function fetchSecurityQuestion(){
	$("#successMessage").html("");
	$("#signupMessage").hide();
	$("#secQABlock").hide();
	$("#secQue").text("");
	$("#sec_answer").val("");
	var msg = "";
	if ($("#email").val() == "" || emailValidation($("#email").val()) == false){
		msg = "Invalid Email.";
		$("#email").focus();
	}

	if(msg != ""){
		$("#signupMessage").show();
		$("#message").text(msg);
		document.getElementById("signup_heading").scrollIntoView();
		return false;
	}else{
		$("#signupMessage").hide();
		$.ajax({
		  type: 'POST',
		  data: 'func=fetch_sec_question&form_xsrf_id='+$("#form_xsrf_id").val()+'&email='+$("#email").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(response){ 
			var data = jQuery.parseJSON(response);			
			if(data.error != ''){
				$("#message").text(data.error);
				document.getElementById("signup_heading").scrollIntoView();
				$("#signupMessage").show();				
			}else{
				
				$("#secEmailBlock").hide();
				$("#signupMessage").hide();
				$("#secQABlock").show();
				$("#secQue").text(data.data);
				$("#form_xsrf_id").val(data.form_xsrf_id);				
			}
		  }
		});
	}
	$("#signupMessage").hide();
	return false;
}


function checkSecurityAnswer(){
	$("#successMessage").html("");
	$("#signupMessage").hide();	
	var msg = "";
	if ($("#sec_answer").val() == ""){
		msg = "Invalid security answer.";
		$("#sec_answer").focus();
	}

	if(msg != ""){
		$("#signupMessage").show();
		$("#message").text(msg);
		document.getElementById("signup_heading").scrollIntoView();
		return false;
	}else{
		$("#signupMessage").hide();
		$.ajax({
		  type: 'POST',
		  data: 'func=check_sec_answer&form_xsrf_id='+$("#form_xsrf_id").val()+'&sec_answer='+$("#sec_answer").val()+'&email='+$("#email").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(response){ 
			var data = jQuery.parseJSON(response);			
			if(data.error != ''){
				$("#message").text(data.error);
				document.getElementById("signup_heading").scrollIntoView();
				$("#signupMessage").show();				
			}else {
				$("#secEmailBlock").html("");
				$("#secQABlock").html("");
				$("#signupMessage").html("<strong>"+data.msg+"</strong>");
				document.getElementById("signup_heading").scrollIntoView();
				$("#signupMessage").show();				
			}
		  }
		});
	}
	$("#signupMessage").hide();
	return false;
}


function validateChangePassword()
{
	var msg = "";
	$("#signinMessage").hide();
	$("#signin_message").text("");
	$("#pwdsignin_message").html("");				
	$("#pwdSuccessMessage").hide();				

	if($("#old_pwd").val() == ""){
		msg = "Password can not be blank.";
		$("#old_pwd").focus();
	}else if($("#new_pwd").val() == ""){
		msg = "New Password can not be blank.";
		$("#new_pwd").focus();
	}else if($("#new_pwd").val().length < 6){
		msg = "Password should have atleast 6 chars.";
		$("#new_pwd").focus();
	}else if($("#re_new_pwd").val() != $("#new_pwd").val()){
		msg = "Passwords do not match.";
		$("#re_new_pwd").focus();
	}

	if(msg != ""){
		$("#signinMessage").show();
		$("#signin_message").text(msg);		
		return false;
	}else{
			

		$("#pwdSuccessMessage").hide();
		$("#pwdsignin_message").html('');
		$("#signinMessage").hide();
		$("#signin_message").text('');	
		$("#pwdLoaderText").show();
		
		$.ajax({
		  type: 'POST',
		  data: 'func=change_password&form_xsrf_id='+$("#form_xsrf_id").val()+'&old_pwd='+$("#old_pwd").val()+'&new_pwd='+$("#new_pwd").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(response){

		  var data = jQuery.parseJSON(response);			
			if(data.error != ''){
				$("#signin_message").text(data.error);				
				$("#signinMessage").show();	
				$("#pwdLoaderText").hide();
			}else {
				
				$("#pwdsignin_message").html(data.msg);				
				$("#pwdSuccessMessage").show();	
				$("#pwdLoaderText").hide();
			}
			
		  }
		});
	}
	
}

//added by VM - 4 Sep 2012
function ValidateContactus()
{

	var msg = "";	
	$("#successMessage").html("");

	if($("#name").val() == "")
	{
		msg = "Name can not be blank.";
		$("#name").focus();
	}
	else if ($("#email").val() == "" || emailValidation($("#email").val()) == false)
	{
		msg = "A valid email address is required so that we can respond to your enquiry.";
		$("#email").focus();
	}
	else if($("#description").val() == "")
	{
		msg = "Please explain your enquiry in description field. It can't be blank.";
		$("#description").focus();
	}
	//removing code validation
    /*  
    else if($("#security_code").val() == "")
	{
		msg = "Verification code can not be blank.";
		
	}
	else if($("#security_code").val() != '')
	{
		$msg = "Invalid verification code.";
		$("#security_code").focus();
	}
    */
	
	if(msg != "")
	{
		$("#ContactusMessage").show();
		$("#message").text(msg);
		document.getElementById("contactus_heading").scrollIntoView();
		return false;
	}
	else
	{
		$("#ContactusMessage").hide();
		$.ajax({
		  type: 'POST',
		  data: 'func=validate_contactus&rand='+$("#security_code").val(),
		  url: base_url+"ajax.php",
		  context: document.body,
		  success: function(data){
			/*if(data == '1'){ */
				$("#ContactusMessage").hide();
				$("#contacts-form").submit();
			/*}else{
				$("#message").text(data);
				document.getElementById("contactus_heading").scrollIntoView();
				if(data != "")
					$("#ContactusMessage").show();
			}*/
		  }
		});
	}
 	$("#ContactusMessage").hide();
	return false;
}

//added by VM - 7 Sep 2012
function ValidateTaxcalculator()
{
	var msg = "";	
	$("#successMessage").html("");

	if ($("#CBprov_code").val() == "")
	{
		msg = "Province can not be blank.";
		$("#CBprov_code").focus();
	}
	else if ($("#net_income").val() == "")
	{
		msg = "Net income can not be blank.";
		$("#net_income").focus();
	}
	else 
	{
	 	if ((isNaN($("#net_income").val())) || ($("#net_income").val().length == 0) || ($("#net_income").val() <= 0))
		{
      			msg = "Net income must be a positive numeric value to calculate your estimated tax income." ;
			$("#net_income").focus();
		}
 	      else if ($("#net_income").val() > 999999999)
    	{
    		msg = "Are you kidding? We don't help billionaires. Sorry!!";
    		$("#net_income").focus();
    	}
		
	}
	if(msg != "")
	{
		$("#TaxcalculatorMessage").show();
		$("#message").text(msg);
		document.getElementById("taxcalculator_heading").scrollIntoView();
		return false;
	}
	$("#TaxcalculatorMessage").hide();
	return true;
}