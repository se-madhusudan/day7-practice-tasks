let image = document.querySelector('#images');
let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');
let imgNum = document.querySelector('#imgNum');

let imgSources = [
    'https://images.pexels.com/photos/3284268/pexels-photo-3284268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/59989/elephant-herd-of-elephants-african-bush-elephant-africa-59989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/63330/geese-water-birds-waterfowl-63330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1299391/pexels-photo-1299391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2861847/pexels-photo-2861847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5306211/pexels-photo-5306211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/5777987/pexels-photo-5777987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1082179/pexels-photo-1082179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/117139/pexels-photo-117139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

];
let currentIndex = 0;
image.src = imgSources[0];
imgNum.innerText = `${currentIndex+1} / ${imgSources.length}`;

prevBtn.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = imgSources.length - 1;
    }
    image.src = imgSources[currentIndex];
    imgNum.innerText = `${currentIndex+1} / ${imgSources.length}`;
});

nextBtn.addEventListener('click', () => {
    if(currentIndex < imgSources.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    image.src = imgSources[currentIndex];
    imgNum.innerText = `${currentIndex+1} / ${imgSources.length}`;
});

setInterval(() => {
    if(currentIndex < imgSources.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    image.src = imgSources[currentIndex];
    imgNum.innerText = `${currentIndex+1} / ${imgSources.length}`;
}, 3000);