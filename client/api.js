import request from 'superagent'

// const apiUrl = "https://api.themoviedb.org/3/search/movies"
// const apiKey = { "apikey": "cc29287d88e7080c78b1169f92082e58" }

export function getYoda() {
    request
        .get('https://api.themoviedb.org/3/search/movie')
        // Sets query on the URL get request
        .query({
            api_key: 'cc29287d88e7080c78b1169f92082e58',
            query: movie
        })
        .then(result => {
            // Map through results to give relevant information
            const movies = result.body.results.map((movie) => {
                    return {
                        id: movie.id,
                        name: movie.name,
                        profilePath: movie.profile_path
                    }
                })
                // Dispatched receive actors in order to populate the store
            return movies
        })
}