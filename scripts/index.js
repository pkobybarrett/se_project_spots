const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostButton = document.querySelector(".profile__new-post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostImageInput = newPostModal.querySelector(
  "#profile-image-link-input"
);
const newPostCaptionInput = newPostModal.querySelector(
  "#profile-caption-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const imagePreview = document.querySelector("#image-preview-modal");
const imageCloseButton = imagePreview.querySelector(".modal__close-button");
const image = imagePreview.querySelector(".modal__image");
const captionPreview = imagePreview.querySelector(".modal__caption");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardList = document.querySelector(".cards__section");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__images");
  const cardTitle = cardElement.querySelector(".card__description");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const cardLikeButton = cardElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button_active");
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    image.src = data.link;
    image.alt = data.name;
    captionPreview.textContent = data.name;
    openModal(imagePreview);
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

editProfileButton.addEventListener("click", function () {
  openModal(editProfileModal);
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});
editProfileModalCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});
newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});
newPostModalCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

imageCloseButton.addEventListener("click", () => {
  closeModal(imagePreview);
});

function handleEditProfileSubmit(event) {
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleNewPostSubmit(event) {
  event.preventDefault();
  console.log(newPostImageInput.value);
  console.log(newPostCaptionInput.value);
  const inputValues = getCardElement({
    name: newPostCaptionInput.value,
    link: newPostImageInput.value,
  });
  cardList.prepend(inputValues);
  newPostModal.querySelector("form").reset();
  closeModal(newPostModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostModal.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardList.append(cardElement);
});
