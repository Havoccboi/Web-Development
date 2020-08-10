<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0">
    <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="row">
        <div class="col-md-12">
            <form action="form-process.php" method="post">
                <h1> Sign Up </h1>

                <fieldset>

                    <legend><span class="number">1</span> Your Account Information</legend>

                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name">

                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username">

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password">
                    <label for="repassword">Re-Type Password:</label>
                    <input type="password" id="repassword" name="repassword">

                    <label>Gender:</label>
                    <input type="radio" id="male" value="male" name="user_gender"><label for="male" class="light">Male</label>
                    <input type="radio" id="female" value="female" name="user_gender"><label for="female" class="light">Female</label>
                    <input type="radio" id="Other" value="other" name="user_gender"><label for="other" class="light">Other</label>

                </fieldset>
                <fieldset>

                    <legend><span class="number">2</span> Your Profile</legend>

                    <label>Programming skills</label>
                    <input type="radio" id="java" value="java" name="user_skill"><label for="java" class="light">Java</label>
                    <input type="radio" id="android" value="android" name="user_skill"><label for="android" class="light">Android</label>
                    <input type="radio" id="ruby" value="ruby" name="user_skill"><label for="ruby" class="light">Ruby</label>
                    <input type="radio" id="net" value="net" name="user_skill"><label for="net" class="light">Net</label>
                    <br>
                    <br>
                    <label for="contact-no">Contact No:</label>
                    <input type="text" id="contact-no" name="contact-no">

                    <label for="email">Email:</label>
                    <input type="email" id="mail" name="mail">



                    <label for="college">Select College:</label>
                    <select id="college" name="user_college">
                        <optgroup label="Dhaka">
                            <option value="frontend_developer">College 1</option>
                            <option value="php_developer">College 2</option>
                            <option value="python_developer">College 3</option>
                            <option value="rails_developer">College 4</option>
                            <option value="web_designer">College 5</option>
                            <option value="wordpress_developer">College 6</option>
                        </optgroup>
                        <optgroup label="Khulna">
                            <option value="android_developer">College 7</option>
                            <option value="ios_developer">College 8</option>
                            <option value="mobile_designer">College 9</option>
                        </optgroup>
                        <optgroup label="Chitttagong">
                            <option value="business_owner">College 10</option>
                            <option value="freelancer">College 11</option>
                        </optgroup>
                    </select>


                </fieldset>

                <button type="submit">Submit</button>

            </form>
        </div>
    </div>

</body>

</html>
