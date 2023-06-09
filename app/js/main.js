const open = document.querySelector(".navbar_open")
const close = document.querySelector(".navbar_close")
const active = document.querySelector(".navbar_active")
const body = document.querySelector(".scoll")

open.addEventListener("click",()=>{

    active.style.display = "flex"
    open.style.display = "none"
    close.style.display = "block"


})

close.addEventListener("click",()=>{

    active.style.display = "none"
    close.style.display = "none"
    open.style.display = "block"
})


const herosection = document.querySelector(".hero")

const footerelement = document.querySelector(".footer")

const scrollelement = document.createElement("div");
scrollelement.classList.add("totop");
scrollelement.innerHTML = `<i class="fa-solid fa-arrow-up scroll-top"></i>`;

footerelement.after(scrollelement);

const scrollTop = () => {
    herosection.scrollIntoView({behavior: "smooth"})
}

scrollelement.addEventListener("click", scrollTop)

