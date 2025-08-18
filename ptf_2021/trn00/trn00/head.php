<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/head.php');
    return;
}

include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>
    <?php
    if(defined('_INDEX_')) { // index에서만 실행
        include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
    ?>
<!-- 상단 시작 { -->
    <div id="wrap">
    <header>
        <h1><a href="<?php echo G5_URL ?>">NCT DREAM</a></h1>
        <nav>
            <ul class="container">
                <li><a href="<?php echo G5_THEME_URL ?>/m01.html">그룹소개</a></li>
                <li><a href="<?php echo G5_THEME_URL ?>/m02.html">멤버구성</a></li>
                <li><a href="<?php echo G5_THEME_URL ?>/m03.html">앨범소개</a></li>
                <li><a href="<?php echo G5_THEME_URL ?>/m04.html">활동연혁</a></li>
                <li><a href="/ptf00/bbs/board.php?bo_table=free">게시판</a></li>
            </ul>
        </nav>
    </header>
    <main id="main">
<!-- } 상단 끝 -->

<hr>

<!-- 콘텐츠 시작 { -->
