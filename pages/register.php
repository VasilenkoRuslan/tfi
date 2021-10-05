    <div class="bg_registration">
        <div class="registration">
            <form action="./functionality/auth.php" method="post">
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
                <label for="userName">
                    <input type="text" name="userName" id="userName" placeholder="User Name" class="full">
                </label>
                <label for="pass">
                    <input type="password" name="pwd" id="pass" placeholder="Password" class="full">
                </label>
                <label for="conf_pass">
                    <input type="password" name="pwd_repeat" id="conf_pass" placeholder="Confirm Password" class="full">
                </label>
                <div class="checkbox">
                    <input type="checkbox" name="accept" id="accept">
                    <label for="accept">I accept the <a href="#" class="c_green">Terms of Use</a> & <a href="#" class="c_green">Privacy Policy</a>.</label>
                </div>
                <label for="btn_registr">
                    <input type="submit" name="submit" id="btn_registr" class="btn btn_green full" value="Register Now">
                </label>
            </form>
        </div>
        <p class="after_registration">Already have an account? <a href="?page=login" class="link_sing_in">Sing in</a></p>
        <p class="after_registration">
    <?php
        if (isset($_GET["error"])) {
            if ($_GET["error"] == "emptyinput") { ?>
                Fill in all fields!
                <?php
            }
            if ($_GET["error"] == "invaliduid") { ?>
                Fill in all fields!
                <?php
            }
            if ($_GET["error"] == "invalidemail") { ?>
                Choose a proper username!
                <?php
            }
            if ($_GET["error"] == "passwordsdontmatch") { ?>
                Passwords doesn't match!
                <?php
            }
            if ($_GET["error"] == "usernametaken") { ?>
                Username already taken!
                <?php
            }
            if ($_GET["error"] == "stmtfailed111") { ?>
                Something went wrong, try again!
                <?php
            }
            if ($_GET["error"] == "stmtfailed2") { ?>
                Something went wrong, try again!
                <?php
            }
            if ($_GET["error"] == "none") { ?>
                You have signed up!
                <?php
            }
        }
    ?>
        </p>
    </div>


