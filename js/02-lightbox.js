import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ul = document.querySelector(".gallery");

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
    img.alt = galleryItems[i].description;

    a.appendChild(img);
    li.appendChild(a);
    items.push(li);
  }

  ul.append(...items);


function createGallery() {
  const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

createGallery();
