// Keys de la API de TMDB
const api = "api_key=1918dc87c9915196126eb5736b064c8f";
// URL de base
const baseUrl = "https://api.themoviedb.org/3";
// URL final con query request
const finalUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + api;
// URL de imagen
const imgUrl = "https://image.tmdb.org/t/p/original";


// Requests para información de películas 
const requests = {
    fetchPopular: `${baseUrl}/discover/movie?certification_country=ARG&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${baseUrl}/trending/all/week?${api}&language=es-ARG`,
    fetchNetflixOrignals: `${baseUrl}/discover/tv?${api}&with_networks=213&language=es-ARG`,
    fetchActionMovies: `${baseUrl}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${baseUrl}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${baseUrl}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${baseUrl}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${baseUrl}/discover/movie?${api}&with_genres=27`,
};


// Función para truncar el string de overview
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


// Banner
const createBanner = async () => {

    const res = await fetch(requests.fetchNetflixOrignals);
    const data = await res.json();

    console.log(data.results);

    // La película cambia con cada refresh
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    const banner = document.getElementById("browseBanner");
    const bannerTitle = document.getElementById("browseBannerTit");
    const bannerDesc = document.getElementById("bannerDescripcion");
    banner.style.backgroundImage = `url(${imgUrl}${setMovie.backdrop_path})`;
    bannerDesc.innerText = truncate(setMovie.overview, 150);
    bannerTitle.innerText = setMovie.name;
}


// Row de Originales de Netflix
const createOriginals = async () => {

    const res = await fetch(requests.fetchNetflixOrignals);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "ORIGINALES DE NETFLIX";
    row.appendChild(title);
    const rowPosters = document.createElement("div");
    rowPosters.className = "row__posters";
    row.appendChild(rowPosters);
    data.results.forEach(movie => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        const s = movie.name.replace(/\s+/g, "");
        poster.id = s;
        poster.src = imgUrl + movie.poster_path;
        rowPosters.appendChild(poster);

    });
}


// Más vistas
const createPopular = async () => {

    const res = await fetch(requests.fetchPopular);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Trending Now";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.poster_path;
        row_posters.appendChild(poster);

    });
}


// Mejores calificadas 
const createTrending = async () => {

    const res = await fetch(requests.fetchTrending);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Top Rated";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.poster_path;
        row_posters.appendChild(poster);

    });
}


// Acción
const createAction = async () => {

    const res = await fetch(requests.fetchActionMovies);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
}


// Comedia
const createComedy = async () => {
    const res = await fetch(requests.fetchComedyMovies);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
}


// Terror
const createHorror = async () => {
    const res = await fetch(requests.fetchHorrorMovies);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
}


// Románticas
const createRomance = async () => {
    const res = await fetch(requests.fetchRomanceMovies);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
}


// Documentales
const createDocumentaries = async () => {
    const res = await fetch(requests.fetchDocumentaries);
    const data = await res.json();

    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach(movie => {
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row__poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = imgUrl + movie.backdrop_path;
        row_posters.appendChild(poster);

    });
}

/* pageLoad para detener la ejecución del código en el cargado 
y asegurarnos de que las rows se rendericen en el orden correcto*/ 
const pageLoad = async () => {
    await createBanner();
    await createOriginals();
    await createPopular();
    await createTrending();
    await createAction();
    await createComedy();
    await createHorror();
    await createRomance();
    await createDocumentaries();
}

window.addEventListener("load", pageLoad);