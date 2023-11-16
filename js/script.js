
const imagesList = [
    './img/berlin.jpg',
    './img/london.jpg',
    './img/madrid.jpg',
    './img/paris.jpg',
    './img/prague.png',
];

const wrapperElement = document.querySelector('section.wrapper');

// ? popoliamo l'html dinamicamente
for (let i=0; i < imagesList.length; i++){
    const newImageElement = document.createElement('img');
    newImageElement.src = imagesList[i];
    wrapperElement.appendChild(newImageElement);
}

let activeIndex = 0;
const imageElements = document.querySelectorAll('main section.wrapper img');

imageElements[activeIndex].classList.add('active');


// ? devo richiamare il bottone
const nextButton = document.querySelector('button.next');

nextButton.addEventListener('click', function(){
    console.log('Next button has been clicked');

    // # togliere active a chi ce l'ha
    imageElements[activeIndex].classList.remove('active');

    // % aggiungo uno all'activeIndex
    // activeIndex++
    activeIndex = activeIndex + 1;

    // % aggiungo la classe active al nuovo elemento con activeIndex
    imageElements[activeIndex].classList.add('active');
});



const prevButton = document.querySelector('button.prev');

prevButton.addEventListener('click', function(){
    imageElements[activeIndex].classList.remove('active');

    // ? decremento active index
    activeIndex = activeIndex - 1;

    imageElements[activeIndex].classList.add('active');
});