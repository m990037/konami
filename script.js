// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// スクロールインジケーターのクリックイベント
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

// スクロールアニメーション
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// アニメーション対象の要素を監視
const animateElements = document.querySelectorAll('.message-card, .timeline-item, .gallery-item, .anniversary-item, .special-card');
animateElements.forEach(el => observer.observe(el));

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ギャラリーアイテムのホバーエフェクト
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ハートの追加アニメーション
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '2rem';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.opacity = '0.7';
    heart.style.transition = 'all 4s ease-out';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.bottom = '120vh';
        heart.style.opacity = '0';
        heart.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
    }, 100);
    
    setTimeout(() => {
        heart.remove();
    }, 4100);
}

// 定期的にハートを表示
setInterval(createFloatingHeart, 3000);

// ページロード時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// タイムラインアイテムのスクロールアニメーション
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.5 });

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = 'all 0.8s ease-out';
    timelineObserver.observe(item);
});

// 記念日カウントダウン（オプション）
function updateCountdown() {
    // ここに特定の記念日までのカウントダウンを実装できます
    // 例: 次の記念日まであと何日、など
}

// スクロール時のヘッダー効果（必要に応じて）
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // スクロール方向の検出
    if (currentScroll > lastScroll) {
        // 下にスクロール
    } else {
        // 上にスクロール
    }
    
    lastScroll = currentScroll;
});

// モバイルデバイスでのタッチイベント最適化
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// 写真プレースホルダーのクリックイベント（写真追加のヒント）
const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
photoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        // ここに写真アップロード機能を追加できます
        console.log('写真を追加する場所です');
    });
});

// アニメーションのパフォーマンス最適化
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    // アニメーションを無効化または簡略化
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}
