let image = document.querySelector('#images');
let prevBtn = document.querySelector('#prevBtn');
let nextBtn = document.querySelector('#nextBtn');

let imgSources = [
    'https://images.pexels.com/photos/17974337/pexels-photo-17974337/free-photo-of-dog-standing-on-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if(currentIndex > 0) {
        while(currentIndex > 0) {
            image.src = imgSources[currentIndex];
            currentIndex--;
        }
    } else {
        currentIndex = imgSources.length - 1;
        while(currentIndex > 0) {
            image.src = imgSources[currentIndex];
            currentIndex--;
        }

    }
});

nextBtn.addEventListener('click', () => {

})