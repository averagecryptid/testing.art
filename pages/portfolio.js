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

function w3_open() {
  document.getElementById("sidebar").style.width = "25%";
   document.getElementById("photogrid").style.marginLeft = "25%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = 'block';
}

function w3_close() {
  document.getElementById("photogrid").style.marginLeft = "0%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
} 