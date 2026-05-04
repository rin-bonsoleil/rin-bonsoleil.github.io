document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ヒーロースライドショーのコード (画像のペアを切り替える)
    const heroImagePairs = document.querySelectorAll('.hero-image-pair');
    let currentPairIndex = 0;

    function showNextPair() {
        heroImagePairs[currentPairIndex].classList.remove('active');
        currentPairIndex = (currentPairIndex + 1) % heroImagePairs.length;
        heroImagePairs[currentPairIndex].classList.add('active');
    }

    // 最初の画像のペアをアクティブにする
    if (heroImagePairs.length > 0) {
        heroImagePairs[0].classList.add('active');
        setInterval(showNextPair, 5000); // 5秒ごとに画像のペアを切り替える
    }
});