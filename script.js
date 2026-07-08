// Регистрируем плагин ScrollTrigger в системе GSAP
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// 1. АНИМАЦИЯ ДЛЯ СЕКЦИИ "O NAS"
// ==========================================
gsap.from(".about-text", {
    x: -150,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 90%",
        end: "top 30%",
        scrub: 1
    }
});

gsap.from(".about-image-wrapper", {
    x: 150,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 90%",
        end: "top 30%",
        scrub: 1
    }
});

// ==========================================
// 2. APPLE-СКРОЛЛ ДЛЯ КАСКАДНОЙ "VITRAGE TIMELINE"
// ==========================================
gsap.utils.toArray(".timeline-item").forEach((item) => {
    const img = item.querySelector(".item-img-box");
    const text = item.querySelector(".item-text-pure");

    if (img) {
        gsap.from(img, {
            opacity: 0,
            y: 50,
            scale: 0.95,
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "top 45%",
                scrub: 1.2
            }
        });
    }

    if (text) {
        gsap.from(text, {
            opacity: 0,
            y: 30,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "top 50%",
                scrub: 1.2
            }
        });
    }
});

// ==========================================
// 3. APPLE-СКРОЛЛ ДЛЯ РАЗДЕЛЕННЫХ БЛОКОВ МАГАЗИНА (SKLEP)
// ==========================================
gsap.utils.toArray(".shop-section-block").forEach((block) => {
    const cards = block.querySelectorAll(".product-card");
    const title = block.querySelector(".shop-section-title");

    if (title) {
        gsap.from(title, {
            opacity: 0,
            x: -30,
            scrollTrigger: {
                trigger: block,
                start: "top 85%",
                end: "top 60%",
                scrub: 1
            }
        });
    }

    if (cards.length > 0) {
        gsap.from(cards, {
            opacity: 0,
            scale: 0.92,
            y: 40,
            stagger: 0.15,
            scrollTrigger: {
                trigger: block,
                start: "top 75%",
                end: "top 45%",
                scrub: 1
            }
        });
    }
});

// ==========================================
// 4. ФУНКЦИЯ ДЛЯ МОДАЛЬНОГО ОКНА ЗАКАЗА (ЗАДЕЛ ПОД БУДУЩЕЕ)
// ==========================================
function openOrderModal(productName) {
    console.log("Wybrano produkt do zamówienia:", productName);
    // Сюда мы повесим логику открытия всплывающего окна
}

// ==========================================
// 4. APPLE-СКРОЛЛ ДЛЯ ШАГОВ ЗАКАЗА И ФОРМЫ
// ==========================================
gsap.from(".step-card", {
    opacity: 0,
    scale: 0.9,
    y: 30,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".flow-steps-grid",
        start: "top 80%",
        end: "top 45%",
        scrub: 1
    }
});

gsap.from(".order-form-container", {
    opacity: 0,
    y: 60,
    scale: 0.96,
    scrollTrigger: {
        trigger: ".order-form-container",
        start: "top 85%",
        end: "top 55%",
        scrub: 1.2
    }
});

// Заглушка отправки формы, чтобы страница не перезагружалась
function handleFormSubmit(event) {
    event.preventDefault();
    alert("Dziękujemy! Zgłoszenie zostało wysłane. Skontaktujemy się z Tobą wkrótce.");
}


// ==========================================
// 5. APPLE-СКРОЛЛ ДЛЯ ПОЛНОЭКРАННОГО БЛОГА
// ==========================================
if (document.querySelector(".vitrage-blog-half")) {
    const blogTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".vitrage-blog-half",
            start: "top 90%",  // Начинает собираться, когда макушка секции показалась снизу
            end: "top 20%",    // Полностью встает на место
            scrub: 1.2
        }
    });

    blogTimeline.from(".blog-image-side", { xPercent: -30, opacity: 0 }, 0)
                .from(".blog-text-side", { xPercent: 30, opacity: 0 }, 0);
}