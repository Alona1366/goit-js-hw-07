import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// console.log(simpleLightbox);
const imgGalleryEl = document.querySelector('.gallery');

const markupGallery = createMarkUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;
imgGalleryEl.addEventListener('click', onClickImg);

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

let instance = "";

function onClickImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return };
    instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
    );
    instance.show();
    document.addEventListener('keydown', onModalCloseToEscape); 
    }
    function onModalCloseToEscape (evt) {
        if (evt.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onModalCloseToEscape);

        }
    }

new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionSelector: "img",
    captionType: "alt",
    captionPosition: "bottom",
});