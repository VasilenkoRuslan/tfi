    <div class="bg_registration">
        <div class="registration">
            <form action="./functionality/auth.php" method="post">
                <div class="registration_title left-right-line-header">Login</div>
                <p class="registration_after_title"></p>
                <label for="username">
                    <input type="text" name="username" id="username" placeholder="Username" class="full">
                </label>
                <label for="pass">
                    <input type="password" name="password" id="pass" placeholder="Password" class="full">
                </label>
                <label for="btn_login">
                    <input type="submit" name="login" id="btn_login" class="btn btn_green full" value="Login">
                </label>
            </form>
        </div>
        <p class="after_registration">Don't have an account? <a href="?page=register" class="link_sing_in">Sing up</a></p>
    </div>