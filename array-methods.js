const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planets.forEach(planet => {
const planetEl = document.getElementById("planets")
let planetHTML = `<h3>${planet}</h3>`
planetEl.innerHTML += planetHTML

})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalizedPlanets = planets.map(planet => {
    return planet[0].toUpperCase()

})
console.log(capitalizedPlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet => {
    let ePlanet = false

    if(planet.includes("e")) {
        ePlanet = true
    }
    
    return ePlanet
        })

console.log(ePlanets)