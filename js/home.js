(function () {
    const asks = document.getElementsByClassName('ask-container');
    for (let i = 0; i < asks.length; i++) {
        const title = asks[i].querySelector("h2");
        const resp = asks[i].querySelector("p");
        const sign = title?.querySelector(".sign");
        console.log(sign)
        title?.addEventListener('click', () => {
            if (resp?.style.display == '' || resp?.style.display == 'none') {
                resp?.style.setProperty('display', 'block');
                setTimeout(() => {
                    resp?.style.setProperty("transform", "scale(1)");
                }, 0)
                sign.innerHTML = '-';
            } else {
                resp?.style.setProperty("transform", "scale(1)");
                sign.innerHTML = '+';
                setTimeout(() => {
                    resp?.style.setProperty('display', 'none');
                }, 100)
            }
        })
    }
})()