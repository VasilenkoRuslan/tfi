<?php if (!empty($_GET['page'])) {
    $page_name = $_GET['page']; ?>

    <?php require_once 'header.php' ?>
    <?php require_once './pages/menu.php'; ?>
    <?php
    global $menu_items;
    foreach ($menu_items as $key => $item) {
        if ($key === $page_name) {
            require_once './pages/' . $key . '.php';
        }
    } ?>
    <?php
} else {
    header("location:?page=main");
}
?>
<?php require_once './footer.php'; ?>