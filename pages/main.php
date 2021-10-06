<div class="content">
    <?php
    if (isset($_SESSION["useruid"])) { ?>
    <p>Hello there <?= $_SESSION["useruid"]; ?>!</p>
        <?php
    }
    ?>
    <div class="container">
        <h1>Content</h1>
    </div>
</div>