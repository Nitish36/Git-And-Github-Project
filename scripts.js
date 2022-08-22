const header = document.querySelector('header');
const h1 = document.querySelector('h1');

let image = true;
let title = true;

const changeImage=()=>
{
    image = !image;
    title = !title;
    header.style.backgroundImage = image?'url("bird1.jpg")' : 'url("bird2.jpg")';
    h1.textContent = title ?'Bird1':'Bird2';
}
header.addEventListener('click',changeImage);