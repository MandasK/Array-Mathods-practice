const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let mathyNumbers = integers.sort((a, b) => b-a)
.filter((num) => {
    return num < 19
}).forEach((num) => {
    num = num * 1.5 - 1
    let numberHTML = document.querySelector(".numbers")
    numberHTML.innerHTML += `<h2>${num}</h2>`
})





// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.