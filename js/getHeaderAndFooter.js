(function () {
    getHeader();
    getFooter();
})()

async function getHeader() {
    let header = await fetch('./components/header/header.html')
        .then(res => res.text())
        .catch(err => err.message);
    document.getElementsByTagName('header')[0].innerHTML = header;
    document.getElementsByClassName('hamburger')[0].addEventListener('click', showHideMenu);
    const menu_mobile = document.getElementsByClassName('menu-mobile')[0];
    menu_mobile.addEventListener('click', hideMenu);
}

async function getFooter() {
    let footer = await fetch('./components/footer/footer.html')
        .then(res => res.text())
        .catch(err => err.message);
    document.getElementsByTagName('footer')[0].innerHTML = footer;
}

function showHideMenu() {
    const menu = document.getElementsByClassName('menu-mobile')[0];
    if (menu?.style.display == '' || menu?.style.display == 'none') {
        showMenu();
    } else {
        hideMenu();
    }
}

function hideMenu() {
    const menu = document.getElementsByClassName('menu-mobile')[0];
    const hamburger = document.getElementsByClassName('hamburger')[0];

    menu?.style.setProperty("display", "none");
    hamburger?.style.setProperty("transform", "rotate(0deg)");
    document.querySelector(".header>:last-child")?.style.setProperty("display", "none");
}

function showMenu() {
    const menu = document.getElementsByClassName('menu-mobile')[0];
    const hamburger = document.getElementsByClassName('hamburger')[0];

    menu?.style.setProperty('display', 'flex');
    document.querySelector(".header>:last-child")?.style.setProperty("display", "block");
    hamburger?.style.setProperty("transform", "rotate(-90deg)");
}