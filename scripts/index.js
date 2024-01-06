const initialCards = [
  {
    name: ["Yosemite Valley", "Yosemite valley photo"],
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: ["Lake Louise", "Lake Louise photo"],
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: ["Bald mountains", "Bald Mountains photo"],
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: ["Latemar", "Latemar photo"],
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: ["Vanoise National Park", "Vanoise National Park photo"],
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: ["Lago di Barises", "Lago di Barises photo"],
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

const editButton = document.querySelector(".profile__button_type_edit");
const newPlaceButton = document.querySelector(".profile__button_type_add");
const closeButtonEdit = document.querySelector(".form__close-edit");
const closeButtonNew = document.querySelector(".form__close-new");

const modal = document.querySelector(".modal");
const profileName = document.querySelector(".profile__heading");
const profileAbout = document.querySelector(".profile__user-description");
const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");
const inputPlace = document.querySelector(".form__input_place");
const inputImage = document.querySelector(".form__input_image");
const formEditProfile = document.querySelector(".form_type_edit-profile");
const formNewPlace = document.querySelector(".form_type_new-place");
const modalEditContainer = document.querySelector(".modal__edit-container");
const modalNewContainer = document.querySelector(".modal__new-container");
const cardTemplate = document.querySelector("#cardTemplate").content;
const addButton = document.querySelector(".profile__button_type_add");
const cardsGrid = document.querySelector(".cards__list");
const count = 0;

function getCardElement(cardName, cardImage, cardAlt = "Some Image") {
  const cardElement = cardTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector(".card__image");
  const elementName = cardElement.querySelector(".card__name");

  elementImage.src = cardImage;
  elementImage.alt = cardAlt;
  elementName.textContent = cardName;

  return cardElement;
}

initialCards.forEach((card) => {
  const cardName = card.name[0];
  const cardImage = card.link;
  const cardAlt = card.name[1];
  cardsGrid.append(getCardElement(cardName, cardImage, cardAlt));
});

function renderLastCard() {
  const lastIndex = initialCards.length - 1;
  const lastCardName = initialCards[lastIndex].name;
  const lastImage = initialCards[lastIndex].link;
  const lastCardAlt = "";
  cardsGrid.append(getCardElement(lastCardName, lastImage, lastCardAlt));
}

const likeButtons = document.querySelectorAll(".card__like-button");
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
});

function toggleModal() {
  modal.classList.toggle("modal_opened");
}

function toggleModalEdit() {
  modal.classList.toggle("modal_opened");
  modalNewContainer.classList.toggle("modal__container_hidden");
}

editButton.addEventListener("click", function (evt) {
  toggleModalEdit();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});
closeButtonEdit.addEventListener("click", function (evt) {
  toggleModalEdit();
});

function handleProfileFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal();
}

formEditProfile.addEventListener("submit", handleProfileFormEditSubmit);

function toggleModalNewPlace() {
  modal.classList.toggle("modal_opened");
  modalEditContainer.classList.toggle("modal__container_hiddenn");
}

newPlaceButton.addEventListener("click", function (evt) {
  toggleModalNewPlace();
});
closeButtonNew.addEventListener("click", function (evt) {
  toggleModalNewPlace();
});

function handleProfileFormNewSubmit(evt) {
  if (inputPlace.value == "" || inputImage == "") {
    alert("Please fill in all fields");
    return;
  }
  evt.preventDefault();
  const newPlace = {
    name: inputPlace.value,
    link: inputImage.value,
  };
  initialCards.push(newPlace);
  renderLastCard();
  inputPlace.value = "";
  inputImage.value = "";
  toggleModal();
}

formNewPlace.addEventListener("submit", handleProfileFormNewSubmit);
