document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.portfolio-link');
    const contentDiv = document.getElementById('portfolio-content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.getAttribute('href');

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data;
                    window.history.pushState({ path: url }, '', url);
                })
                .catch(error => console.error('Error loading portfolio:', error));
        });
    });
});
