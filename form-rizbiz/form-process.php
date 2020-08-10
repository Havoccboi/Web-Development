<?php


    
    $name = $_POST['name'];
    $username = $_POST['username'];
    $password_first = $_POST['password'];
    $password_second = $_POST['repassword'];
    $gender = $_POST['user_gender'];
    $skill = $_POST['user_skill'];
    $contact_no = $_POST['contact-no'];
    $email = $_POST['mail'];
    
    
    if($password_first != $password_second){
            echo "<script>alert('Password's don't match try refilling the form);</script>"; 

              header("Location: index.php");                      }
    



echo "<h3> Name is : $name<h3>";
echo "<h3> UserName is : $username<h3>";    
echo "<h3> Gender is : $gender<h3>";
echo "<h3> Skill is : $skill<h3>";
echo "<h3> Contact No is : $contact_no<h3>";
echo "<h3> Email is : $email<h3>";











?>
