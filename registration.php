<?php require_once 'header.php' ?>
    <div class="bg_registration">
        <div class="registration">
            <form action="">
                <div class="registration_title left-right-line-header">Register</div>
                <p class="registration_after_title">Create your account. It's free and only takes a minute.</p>
                <div class="name full">
                    <label for="first_name">
                        <input type="text" name="first_name" id="first_name" placeholder="First Name" class="full">
                    </label>
                    <div class="empty_block"></div>
                    <label for="last_name">
                        <input type="text" name="last_name" id="last_name" placeholder="Last Name" class="full">
                    </label>
                </div>
                <label for="mail">
                    <input type="email" name="mail" id="mail" placeholder="Email" class="full">
                </label>
                <label for="pass">
                    <input type="password" name="password" id="pass" placeholder="Password" class="full">
                </label>
                <label for="conf_pass">
                    <input type="password" name="confirm_password" id="conf_pass" placeholder="Confirm Password" class="full">
                </label>
                <div class="checkbox">
                    <input type="checkbox" name="accept" id="accept">
                    <label for="accept">I accept the <a href="#" class="c_green">Terms of Use</a> & <a href="#" class="c_green">Privacy Policy</a>.</label>
                </div>
                <label for="btn_registr">
                    <input type="submit" id="btn_registr" class="btn btn_green full" value="Register Now">
                </label>
            </form>
        </div>
        <p class="after_registration">Already have an account? <a href="./login.php" class="link_sing_in">Sing in</a></p>
    </div>
<?php require_once './footer.php'; ?>