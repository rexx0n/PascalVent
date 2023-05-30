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
let btnToModalSecond2 = document.querySelector('.comfort__info .btn')

btnToModalSecond.addEventListener('click', ()=> {
    modalSecond.classList.remove('modal__none')
})
btnToModalSecond2.addEventListener('click', ()=> {
    modalSecond.classList.remove('modal__none')
})
modalSecond.querySelector('.btn').addEventListener('click', ()=> {
    modalSecond.classList.add('modal__none')
})
//slider
const images = document.querySelectorAll('.portfolio__img')
const sliderLine = document.querySelector('.portfolio__line')
const images2 = document.querySelectorAll('.portfolio__img > img')
const btnLeft = document.querySelector('.portfolio__btn-left')
const btnRight = document.querySelector('.portfolio__btn-right')
let count = 0
let width
let translate = 0

function init() {
    console.log('rezise');
    images2.forEach( item => {
        item.style.width = width + 'px'
    })
    rollSlider()
}
window.addEventListener('resize', init)

init()

document.querySelector('.portfolio__btn-left').addEventListener('click', ()=> {
    images2[count].style.width = 270 +'px' 
    count--
    if(count < 0) {
        count = images.length -1
        translate = translate - -888
    }
    else {
        translate = translate + -296
    }
    rollSlider()
})

document.querySelector('.portfolio__btn-right').addEventListener('click', ()=> {
       images2[count].style.width = 270 +'px' 
    count++
    if (count >= images.length) {
        translate = 0
        count = 0
    }
    else {
        translate = translate - -296
    }
    rollSlider()
})

function rollSlider() {
    if(count > 0) {
        btnLeft.querySelector('.portfolio__svg--active').classList.remove('portfolio__none')
        btnLeft.querySelector('.portfolio__svg--not-active').classList.add('portfolio__none')
    }
    if (count === images.length -1) {
        btnRight.querySelector('.portfolio__svg--active').classList.add('portfolio__none')
        btnRight.querySelector('.portfolio__svg--not-active').classList.remove('portfolio__none')
    }
    else {
          btnRight.querySelector('.portfolio__svg--active').classList.remove('portfolio__none')
        btnRight.querySelector('.portfolio__svg--not-active').classList.add('portfolio__none')
    }
    if (count === 0) {
       btnLeft.querySelector('.portfolio__svg--active').classList.add('portfolio__none')
        btnLeft.querySelector('.portfolio__svg--not-active').classList.remove('portfolio__none')
    }
    sliderLine.style.transform = 'translate(-'+translate+'px)'
   images2[count].style.width = 500 +'px' 
   images2[count].style.height = 456 + 'px'
}

//slider2
const imagesClients = document.querySelectorAll('.clients__line > img')
const sliderLineClients = document.querySelector('.clients__line')
const btnLeftClients = document.querySelector('.clients__btn-left')
const btnRightClients = document.querySelector('.clients__btn-right')
let countClients = 0
let translateClients = 0


btnLeftClients.addEventListener('click', ()=> {
    countClients--
    if(countClients < 0) {
        countClients = imagesClients.length -1
        translateClients = translateClients - -870
        console.log(imagesClients.length);
    }
    else {
        translateClients = translateClients + -290
    }
    rollSliderCliennts()
    console.log(countClients);
})

btnRightClients.addEventListener('click', ()=> {
    countClients++
    if (countClients >= imagesClients.length) {
        translateClients = 0
        countClients = 0
    }
    else {
        translateClients = translateClients - -290
    }
    rollSliderCliennts()
})

function rollSliderCliennts() {
    if(countClients > 0) {
        btnLeftClients.querySelector('.clients__svg--active').classList.remove('clients__none')
        btnLeftClients.querySelector('.clients__svg--not-active').classList.add('clients__none')
    }
    if (countClients === imagesClients.length -1) {
        btnRightClients.querySelector('.clients__svg--active').classList.add('clients__none')
        btnRightClients.querySelector('.clients__svg--not-active').classList.remove('clients__none')
    }
    else {
          btnRightClients.querySelector('.clients__svg--active').classList.remove('clients__none')
        btnRightClients.querySelector('.clients__svg--not-active').classList.add('clients__none')
    }
    if (countClients === 0) {
       btnLeftClients.querySelector('.clients__svg--active').classList.add('clients__none')
        btnLeftClients.querySelector('.clients__svg--not-active').classList.remove('clients__none')
    }
    sliderLineClients.style.transform = 'translate(-'+translateClients+'px)'
}