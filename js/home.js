(function () {
    const asks = document.getElementsByClassName('ask-container');
    for (let i = 0; i < asks.length; i++) {
        const title = asks[i].querySelector("h2");
        const resp = asks[i].querySelector("p");
        const sign = title?.querySelector(".sign");
        title?.addEventListener('click', () => {
            if (resp?.style.display == '' || resp?.style.display == 'none') {
                resp?.style.setProperty('display', 'block');
                resp?.style.setProperty("animation", "fadeIn 1s");
                setTimeout(() => {
                    resp?.style.setProperty("transform", "scale(1)");
                }, 0)
                sign.innerHTML = '<img class="fade-in-image" src="./assets/icons/minus.png"></img>';
            } else {
                resp?.style.setProperty("transform", "scale(1)");
                resp?.style.setProperty("animation", "fadeIn 1s");
                sign.innerHTML = '<img class="fade-in-image" src="./assets/icons/plus.png"></img>';
                setTimeout(() => {
                    resp?.style.setProperty('display', 'none');
                }, 100)
            }
        })
    }
})()