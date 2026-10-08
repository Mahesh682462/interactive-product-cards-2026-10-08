document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const productGrid = document.getElementById('product-grid');

    // Simulate an API call or resource loading time
    setTimeout(() => {
        loader.classList.add('hidden'); // Hide the loader
        productGrid.classList.remove('hidden'); // Show the product grid
    }, 2000); // 2 seconds delay
});