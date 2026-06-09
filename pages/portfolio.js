fetch('../images.json')
    .then(res => res.json())
    .then(images => {
        const grid = document.getElementById('photogrid');
        grid.innerHTML = '';

        images.forEach(image => {
            const div = document.createElement('div');
            div.className = 'w3-third grid-item';
            div.dataset.category = image.category;
            div.innerHTML = `<img src="../images/${image.file}" style="width:100%" alt="${image.file}">`;
            grid.appendChild(div);
        });
    })
    .catch(err => console.error('Could not load images:', err));

function filterImages(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('w3-black', 'active');
        btn.classList.add('w3-white');
    });
    event.target.classList.remove('w3-white');
    event.target.classList.add('w3-black', 'active');

    document.querySelectorAll('.grid-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function w3_open() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("main-content").style.marginLeft = "250px";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("main-content").style.marginLeft = "0px";
}