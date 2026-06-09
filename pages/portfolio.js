const GITHUB_USER = 'averagecryptid';
const GITHUB_REPO = 'testing.art';
const GITHUB_FOLDER = 'images';

fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FOLDER}`)
    .then(res => res.json())
    .then(files => {
        const grid = document.getElementById('photogrid');
        grid.innerHTML = '';

        const imageFiles = files.filter(f => 
            f.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)
        );

        imageFiles.forEach(file => {
            const div = document.createElement('div');
            div.className = 'w3-third grid-item';
            div.dataset.category = 'all';
            div.innerHTML = `<img src="${file.download_url}" style="width:100%" alt="${file.name}">`;
            grid.appendChild(div);
        });
    })
    .catch(err => console.error('Could not load images:', err));

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
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("main-content").style.marginLeft = "250px";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
   document.getElementById("myOverlay").style.display = "none";
    document.getElementById("main-content").style.marginLeft = "0px";
}