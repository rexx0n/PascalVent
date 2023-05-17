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