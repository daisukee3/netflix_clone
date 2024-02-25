
const API_KEY = "d35eb0f035c56531be16bd72014fdde8"; // .envを読み込む形に変える

export const requests ={
    feachTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    feachNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    feactTopRated:`/discover/tv?api_key=${API_KEY}&languager=en-us`,
    feactActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    feactComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    feactHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    feactRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    feactDocumentMovies:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}