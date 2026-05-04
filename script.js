document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ヒーロースライドショーのコード
    const heroImages = document.querySelectorAll('.hero-image');
    let currentImageIndex = 0;

    function showNextImage() {
        // アクティブな画像をフェードアウトさせる前に、次の画像を準備する
        const nextImageIndex = (currentImageIndex + 1) % heroImages.length;

        heroImages[currentImageIndex].classList.remove('active');
        heroImages[nextImageIndex].classList.add('active');
        
        currentImageIndex = nextImageIndex;
    }

    // 最初の画像をアクティブにする
    if (heroImages.length > 0) {
        heroImages[0].classList.add('active');
        setInterval(showNextImage, 5000); // 5秒ごとに画像を切り替える
    }
});