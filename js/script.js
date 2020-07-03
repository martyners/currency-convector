let polishZlotyForEuro = document.querySelector(".js-polishZlotyForEuro");
let euroRate = document.querySelector(".js-euroRate");
let plEuroResponse = document.querySelector(".js-plEuroResponse")
let formElementPlEuro = document.querySelector(".js-formPlEuro");

formElementPlEuro.addEventListener("input", (event) => {
    let exchange = (polishZlotyForEuro.value * euroRate.value);
    plEuroResponse.innerText = `${polishZlotyForEuro.value} zł możesz wymienić na ${exchange.toFixed(2)} euro`;
})


let polishZlotyForOther = document.querySelector(".js-polishZlotyForOther");
let formElementPlOther = document.querySelector(".js-formPlOther");
let plOtherResponse = document.querySelector(".js-plOtherResponse");
let currencySelected = document.querySelector(".js-currencySelected");

formElementPlOther.addEventListener("submit", (event) => {
    event.preventDefault();
    if (currencySelected.value === "USD") {
        let exchange = (polishZlotyForOther.value * 0.2526)
        plOtherResponse.innerText = `${polishZlotyForOther.value} zł możesz wymienić na ${exchange.toFixed(2)} USD`
    } else if (currencySelected.value === "GBP") {
        let exchange = (polishZlotyForOther.value * 0.2039)
        plOtherResponse.innerText = `${polishZlotyForOther.value} zł możesz wymienić na ${exchange.toFixed(2)} GBP`
    } else {
        let exchange = (polishZlotyForOther.value * 0.3519)
        plOtherResponse.innerText = `${polishZlotyForOther.value} zł możesz wymienić na ${exchange.toFixed(2)} SGD`
    }
});