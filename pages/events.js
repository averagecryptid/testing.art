fetch('workshops.json')
    .then(res => res.json())
    .then(events => {
        events.sort((a, b) => new Date(a.date) - new Date(b.date));

        const grid = document.getElementById('cards');
        grid.innerHTML = '';

        events.forEach(event => {
            const div = document.createElement('div');
            div.className = 'w3-third';
            div.innerHTML = `
                <div class="w3-card">
                    <img src="../workshops/${event.file}" alt="${event.name}" onclick="onClick(this)" style="width:100%">
                    <div class="w3-container">
                    </div>
                </div>
            `;
            grid.appendChild(div);
        });
    })
    .catch(err => console.error('Could not load workshops:', err));

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}