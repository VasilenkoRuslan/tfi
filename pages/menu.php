<?php $menu_items = [
    'main' => 'Home',
    'cv' => 'CV',
    'form' => 'Form',
];
session_start();
?>
<div class="container_menu">
    <div class="header__body">
        <div class="header__burger">
                    <span>
                    </span>
        </div>
        <nav class="header__menu">
            <ul class="header__list">
                <?php foreach ($menu_items as $key => $item) { ?>
                    <li class="header__link"><a href="?page=<?= $key; ?>"><?= $item; ?></a></li>
                <?php } ?>
                <?php
                if (isset($_SESSION["useruid"])) { ?>
                    <li class="header__link"><a href="?page=edit">edit CV</a></li>
                    <li class="header__link"><a href="./functionality/auth.php?logout">Log out</a></li>
                <?php
                    $menu_items["profile"] = "Profile page";
                    $menu_items["logout"] = "Log out";
                } else { ?>
                    <li class="header__link"><a href="?page=register">Registration</a></li>
                    <li class="header__link"><a href="?page=login">Log in</a></li>
                <?php
                    $menu_items["register"] = "Registration";
                    $menu_items["login"] = "Login";
                }
                ?>
            </ul>
        </nav>
    </div>
</div>
</div>
</header>
<section>
