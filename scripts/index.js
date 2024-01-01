const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    alt: "Yosemite valley photo",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    alt: "Lake Louise photo",
  },
  {
    name: "Bald mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    alt: "Bald Mountains photo",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    alt: "Latemar photo",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    alt: "Vanoise National Park photo",
  },
  {
    name: "Lago di Barises",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    alt: "Lago di Braises photo",
  },
];

const editButton = document.querySelector(".profile__button_type_edit");
const closeButton = document.querySelector(".form__close-button");
const modal = document.querySelector(".modal");
const profileName = document.querySelector(".profile__heading");
const profileAbout = document.querySelector(".profile__user-description");
const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");
const profileFormElement = document.querySelector(".form");
const cardTemplate = document.querySelector("#cardTemplate").content;
const addButton = document.querySelector(".profile__button_type_add");
const cardsGrid = document.querySelector(".cards__list");
const count = 0;

function toggleModal() {
  modal.classList.toggle("modal_opened");
}

editButton.addEventListener("click", function (evt) {
  toggleModal();
  console.log(modal.classList, "Modal's classes");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});
closeButton.addEventListener("click", function (evt) {
  toggleModal();
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(cardName, cardImage, cardAlt) {
  console.log("Something");
  const cardElement = cardTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector(".card__image");
  const elementName = cardElement.querySelector(".card__name");

  elementImage.src = cardImage;
  elementImage.alt = cardAlt;
  console.log(elementImage.src, elementImage.alt);
  elementName.textContent = cardName;
  console.log(elementName.textContent);

  return cardElement;
}

initialCards.forEach(function (card) {
  const cardName = card.name;
  const cardImage = card.link;
  const cardAlt = card.alt;
  cardsGrid.prepend(getCardElement(cardName, cardImage, cardAlt));
});
