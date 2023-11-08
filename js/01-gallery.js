import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ul = document.querySelector(".gallery");
let instance;

function createGalleryItems() {
  const items = [];

  for (let i = 0; i < galleryItems.length; i++) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = galleryItems[i].original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = galleryItems[i].preview;
    img.dataset.source = galleryItems[i].original;
    img.alt = galleryItems[i].description;

    a.appendChild(img);
    li.appendChild(a);
    items.push(li);
  }

  ul.append(...items);
}

const selectLi = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImgSource = event.target.dataset.source;
  const selectedImgAlt = event.target.alt;

  instance = basicLightbox.create(
    `<img src="${selectedImgSource}" alt="${selectedImgAlt}">`
  );

  instance.show();
  ul.addEventListener("keydown", closeImg);
};

const closeImg = (event) => {
  event.preventDefault();
  if (event.code === "Space") {
    instance.close();
    ul.removeEventListener("keydown", closeImg);
  }
};

createGalleryItems();
ul.addEventListener("click", selectLi);
ul.addEventListener("keydown", closeImg);
