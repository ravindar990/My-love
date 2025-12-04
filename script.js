// Configuration - CUSTOMIZE THIS!
const CONFIG = {
    herName: "My Pasandida",
    yourName: "MAFIYA",
    firstDate: "2025-11-06", // YYYY-MM-DD format
    
    // Typing text
    typingTexts: [
        "You are the sunshine of my life ☀️",
        "My heart beats only for you 💓",
        "Every moment with you is magical ✨",
        "You make my world beautiful 🌸",
        "I love you more than words can say 💌"
    ],
    
    // Love letter (will be typed character by character)
    loveLetter: `My Dearest Love,

From the moment our paths crossed, my life transformed into a beautiful fairy tale. Your smile lights up my darkest days, your laughter is my favorite melody, and your love is the greatest gift I've ever received.

Every day with you feels like a blessing. You've shown me what true love means - patient, kind, and unconditional. In your eyes, I found my home. In your arms, I found my peace.

I promise to cherish you, respect you, and love you more with each passing day. You are my forever and always, my beginning and my end.

With all my heart,`,
    
    // Photos - REPLACE WITH YOUR PHOTOS!
    photos: [
        { url: "https://6931353c70bad5801fc1e35e.imgix.net/orca-image-1176660511.jpeg.jpeg", caption: "Our First Meeting" },
        { url: "https://6931353c70bad5801fc1e35e.imgix.net/orca-image-1804018972.jpeg.jpeg", caption: "That Magical Evening" },
        { url: "https://6931353c70bad5801fc1e35e.imgix.net/orca-image-933549462.jpeg.jpeg", caption: "Your Beautiful Smile" },
        { url: "https://6931353c70bad5801fc1e35e.imgix.net/IMG_20251204_193736_265.jpg", caption: "Perfect Moments" },
        { url: "https://6931353c70bad5801fc1e35e.imgix.net/IMG_20251124_233043_350.jpg", caption: "My Forever Love" }
    ],
    
    // Timeline events
    timeline: [
        { date: "November 6, 2025", icon: "❤️", title: "Our First Date", description: "The day my life changed forever" },
        { date: "None but I wish it will. be soon", icon: "🎁", title: "First Valentine's", description: "Our first celebration of love" },
        { date: "None but I wish it will. be soon", icon: "🌼", title: "First Trip Together", description: "Beautiful memories created" },
        { date: "28 November", icon: "🎂", title: "Your Birthday", description: "Celebrating the most special person" },
        { date: "Today", icon: "🌟", title: "Every Day", description: "Falling in love with you more each day" }
    ],
    
    // Secret password (your special date in DDMM format)
    secretPassword: "0611" // Change this to your special date
};

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts background
    createHeartsBackground();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize love letter typing
    initLoveLetter();
    
    // Initialize photo gallery
    initGallery();
    
    // Initialize timeline
    initTimeline();
    
    // Start love counter
    startLoveCounter();
    
    // Setup secret section
    setupSecretSection();
    
    // Initialize Swiper
    initSwiper();
    
    // Add scroll animations
    initScrollAnimations();
});

// Create floating hearts background
function createHeartsBackground() {
    const container = document.getElementById('hearts-bg');
    const heartCount = 50;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDelay = `${Math.random() * 15}s`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        container.appendChild(heart);
    }
}

// Typing effect for hero section
function initTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = CONFIG.typingTexts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % CONFIG.typingTexts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(type, 1000);
}

// Type love letter character by character
function initLoveLetter() {
    const letterElement = document.getElementById('love-letter');
    let index = 0;
    
    function typeLetter() {
        if (index < CONFIG.loveLetter.length) {
            letterElement.textContent += CONFIG.loveLetter.charAt(index);
            index++;
            setTimeout(typeLetter, 30); // Speed of typing
        }
    }
    
    // Start typing after a delay
    setTimeout(typeLetter, 1500);
}

// Initialize photo gallery
function initGallery() {
    const gallery = document.getElementById('gallery-container');
    
    CONFIG.photos.forEach(photo => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <img src="${photo.url}" alt="${photo.caption}">
            <div class="photo-caption">
                <h3>${photo.caption}</h3>
            </div>
        `;
        gallery.appendChild(slide);
    });
}

// Initialize timeline
function initTimeline() {
    const timeline = document.getElementById('timeline-container');
    
    CONFIG.timeline.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index === 0 ? 'visible' : ''}`;
        timelineItem.innerHTML = `
            <div class="timeline-icon">${item.icon}</div>
            <div class="timeline-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Love counter
function startLoveCounter() {
    const firstDate = new Date(CONFIG.firstDate);
    
    function updateCounter() {
        const now = new Date();
        const diff = now - firstDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days-count').textContent = days;
        document.getElementById('hours-count').textContent = hours;
        document.getElementById('minutes-count').textContent = minutes;
        document.getElementById('seconds-count').textContent = seconds;
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}

// Secret section
function setupSecretSection() {
    const unlockBtn = document.getElementById('unlock-btn');
    const passwordInput = document.getElementById('password-input');
    const hiddenContent = document.getElementById('hidden-content');
    
    unlockBtn.addEventListener('click', function() {
        if (passwordInput.value === CONFIG.secretPassword) {
            hiddenContent.style.display = 'block';
            unlockBtn.disabled = true;
            passwordInput.disabled = true;
            
            // Launch confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
            
            // Play success sound
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2015.mp3');
            audio.play();
        } else {
            passwordInput.style.borderColor = '#ff4757';
            passwordInput.style.boxShadow = '0 0 20px rgba(255, 71, 87, 0.5)';
            
            setTimeout(() => {
                passwordInput.style.borderColor = 'var(--primary)';
                passwordInput.style.boxShadow = 'none';
            }, 1000);
        }
    });
    
    // Allow Enter key to submit
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            unlockBtn.click();
        }
    });
}

// Initialize Swiper
function initSwiper() {
    new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });
}

// Scroll animations for timeline
function initScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Add click hearts effect
document.addEventListener('click', function(e) {
    if (e.target.id !== 'password-input' && e.target.id !== 'unlock-btn') {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '24px';
        heart.style.color = '#ff6b8b';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'heartbeat 0.5s ease';
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transform = 'translateY(-30px) scale(0.5)';
            heart.style.opacity = '0';
            setTimeout(() => heart.remove(), 500);
        }, 100);
    }
});
