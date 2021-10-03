const images = [
    'images/pic-1.jpeg',
    'images/pic-2.jpeg',
    'images/pic-3.jpeg',
    'images/pic-4.jpeg',
    'images/pic-5.jpeg',
    'images/pic-6.jpeg',
    'images/pic-7.jpeg',
    'images/pic-8.jpeg',
    'images/pic-9.jpeg',
    'images/pic-10.jpeg',
    'images/pic-11.jpeg',
    'images/pic-12.jpeg'
];

let imageIndex = 0;
const imageId = document.getElementById('imageId');
setInterval(() => {
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    const imgUrl = images[imageIndex];
    imageId.setAttribute('src', imgUrl);
    imageIndex++;
}, 1000);