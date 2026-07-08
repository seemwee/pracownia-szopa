

// Импортируем нужные функции из официального CDN Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Твой личный конфиг Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDa6zMGsTQaS1_Bm2dC-5aw5yfQ6cyDSBw",
    authDomain: "pracownia-szopa.firebaseapp.com",
    projectId: "pracownia-szopa",
    storageBucket: "pracownia-szopa.firebasestorage.app",
    messagingSenderId: "288892800012",
    appId: "1:288892800012:web:006d0e10d7fdb734153229",
    measurementId: "G-MD9KVDR50N",
    databaseURL: "https://pracownia-szopa-default-rtdb.europe-west1.firebasedatabase.app"
};

// Инициализируем базу данных на главной странице
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const productsRef = ref(db, 'products');

// ДИНАМИЧЕСКИЙ ВЫВОД ТОВАРОВ ИЗ БАЗЫ НА ВИТРИНУ
const shopContainer = document.getElementById('main-shop-container');

if (shopContainer) {
    onValue(productsRef, (snapshot) => {
        const data = snapshot.val();
        shopContainer.innerHTML = ''; // Очищаем контейнер перед рендером

        if (!data) {
            shopContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.6;">Obecnie brak gotowych witraży. Skontaktuj się z nami, aby złożyć zamówienie indywidualne! 🐾</p>';
            return;
        }

        for (let id in data) {
            const item = data[id];
            
            // Умная польская грамматика для окончаний женского рода
            const isWazkaOrPszczola = item.title && (item.title.toLowerCase().includes('ważka') || item.title.toLowerCase().includes('pszczółka'));
            let badgeText = item.available ? (isWazkaOrPszczola ? 'Dostępna' : 'Dostępny') : 'Niedostępny';
            let badgeClass = item.available ? 'badge-ready' : 'badge-no';

            // 1. Создаем саму структуру карточки через безопасный DOM-объект
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-img-box">
                    <img src="${item.img || 'pics/icon.png'}" alt="Witraż ${item.title || 'Pracownia Szopa'}">
                    <span class="product-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="product-info">
                    <h3>Witraż "${item.title || 'Bez nazwy'}"</h3>
                    <p class="product-desc">${item.desc || 'Ręcznie robiony witraż.'}</p>
                    <div class="product-footer">
                        <span class="product-price">${item.price || 0} PLN</span>
                    </div>
                </div>
            `;

            // 2. Отдельно создаем кнопку заказа (защита от ошибок Content Security Policy)
            const buyBtn = document.createElement('button');
            buyBtn.className = 'product-btn';
            buyBtn.innerText = 'Kup teraz';
            
            // Навешиваем клик, который открывает твою стандартную модалку заказа
            buyBtn.addEventListener('click', () => {
                if (typeof openOrderModal === 'function') {
                    openOrderModal(item.title || 'Zamówienie');
                }
            });

            // 3. Собираем элементы вместе
            card.querySelector('.product-footer').appendChild(buyBtn);
            shopContainer.appendChild(card);
        }
    });
}
