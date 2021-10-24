const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const refs = {
  galleryRef: document.querySelector(".gallery"),
};

const galleryList = ({ url, alt }) => {
  const galleryItem = document.createElement("li");
  galleryItem.insertAdjacentHTML(
    "afterbegin",
    `<img class = "gallery__img" src="${url}" alt="${alt}">`
  );
  galleryItem.classList.add("gallery__item");

  return galleryItem;
};

const galleryForce = images.map(galleryList);

refs.galleryRef.append(...galleryForce);
