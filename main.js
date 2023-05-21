//Swith
let btnUp = document.querySelector('.services__btn--up')
let btnDown = document.querySelector('.services__btn--down')
let ventilator = document.querySelector('.services__ventilator')
let airConditioner = document.querySelector('.services__Air-conditioner')

btnDown.addEventListener('click', ()=> {
    btnDown.classList.add('services__btn--active')
    btnUp.classList.remove('services__btn--active')
    ventilator.classList.add('services__none')
    airConditioner.classList.remove('services__none')
})
btnUp.addEventListener('click', ()=> {
    btnUp.classList.add('services__btn--active')
    btnDown.classList.remove('services__btn--active')
    airConditioner.classList.add('services__none')
    ventilator.classList.remove('services__none')
})
//header scroll
let header = document.querySelector('.header'),
    headerH = document.querySelector('.header').clientHeight
let main = document.querySelector('.main')
document.onscroll = function () {
    let scroll = window.scrollY
    if (scroll > headerH) {
        header.classList.add('header__scroll')
        main.classList.add('main--pt')
    }
    else {
        header.classList.remove('header__scroll')
        main.classList.remove('main--pt')
    }
}
// header.addEventListener('focusout', ()=> {
//     header.classList.add('header__scroll')
//     main.classList.add('main--pt')
// })


//modal
let modal = document.querySelector('.modal')
let btnToModal = document.querySelector('.header .btn')

btnToModal.addEventListener('click', ()=>{
    modal.classList.remove('modal__none')
})
modal.querySelector('.btn').addEventListener('click', ()=> {
    modal.classList.add('modal__none')
})
//second modal
let modalSecond = document.querySelector('.modal__second')
let btnToModalSecond = document.querySelector('.main > .btn')

btnToModalSecond.addEventListener('click', ()=> {
    modalSecond.classList.remove('modal__none')
})

modalSecond.querySelector('.btn').addEventListener('click', ()=> {
    modalSecond.classList.add('modal__none')
})
