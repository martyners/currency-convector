{

    const onFormInput = () => {
        const polishZlotyForEuro = document.querySelector(".js-polishZlotyForEuro");
        const euroRate = document.querySelector(".js-euroRate");
        const plEuroResponse = document.querySelector(".js-plEuroResponse")
        const exchange = (polishZlotyForEuro.value * euroRate.value);
        
        plEuroResponse.innerText = `${polishZlotyForEuro.value} zł możesz wymienić na ${exchange.toFixed(2)} euro`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const polishZlotyForOther = document.querySelector(".js-polishZlotyForOther");
        const plOtherResponse = document.querySelector(".js-plOtherResponse");
        const currencySelected = document.querySelector(".js-currencySelected");

        if (currencySelected.value === "USD") {
            const exchange = (polishZlotyForOther.value * 0.2526)
            plOtherResponse.innerText = `${polishZlotyForOther.value} zł możesz wymienić na ${exchange.toFixed(2)} USD`
        } else if (currencySelected.value === "GBP") {
            const exchange = (polishZlotyForOther.value * 0.2039)
            plOtherResponse.innerText = `${polishZlotyForOther.value} zł możesz wymienić na ${exchange.toFixed(2)} GBP`
        } else {
            const exchange = (polishZlotyForOther.value * 0.3519)
            plOtherResponse.innerText = `${polishZlotyForOther.value} zł możesz wymienić na ${exchange.toFixed(2)} SGD`
        };
    };


    const init = () => {
        const formElementPlEuro = document.querySelector(".js-formPlEuro");
        formElementPlEuro.addEventListener("input", (onFormInput));

        const formElementPlOther = document.querySelector(".js-formPlOther");
        formElementPlOther.addEventListener("submit", (onFormSubmit));
    };

    init();

};