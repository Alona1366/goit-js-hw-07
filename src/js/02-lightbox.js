import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// console.log(simpleLightbox);

const imgGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkUp(galleryItems);

imgGalleryEl.innerHTML = markupGallery;

function createMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class ="gallery__item">
        <a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </div>`
        }).join("");
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
    captionPosition: "bottom",
});