document.addEventListener('DOMContentLoaded', function() {
    //clave de TMDB
    const apiKey = 'efe0bf78b5e791ce214d15556e76577b';  
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`)
        .then(response => response.json())
        .then(data => {
            const apiContent = document.getElementById('api-content');
            data.results.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.className = 'movie-card';
                movieElement.innerHTML = `
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.overview}</p>
                `;
                apiContent.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});