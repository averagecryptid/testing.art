function filterImages(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.className = 'w3-button w3-white filter-btn';
    });
    event.target.className = 'w3-button w3-black filter-btn';

    document.querySelectorAll('.grid-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
