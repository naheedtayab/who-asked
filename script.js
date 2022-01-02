getRandomFact();

const fact = document.getElementById('fact');
const fact_btn = document.getElementById('fact_btn');
fact_btn.addEventListener('click', getRandomFact)

function getRandomFact() {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(resp => resp.json())
        .then(data => fact.innerHTML = `<p>${data.text}</p>`);
}