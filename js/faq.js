(function () {
    const asks = document.getElementsByClassName('ask-container');
    for (let i = 0; i < asks.length; i++) {
        const title = asks[i].querySelector("h2");
        const resp = asks[i].querySelector("p");
        const img = title?.querySelector("img");

        title?.addEventListener('click', () => {
            if (resp?.style.display == '' || resp?.style.display == 'none') {
                resp?.style.setProperty('display', 'block');
                setTimeout(() => {
                    resp?.style.setProperty("transform", "scale(1)");
                }, 100)
                img?.style.setProperty("transform", "rotate(90deg)");
            } else {
                resp?.style.setProperty("transform", "scale(0)");
                img?.style.setProperty("transform", "rotate(0deg)");
                setTimeout(() => {
                    resp?.style.setProperty('display', 'none');
                }, 500)
            }
        })
    }
})()