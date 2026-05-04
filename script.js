document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ヒーロースライドショーのコード (2つのスライドショーが連動して切り替わる)
    const heroImagesLeft = document.querySelectorAll('.hero-slideshow-wrapper.left .hero-single-image');
    const heroImagesRight = document.querySelectorAll('.hero-slideshow-wrapper.right .hero-single-image');

    let currentImageIndex = 0;

    function showNextImages() {
        // 現在アクティブな画像を非アクティブにする
        heroImagesLeft[currentImageIndex].classList.remove('active');
        heroImagesRight[currentImageIndex].classList.remove('active');

        // 次の画像インデックスを計算
        currentImageIndex = (currentImageIndex + 1) % heroImagesLeft.length; // 左右で枚数が同じ前提

        // 次の画像をアクティブにする
        heroImagesLeft[currentImageIndex].classList.add('active');
        heroImagesRight[currentImageIndex].classList.add('active');
    }

    // 最初の画像をアクティブにする
    if (heroImagesLeft.length > 0 && heroImagesRight.length > 0) {
        heroImagesLeft[0].classList.add('active');
        heroImagesRight[0].classList.add('active');
        setInterval(showNextImages, 5000); // 5秒ごとに画像を切り替える
    }
});