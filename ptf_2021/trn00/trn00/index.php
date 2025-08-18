<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>
    <section id="visual">
        <div class="container">
            <div class="main-slide">
                <figure><img src="<?php echo G5_THEME_URL ?>/img/dream01.jpg" alt="nctdream"></figure>
                <figure><img src="<?php echo G5_THEME_URL ?>/img/dream02.jpg" alt="nctdream"></figure>
                <figure><img src="<?php echo G5_THEME_URL ?>/img/dream03.jpg" alt="nctdream"></figure>
            </div>
            <div class="slogan">
                <h3>NCT DREAM</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, possimus.</p>
            </div>
        </div>
    </section>
    <section id="customer">
        <div class="container">
            <div class="item">
                <h3>공지사항 <a href="#">more</a></h3>
                <ul>
                    <li><a href="#">NEW <span>2021.05.20</span></a></li>
                    <li><a href="#">NEW <span>2021.05.20</span></a></li>
                    <li><a href="#">NEW <span>2021.05.20</span></a></li>
                </ul>
            </div>
            <div class="item">
                <h3>문의게시판 <a href="#">more</a></h3>
                <ul>
                    <li><a href="#">NEW <span>2021.05.20</span></a></li>
                    <li><a href="#">NEW <span>2021.05.20</span></a></li>
                    <li><a href="#">NEW <span>2021.05.20</span></a></li>
                </ul>
            </div>
            <div class="item">
                <h3>고객지원 <a href="#">more</a></h3>
                <ul>
                    <li class="tel"><a href="tel:010-1111-1234">010-1111-1234</a></li>
                    <li class="mail"><a href="mailto:aaaa@naver.com">aaaa@naver.com</a></li>
                </ul>
            </div>
        </div>
    </section>

<?php
include_once(G5_THEME_PATH.'/tail.php');