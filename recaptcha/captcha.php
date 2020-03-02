<?php
if(isset($_POST['btnSubmit'])){
    $url = "https://www.google.com/recaptcha/api/siteverify";
    $data = [
        'secret' => "6LcYvN0UAAAAAB4ieMROjBzvy7YV1uFFaBuehZVA",
        'response' => $_POST['token'],
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];

    $options = array( 'http' => array(
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    )
    );

    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);

    $res = json_decode($response, true);
    if($res['success'] == true){
        // do your work here what you want to do after it is verfied
        echo '<script type="text/javascript">',
     'ValidateContactus();',
     '</script>'
;
    }
}
?>