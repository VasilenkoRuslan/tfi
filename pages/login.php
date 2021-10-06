    <div class="bg_registration">
        <div class="registration">
            <form action="./functionality/auth.php" method="post">
                <div class="registration_title left-right-line-header">Login</div>
                <p class="registration_after_title"></p>
                <label for="username">
                    <input type="text" name="uid" id="username" placeholder="Username" class="full">
                </label>
                <label for="pass">
                    <input type="password" name="pwd" id="pass" placeholder="Password" class="full">
                </label>
                <label for="btn_login">
                    <input type="submit" name="login" id="btn_login" class="btn btn_green full" value="Login">
                </label>
            </form>
        </div>
        <p class="after_registration">Don't have an account? <a href="?page=register" class="link_sing_in">Sing up</a></p>
        <p class="after_registration">
            <?php
            if (isset($_GET["error"])) {
                if ($_GET["error"] == "emptyinput") { ?>
                    Fill in all fields!
                    <?php
                }
                if ($_GET["error"] == "wronglogin") { ?>
                    Incorrect login information!
                    <?php
                }
            }
            ?>
        </p>
    </div>