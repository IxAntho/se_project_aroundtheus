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

//Buttons
const editProfileButton = document.querySelector(".profile__button_type_edit");
const newPlaceButton = document.querySelector(".profile__button_type_add");
const editModalCloseBtn = document.querySelector(".form__close-edit");
const newPlaceModalCloseBtn = document.querySelector(".form__close-new");
const addProfileButton = document.querySelector(".profile__button_type_add");
const imageViewCloseButton = document.querySelector(
  ".image-view__close-button"
);

//Containers
const profileModal = document.querySelector(".modal");
const editProfileForm = document.querySelector(".form_type_edit-profile");
const newPlaceForm = document.querySelector(".form_type_new-place");
const modalEditContainer = document.querySelector(".modal__edit-container");
const modalNewContainer = document.querySelector(".modal__new-container");
const cardTemplate = document
  .querySelector("#cardTemplate")
  .content.querySelector(".card");
const cardsGrid = document.querySelector(".cards__list");
const imageView = document.querySelector(".image-view");

//Fields
const profileName = document.querySelector(".profile__heading");
const profileAbout = document.querySelector(".profile__user-description");
const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");
const inputPlace = document.querySelector(".form__input_place");
const inputImage = document.querySelector(".form__input_image");
const mainImageView = document.querySelector(".image-view__image");
const imageTitle = document.querySelector(".image-view__image-name");

//event listener functions
const addTrashButtonListener = (trashButton) => {
  trashButton.addEventListener("click", (evt) => {
    //Accessing the Button: Use event.currentTarget to reference the button that was clicked
    const clickedButton = evt.currentTarget;
    //Finding the Parent Card Element which should be the card element in the grid.
    const cardToRemove = clickedButton.closest(".card");

    //if the element has been found
    if (cardToRemove) {
      cardToRemove.remove();
    }
  });
};

//image view modal rendering functions
const addImageViewListener = (image, name) => {
  image.addEventListener("click", () => {
    mainImageView.src = image.src;
    imageTitle.textContent = name.textContent;
    imageView.classList.toggle("image-view_active");
  });
};

imageViewCloseButton.addEventListener("click", () => {
  imageView.classList.toggle("image-view_active");
});

//card rendering functions
function getCardElement(cardName, cardImage, cardAlt = "Some Image") {
  const cardElement = cardTemplate.cloneNode(true);
  const elementImage = cardElement.querySelector(".card__image");
  const elementName = cardElement.querySelector(".card__name");
  const likeButton = cardElement.querySelector(".card__like-button");
  const trashButton = cardElement.querySelector(".card__trash-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  elementImage.src = cardImage;
  elementImage.alt = cardAlt;
  elementName.textContent = cardName;
  addTrashButtonListener(trashButton);
  addImageViewListener(elementImage, elementName);

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
  const newCard = getCardElement(lastCardName, lastImage, lastCardAlt);
  cardsGrid.append(newCard);

  const trashButton = newCard.querySelector(".card__trash-button");
  addTrashButtonListener(trashButton);
}

//modals rendering functions
//modal edit profile
function toggleModal() {
  profileModal.classList.toggle("modal_opened");
}

function toggleModalEdit() {
  profileModal.classList.toggle("modal_opened");
  modalNewContainer.classList.toggle("modal__container_hidden");
}

editProfileButton.addEventListener("click", function (evt) {
  toggleModalEdit();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});
editModalCloseBtn.addEventListener("click", function (evt) {
  toggleModalEdit();
});

function handleProfileFormEditSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  toggleModal();
}

editProfileForm.addEventListener("submit", handleProfileFormEditSubmit);

//modal new place
function toggleModalNewPlace() {
  profileModal.classList.toggle("modal_opened");
  modalEditContainer.classList.toggle("modal__container_hidden");
}

newPlaceButton.addEventListener("click", function (evt) {
  toggleModalNewPlace();
});
newPlaceModalCloseBtn.addEventListener("click", function (evt) {
  toggleModalNewPlace();
});

function handleProfileFormNewSubmit(evt) {
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

newPlaceForm.addEventListener("submit", handleProfileFormNewSubmit);
