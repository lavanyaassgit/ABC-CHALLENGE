// Function to generate random colours
function changeColor() {

    let colors = ["green", "blue", "red"];

    let randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
}

// Select all h5 elements
let headings = document.querySelectorAll("h5");

// Add click event to every h5
headings.forEach(function(heading) {

    heading.addEventListener("click", function() {

        heading.style.color = changeColor();

    });

});