const images = [
    'pic-1.jpeg',
    'pic-2.jpeg',
    'pic-3.jpeg',
    'pic-4.jpeg',
    'pic-5.jpeg',
    'pic-6.jpeg',
    'pic-7.jpeg',
    'pic-8.jpeg',
    'pic-9.jpeg',
    'pic-10.jpeg',
    'pic-11.jpeg',
    'pic-12.jpeg',
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