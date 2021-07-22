let movies = [
  'Avangers',
  'Liga de justicia',
  'Amanecer de los muertos'
];

console.log(movies);
console.log(movies[1]);

let genreMovies = {
  terror: ['Conjuro', 'La monja'],
  suspenso: ['El origen', 'La huerfana'],
  accion: movies,
};

console.log(genreMovies);
console.log(genreMovies['suspenso']);
console.log(genreMovies.suspenso);