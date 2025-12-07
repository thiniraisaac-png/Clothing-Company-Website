function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
}

function selectSize(button) {
    document.querySelectorAll('.size-options button').forEach(btn => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

function addToCart() {
    const selectedSize = document.querySelector('.size-options button.active');
    if (!selectedSize) {
        alert('Please select a size before adding to cart!');
        return;
    }
    alert('Added to cart: Women Over-sized T-shirt ${selectedSize.textContent}');
}