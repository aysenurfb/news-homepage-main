const HamburgerMenuOpenButton = document.querySelector('.hamburger-menu-open')
const HamburgerMenuCloseButton = document.querySelector('.close-icon')

HamburgerMenuOpenButton.addEventListener('click',()=> {
    const mobileMenu=document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.add("open");
})

HamburgerMenuCloseButton.addEventListener('click',()=> {
    const mobileMenu=document.querySelector(".hamburger-menu-wrapper");
    mobileMenu.classList.remove("open");
})