const h1 = document.querySelector("h1");
const home = document.querySelector("#home");
const buttons = document.querySelector("#buttons");


const onScroll = ({ target }) => {
    const scrollPosition = target.scrollingElement.scrollTop;

    if (scrollPosition > 150) {
        home.style.backgroundSize = "150%";
        h1.style.opacity = 0;
        h1.style.translate = "0 -50px";
        h1.style.scale = "0.9";
        buttons.style.opacity = 0;
        buttons.style.translate = "0 -50px";
        buttons.style.scale = "0.8";
    } else {
        home.style.backgroundSize = "180%";
        h1.style.opacity = 1;
        h1.style.translate = "0";
        h1.style.scale = "1";
        buttons.style.opacity = 1;
        buttons.style.translate = "0";
        buttons.style.scale = "1"; 
    }
};

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

const navKey = document.querySelectorAll(".nav-key");

navKey.forEach((link) => link.addEventListener("click", () => {
    ul.classList.remove("show");
})
);

document.addEventListener("scroll", onScroll);




const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    )
}

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 2.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el, 1.25)) {
            hideScrollElement(el);
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});


