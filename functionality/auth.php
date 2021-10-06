<?php
if (isset($_POST["register"])) {
   $firstname = $_POST["first_name"];
   $lastname = $_POST["last_name"];
   $email = $_POST["mail"];
   $username = $_POST["userName"];
   $pwd = $_POST["pwd"];
   $pwdRepeat = $_POST["pwd_repeat"];

    require_once './functions.php';

    if (emptyInputSignup($firstname, $lastname, $email, $username, $pwd, $pwdRepeat) !== false) {
        header("location: ..?page=register&error=emptyinput");
        exit();
    }
    if (invalidUid($username) !== false) {
        header("location: ..?page=register&error=invaliduid");
        exit();
    }
    if (invalidEmail($email) !== false) {
        header("location: ..?page=register&error=invalidemail");
        exit();
    }
    if (pwdMatch($pwd, $pwdRepeat) !== false) {
        header("location: ..?page=register&error=passwordsdontmatch");
        exit();
    }
    if (uidExists($username, $email) !== false) {
        header("location: ..?page=register&error=usernametaken");
        exit();
    }

    createUser($firstname, $lastname, $email, $username, $pwd);

} else if (isset($_POST["login"])) {
    $username = $_POST["uid"];
    $pwd = $_POST["pwd"];

    require_once './functions.php';

    if (emptyInputLogin($username, $pwd) !== false) {
        header("location: ..?page=login&error=emptyinput");
        exit();
    }

    loginUser($username, $pwd);

} else if (isset($_GET["logout"])) {
    session_start();
    session_unset();
    session_destroy();

    header("location: ../index.php");
    exit();
} else {
    header("location: ..?page=register");
}