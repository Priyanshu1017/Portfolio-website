// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
// --------- Python
var container = document.getElementById("container");

document.getElementById("python").addEventListener("click", function () {
    if (container.style.display === "none") {
        container.style.display = "block";
        container.style.top = "11px";
    } else {
        container.style.display = "none";
        container.style.top = "100%";
    }
});

container.addEventListener("click", function (event) {
    event.stopPropagation();
    container.style.display = "none";
    container.style.top = "100%";
});

// --------- Javascript

var javascript = document.getElementById("javascript");

document.getElementById("js").addEventListener("click", function () {
    if (javascript.style.display === "none") {
        javascript.style.display = "block";
        javascript.style.top = "11px";
    } else {
        javascript.style.display = "none";
        javascript.style.top = "100%";
    }
});

javascript.addEventListener("click", function (event) {
    event.stopPropagation();
    javascript.style.display = "none";
    javascript.style.top = "100%";
});

// ----------HTML--------

var html = document.getElementById("html");

document.getElementById("htm").addEventListener("click", function () {
    if (html.style.display === "none") {
        html.style.display = "block";
        html.style.top = "11px";
    } else {
        html.style.display = "none";
        html.style.top = "100%";
    }
});

html.addEventListener("click", function (event) {
    event.stopPropagation();
    html.style.display = "none";
    html.style.top = "100%";
});

// -------------CSS------------

var css = document.getElementById("css");

document.getElementById("cs").addEventListener("click", function () {
    if (css.style.display === "none") {
        css.style.display = "block";
        css.style.top = "11px";
    } else {
        css.style.display = "none";
        css.style.top = "100%";
    }
});

css.addEventListener("click", function (event) {
    event.stopPropagation();
    css.style.display = "none";
    css.style.top = "100%";
});
