const movies = {
    action: [
        { name: "John Wick", image: "images/movie_images/wick.jpg" },
        { name: "Die Hard", image: "images/movie_images/die.webp" },
        { name: "The Dark Knight", image: "images/movie_images/knight.webp" }
    ],
    comedy: [
        { name: "Superbad", image: "images/movie_images/superbad.jpg" },
        { name: "Hangover", image: "images/movie_images/hangover.jpeg" },
        { name: "Crazy, Stupid, Love", image: "images/movie_images/crazy.jpeg" }
    ],
    drama: [
        { name: "The Shawshank Redemption", image: "images/movie_images/shaw.jpg" },
        { name: "The Godfather", image: "images/movie_images/godfather.jpg" },
        { name: "The Social Network", image: "images/movie_images/social.jpg" },
    ],
    romance: [
        { name: "The Notebook", image: "images/movie_images/note.webp" },
        { name: "La La Land", image: "images/movie_images/lalala.jpg" },
        { name: "A Star is Born", image: "images/movie_images/star.jpeg "},
    ],
    'sci-fi': [
        { name: "Blade Runner 2049", image: "images/movie_images/blade.jpeg" },
        { name: "Inception", image: "images/movie_images/incep.jpg" },
        { name: "Interstellar", image: "images/movie_images/inter.jpg" },
    ],
    thriller: [
        { name: "Gone Girl", image: "images/movie_images/gone.jpg" },
        { name: "Zodiac", image: "images/movie_images/zodi.jpg" },
        { name: "Prisoners", image: "images/movie_images/prison.jpeg" }
    ]
};

function recommendMovie() {
    const genre1 = document.getElementById('genre1').value;
    const genre2 = document.getElementById('genre2').value;

    let recommendations = [];

    if (genre1 === genre2) {
        recommendations = movies[genre1];
    } else {
        recommendations = [
            ...movies[genre1].slice(0, 3), // Taking up to three from genre1
            ...movies[genre2].slice(0, 3)  // Taking up to three from genre2
        ];
    }

    const recommendationHTML = recommendations.length > 0
        ? recommendations.map(movie => `
            <div class="movie">
                <img src="${movie.image}" alt="${movie.name}">
                <p>${movie.name}</p>
            </div>
        `).join('')
        : 'No recommendations available.';

    document.getElementById('recommendation-result').innerHTML = recommendationHTML;
}
