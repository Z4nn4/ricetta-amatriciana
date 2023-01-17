console.log('Sito online');
console.log('vuoi fare la pasta allamatriciana?')

 var titolo = ("amatriciana");


let pageTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "torna ora"
})
window.addEventListener("focus", () => {
    document.title = "amatriciana"
})
let currentURL = window.location.href;
console.log(currentURL)
