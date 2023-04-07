(function () {
    getHeader();
    getFooter();
})()

async function getHeader() {
    let header = await fetch('./components/header/header.html')
        .then(res => res.text())
        .catch(err => err.message);
    document.getElementsByTagName('header')[0].innerHTML = header;
}

async function getFooter() {
    let footer = await fetch('./components/footer/footer.html')
        .then(res => res.text())
        .catch(err => err.message);
    document.getElementsByTagName('footer')[0].innerHTML = footer;
}