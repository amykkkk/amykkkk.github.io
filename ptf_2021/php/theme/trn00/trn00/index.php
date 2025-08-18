<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>
<img src="<?php echo G5_THEME_URL ?>/img/logo.png" alt="">
내 디자인 이야...

<?php
include_once(G5_THEME_PATH.'/tail.php');