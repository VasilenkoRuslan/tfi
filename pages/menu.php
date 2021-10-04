<?php $menu_items = [
    'main' => 'Home',
    'cv' => 'CV',
    'edit' => 'edit CV',
    'form' => 'Form',
    'register' => 'Registration',
    'login' => 'Login',
];
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
            </ul>
        </nav>
    </div>
</div>
</div>
</header>
<section>
