let form = document.querySelector("form");
let inputField = document.querySelector(".inputField");
let movieContainer = document.querySelector(".container");

const getMovieInfo = async (movieName) => {
    try {
        const ApiKey = "9bfbe38a"; //imdb your api key
        const response = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&t=${movieName}`);
        const data = await response.json();
        console.log(data);
        showmovieData(data);
    } 
    catch (error) {
        movieContainer.innerHTML = `Data Not Found!!!`;
    }
}

const showmovieData = (data) =>{
    movieContainer.innerHTML = ""; // two movie in the same page so use that line so one time one movie come only
    movieContainer.classList.add('movie-conatiner'); //class anem of movieContainer
    const {Title, imdbRating, Genre, Released, Runtime, Actors, Director, Poster } = data; //keys of imdb api

    const movieElement  = document.createElement('div');
    movieElement.classList.add('movie_title_imd');
 // movieElement inside two keys title and imdbrating
    movieElement.innerHTML = `<h2>${Title}</h2>
    <p><strong>Rating : &#11088</strong>${imdbRating}</p>`;
 // movieGenreElement inside only one key genre
    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(",").forEach(element =>{// all element in genre key use via foreach loop
        const p = document.createElement('p');
        p.innerHTML = element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieGenreElement);
 // hear use += (operator) so movielement before data is not remove they also have add in movieElement
    movieElement.innerHTML += ` 
    <p><strong>Released Date: </strong>${Released}</p>
    <p><strong> Duration: </strong>${Runtime}</p>
    <p><strong>Cast: </strong>${Actors}</p>
    <p><strong>Director Name: </strong>${Director}</p>
    `;

    const moviePoster = document.createElement('div');
    moviePoster.classList.add('movie-poster');
    moviePoster.innerHTML = `<img src="${Poster}">`;

    movieContainer.appendChild(moviePoster);//first poster add in moviecontainer
    movieContainer.appendChild(movieElement);//sec data of movie is added
}

form.addEventListener("submit" ,(event) => {
    event.preventDefault();
    let inputValue = inputField.value;
    if(inputValue !== ''){
        getMovieInfo(inputValue);
    }
    if(inputValue === ""){
        movieContainer.innerHTML = `Please Search Movie Name!!!`;
    }
});
