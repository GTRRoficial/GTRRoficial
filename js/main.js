export function setAtributesForScreenReaders(element) {
    element.setAtribute("role", "status");
    element.setAtribute("aria-live", "polite");
}

window.onload = () => {
    setTimeout(() => {
        const pages = {
            index: "home",
            faq: "faq"
        }
        const actualPage = document.head.baseURI.split('/').pop()?.split('.')[0];
        const element = document.querySelector(`[${pages[actualPage || "index"]}]`);
        element?.setAttribute("style", "border-bottom: 0.2rem solid #000;");
    }, 500)
}
