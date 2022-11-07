{
    const welcome = () => {
        console.log("Witam Tych, którzy tutaj zaglądają!");
    }
    
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("body__dark");
        themeName.innerText = body.classList.contains("body__dark") ? "jaśniejszy" : "ciemniejszy";
    };
    
    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    
        welcome();
    };

    init();
}