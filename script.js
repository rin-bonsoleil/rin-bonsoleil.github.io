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

    // 2画面並列スライドショー (Homestay Food)
    const foodSlidesLeft = document.querySelectorAll('#food-slideshow-left .dual-slide');
    const foodSlidesRight = document.querySelectorAll('#food-slideshow-right .dual-slide');
    let foodIndex = 0;

    function showNextFoodSlides() {
        if (foodSlidesLeft.length > 0 && foodSlidesRight.length > 0) {
            // 現在の画像を非表示
            foodSlidesLeft[foodIndex].classList.remove('active');
            foodSlidesRight[foodIndex].classList.remove('active');
            
            // 次のインデックス (枚数が違う場合は少ない方に合わせる)
            const minLength = Math.min(foodSlidesLeft.length, foodSlidesRight.length);
            foodIndex = (foodIndex + 1) % minLength;
            
            // 次の画像を表示
            foodSlidesLeft[foodIndex].classList.add('active');
            foodSlidesRight[foodIndex].classList.add('active');
        }
    }

    if (foodSlidesLeft.length > 0 && foodSlidesRight.length > 0) {
        // 最初の画像をアクティブに固定
        foodSlidesLeft[0].classList.add('active');
        foodSlidesRight[0].classList.add('active');
        setInterval(showNextFoodSlides, 4000);
    }

    // キャンプ用 2画面並列スライドショー
    const campSlidesLeft = document.querySelectorAll('#camp-slideshow-left .dual-slide');
    const campSlidesRight = document.querySelectorAll('#camp-slideshow-right .dual-slide');
    let campIndex = 0;

    if (campSlidesLeft.length > 0 && campSlidesRight.length > 0) {
        setInterval(() => {
            campSlidesLeft[campIndex].classList.remove('active');
            campSlidesRight[campIndex].classList.remove('active');
            campIndex = (campIndex + 1) % campSlidesLeft.length;
            campSlidesLeft[campIndex].classList.add('active');
            campSlidesRight[campIndex].classList.add('active');
        }, 3500);
    }
});