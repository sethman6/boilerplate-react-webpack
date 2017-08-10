import request from 'superagent'

// const apiUrl = "https://api.themoviedb.org/3/search/movies"
// const apiKey = { "apikey": "cc29287d88e7080c78b1169f92082e58" }

export function getYoda(movies) {
    request
        .get('https://api.themoviedb.org/3/search/movie')
        // Sets query on the URL get request
        .query({
            api_key: 'cc29287d88e7080c78b1169f92082e58',
            query: query
        })
        .then(result => {
            // Map through results to give relevant information
            const movies = result.body.results.map((query) => {
                return {
                    id: query.id,
                    name: query.title,
                    profilePath: query.profile_path
                }
            })
            return movies
        })
}