const movieContainer = document.querySelector('.movie-container');
const search = document.querySelector('.search');
const form = document.querySelector('form');

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';


getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  //console.log(data.results)
  showMovies(data.results)
}

function showMovies(data) {
  movieContainer.innerHTML = "";
  data.forEach((movieData) => {
    const { original_title, poster_path, vote_average, vote_count, overview } = movieData;
    //console.log(original_title)
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-card");
    movieEl.innerHTML =  `
      <img
        src="${IMG_PATH + poster_path}"
        alt="img"
      />
      <div class="movie-title">
        <h3>${original_title}</h3>
        <span class=${getClassByRating(vote_average)}>${vote_average}  ✰ </span>
      </div>
      <div class="movie-details">
        <h3>Overview</h3>
        <p>
          ${overview}
        </p>
      </div>

    `
   movieContainer.appendChild(movieEl);
 })
}

function getClassByRating(rating){
  //console.log(rating)
  if(rating<=6){
    return "red"
  }
  else if(rating>6 && rating<=8){
    return "yellow"
  }
  else{
    return "green"
  }
}

//search functionality
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchValue = search.value;
  console.log(searchValue)
  if(searchTerm ){
    getMovies(SEARCH_API+searchTerm);
    search.value=""
  }
  else{
    window.location.reload();
  }
})

search.addEventListener('change', (e) => {
  const searchValue = e.target.value;
  if(searchValue){
    getMovies(SEARCH_API+searchValue);
    search.value="";
  }
  else{
    window.location.reload();
  }
})

search.addEventListener('keyup', (e) => {
  const searchValue = e.target.value;
  console.log(searchValue);
  if(searchValue){
    getMovies(SEARCH_API+searchValue);
  }
  else{
    window.location.reload();
  }

})

//
// function searchMovie(searchTerm){
//   if(searchTerm ){
//     getMovies(SEARCH_API+searchTerm);
//     search.value=""
//   }
//   else{
//     window.location.reload();
//   }
// }
