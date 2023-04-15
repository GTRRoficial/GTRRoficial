(function () {
    const asks = document.getElementsByClassName('ask-container');
    for (let i = 0; i < asks.length; i++) {
        const title = asks[i].querySelector(".panel-head");
        const resp = asks[i].querySelector("p");
        const plus = title?.querySelector(".sign")?.querySelector(':first-child');
        const minus = title?.querySelector(".sign")?.querySelector(':last-child');
        title?.addEventListener('click', () => {
            if (resp?.style.display == '' || resp?.style.display == 'none') {
                resp?.style.setProperty('display', 'block');
                setTimeout(() => {
                    resp?.style.setProperty("transform", "scale(1)");
                    minus?.style.setProperty('display', 'block');
                    plus?.style.setProperty('display', 'none');
                }, 0)
            } else {
                resp?.style.setProperty("transform", "scale(1)");
                setTimeout(() => {
                    resp?.style.setProperty('display', 'none');
                    minus?.style.setProperty('display', 'none');
                    plus?.style.setProperty('display', 'block');
                }, 100)
            }
        })
    }
})()