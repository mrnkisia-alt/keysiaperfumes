document.addEventListener("DOMContentLoaded", () => {
    // --- Dynamic Product Catalog ---
    // You can easily manage your collection here. 
    // To add a new product, just add a new item to this array!
    const productCatalog = [
        { image: 'perfume1.jpeg', name: 'FAKHAN LATTAFA', price: '300.ksh' },
        { image: 'perfume2.jpeg', name: 'YARA', price: '300.ksh' },
        { image: 'perfume3.jpeg', name: 'CLUB DE NUIT INTENSE', price: '300.ksh' },
        { image: 'perfume4.jpeg', name: 'ECLAIRE', price: '300.ksh' },
        { image: 'perfume5.jpeg', name: 'perfume5', price: '300.ksh' },
        { image: 'perfume6.jpeg', name: 'MOUSUF', price: '300.ksh' },
        { image: 'perfume7.jpeg', name: '9PM', price: '300.ksh' },
        { image: 'perfume8.jpeg', name: '9PM', price: '300.ksh' },
        { image: 'perfume9.jpeg', name: 'MAYAR', price: '300.ksh' },
        { image: 'perfume10.jpeg', name: 'NOW BLACK', price: '300.ksh' }
    ];

    const catalogGrid = document.getElementById('catalog-grid');
    if (catalogGrid) {
        productCatalog.forEach((product, index) => {
            const delay = 0.8 + (index * 0.1); // Stagger the appearance
            const productHtml = `
                <div class="product-card-small glass-panel-small" style="opacity: 0; animation: fadeInUp 0.8s ease-out ${delay}s forwards;">
                    <div class="product-img-wrap">
                        <img src="static/${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        <div class="action-buttons-small">
                            <!-- Link directly to WhatsApp with pre-filled message for this product -->
                            <a href="https://wa.me/254706515679?text=Hello!%20I'm%20interested%20in%20ordering%20${product.name}." class="whatsapp-btn-small" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-whatsapp"></i> Order
                            </a>
                        </div>
                    </div>
                </div>
            `;
            catalogGrid.insertAdjacentHTML('beforeend', productHtml);
        });
    }
});
