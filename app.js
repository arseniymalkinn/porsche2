const slider = document.querySelector('#slider');
const slides = document.querySelectorAll('.slides .slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');


let currentSlide = 0;


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}


function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}


nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


showSlide(currentSlide);


setInterval(nextSlide, 4500);


const tg = {
    token: "7749323054:AAHqxyR5hL5Oj4WLQWVm3ssXDCopIy0l-_o",
    chat_id: "114756576"
}

@param {String} the text to send
function sendMessage(text) {
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`;
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

const formInputs = document.querySelectorAll('.form__input');
const formButton = document.querySelector('.form__button')

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const message = `имя: ${formInputs[0].value} \nномер телефона: ${formInputs[1].value}`

    sendMessage(message);
    formInputs[0].value = ""
    formInputs[1].value = ""
})
