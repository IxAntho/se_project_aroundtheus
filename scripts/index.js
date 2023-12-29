let initialCards = [
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
let cardTemplate = document.querySelector("#cardTemplate").content;
const addButton = document.querySelector(".profile__button_type_add");
let cardsGrid = document.querySelector(".cards__list");
let count = 0;

editButton.addEventListener("click", function (evt) {
  modal.classList.toggle("modal_enabled");
  console.log(modal.classList, "Modal's classes");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});
closeButton.addEventListener("click", function (evt) {
  modal.classList.toggle("modal_enabled");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  modal.classList.toggle("modal_enabled");
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(data) {
  console.log("Something");
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardName = cardElement.querySelector(".card__name");

  cardImage.src = data[count].link;
  cardImage.alt = data[count].alt;
  console.log(cardImage.src, cardImage.alt);
  cardName.textContent = data[count].name;
  console.log(cardName.textContent);
  /*if (count < initialCards.length) {
    count += 1;
  }*/
  return cardElement;
}
//add button event listener
/*addButton.addEventListener("click", function (evt) {
  cardsGrid.prepend(getCardElement(initialCards));
});
*/

//automatic cards rendering
for (count; count < initialCards.length; count++) {
  cardsGrid.prepend(getCardElement(initialCards));
}

//Could also be this way? ->
/* initialCards.forEach(function (cardData) {
  cardsGrid.prepend(getCardElement(cardData));
});
*/
