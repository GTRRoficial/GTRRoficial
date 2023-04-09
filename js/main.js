export function setAtributesForScreenReaders(element) {
    element.setAtribute("role", "status");
    element.setAtribute("aria-live", "polite");
}

window.onload = () => {
    setTimeout(() => {
        const pages = {
            index: "home",
            about: "about",
            "primeiros%20passos": "first-steps",
            faq: "faq",
            curadoria: "curadoria",
            manifesto: "manifesto",
            estatuto: "estatuto",
            projetos: "projetos",
            "projetos%20em%20andamento": "andamento",
            "projetos%20finalizados": "finalizado",
            membros: "membros",
            camaradas: "camaradas"
        }
        const actualPage = document.head.baseURI.split('/').pop()?.split('.')[0];
        const element = document.querySelectorAll(`[${pages[actualPage || "index"]}]`);
        element.forEach(elem => {
            elem?.setAttribute("style", "border-bottom: 0.2rem solid #000;");
        })
    }, 500)
}
