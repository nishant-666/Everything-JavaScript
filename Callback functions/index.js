//Example 1
const movies = [
  {
    title: `A New Hope`,
    body: `After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`,
  },
  {
    title: `The Empire Strikes Back`,
    body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.`,
  },
];

const getMovies = () => {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
};

setTimeout(getMovies, 1000); //1 sec === 1000 ms

//Example 2
const names = ["Uday"];

function a(b) {
  if (names.includes("Nishant")) {
    names.forEach((name) => {
      console.log(name);
    });
    b();
  } else {
    console.error("Error!");
  }
}

function b() {
  console.log("B");
}

a(b);
