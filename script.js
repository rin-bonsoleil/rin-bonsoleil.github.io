document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ヒーロースライドショーのコード (左右独立)
    const heroImagesLeft = document.querySelectorAll('.hero-slideshow-left .hero-single-image');
    const heroImagesRight = document.querySelectorAll('.hero-slideshow-right .hero-single-image');

    let currentLeftIndex = 0;
    let currentRightIndex = 0;

    function showNextLeftImage() {
        heroImagesLeft[currentLeftIndex].classList.remove('active');
        currentLeftIndex = (currentLeftIndex + 1) % heroImagesLeft.length;
        heroImagesLeft[currentLeftIndex].classList.add('active');
    }

    function showNextRightImage() {
        heroImagesRight[currentRightIndex].classList.remove('active');
        currentRightIndex = (currentRightIndex + 1) % heroImagesRight.length;
        heroImagesRight[currentRightIndex].classList.add('active');
    }

    // 最初の画像をアクティブにする
    if (heroImagesLeft.length > 0) {
        heroImagesLeft[0].classList.add('active');
        setInterval(showNextLeftImage, 5000); // 5秒ごとに画像を切り替える
    }
    if (heroImagesRight.length > 0) {
        heroImagesRight[0].classList.add('active');
        setInterval(showNextRightImage, 5000); // 5秒ごとに画像を切り替える
    }
});