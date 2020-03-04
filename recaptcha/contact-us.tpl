{php}
include('captcha.php');
{/php}
{include file="doctype.tpl"}
<head>
{include file="head-common.tpl"}

<link rel="canonical" href=" https://www.fastneasytax.com/ca/contact-us" />
<meta name="ROBOTS" content="NOINDEX,NOFOLLOW"/>
<!-- Google Recaptcha -->

<script 
{literal}
type="text/javascript" src="https://www.google.com/recaptcha/api.js?render=SECRET_CAPTCHA_KEY"> 
{/literal}
 </script>

</head><body id="page1">
<!-- header -->
{include file="header.tpl"}
<!-- content -->
<section id="content">
  <div class="main">
    <div class="wrapper top4">
      <article class="col-5 col-indent">
        <div class="box_1">
          <h2 id="contactus_heading">C<span>ontact Us</span ></h2>
          <a href="faq#TOP1">FAQ1 : How do I access tax return for previous tax years from 2011 to 2018?</a>
          <p><a href="faq#TOP2">FAQ2 : CRA has not received my tax return. How do I upload my tax file to CRA and get a confirmation number?</a> </p>
          <a href="faq#TOP3">FAQ3 : I am getting an error - The information sent to the Canada Revenue Agency doesn't match the information currently on record.</a>
          <p><a href="faq#TOP4">FAQ4 : How do I claim children fitnesss credit and child care expense?</a> </p>
          <a href="faq#TOP5">FAQ5 : How do I claim an eligible dependent?</a>
          <p><a href="faq#TOP6">FAQ6 : I get an error message that I have not entered my address. What do I do?</a> </p>
          
	  <form id="contacts-form" action="{$base_url}contact-us" method="post">
          <div class="wrapper">
	  {if $message ne ''}
		<div id="successMessage">
		<div class="errorMessage" id="contactus_error"><div style="line-height: 20px; font-family: verdana; border: 1px solid rgb(68, 158, 70);padding:3px;margin-bottom:10px;"> &nbsp;
		<font color="#3a762e">{$message}</font>
		</div></div></div> 
  	  {/if}
	  <div id="ContactusMessage" style="display:none;">
	  <div class="errorMessage" id="contactus_error"><div style="line-height: 20px; font-family: verdana; border: 1px solid rgb(255, 0, 0);padding:3px;"><img style="float: left;" src="{$base_url}images/error.png"> &nbsp;<font color="red" id="message"></font>
	  </div></div></div> 
 	  <div class="column1">
		<ul>
			<li><label>Name: <span class="mandatory">*</span></label><input name="name" id="name" type="text" tabindex="10"/></li> 
			<li><label>Email: <span class="mandatory">*</span></label><input name="email" id="email" type="text" tabindex="20"/></li> 	
			<li><label>Subject: </label><input name="subject" id="subject" type="text" tabindex="25"/></li> 	
			<li><label>Message:<span class="mandatory">*</span></label><textarea name="description" id="description" cols="30" rows ="2"  style="background-color:white"  tabindex="30"></textarea></li> 	
			<!--li><label>Verification Code: <span class="mandatory">*</span></label> 
			<img id="captcha1" name="cuscaptcha" alt="captcha" src="{$base_url}random-image.php" />
			<a class="refreshImg" onclick="reloadCaptcha('cuscaptcha','random-image.php')" href="javascript:void(0);"><img height="25" width="25" border="0" title="Refresh" alt="Refresh" src="{$base_url}images/refresh.png" /></a>
			<input type="text" name="security_code" id="security_code" size="12" style="width:50px" tabindex="40"/></li>
			<script type="text/javascript">reloadCaptcha('cuscaptcha','random-image.php')</script--> 
			<li><label>&nbsp;</label> <input class="dark-blue-but" type="button" value="Submit" name="btnSubmit" onclick="return ValidateContactus();" tabindex="100"/></li>
			<p>We will reply to your question within 24 hours. If you do not hear from us, please check your junk mail folder or send
            a message to us via <a href="https://www.facebook.com/fastneasytax">facebook</a> page. </p>
		</ul>
             </div> 
            </div>
			<input type= "hidden" id ="token" name="token">
          </form>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- footer -->
{include file="footer.tpl"}

</body>

<script>
{literal}
grecaptcha.ready(function() {
    grecaptcha.execute('6LcYvN0UAAAAAKr6SF85mzSDXVZdzgKRKsvtMRbN', {action: 'homepage'}).then(function(token) {
       console.log(token);
	   document.getElementById("token").value = token;
    });
});

{/literal}
</script>

</html>
