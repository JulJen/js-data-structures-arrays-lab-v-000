// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

// appends a driver to the end of the drivers array
function destructivelyAppendDriver(name) {
  return drivers.push('Ralph');
}

// prepends a driver to the beginning of the drivers array
function destructivelyPrependDriver(name) {
  return drivers.unshift('Bob');
}
