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

editProfileButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_opened");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});
editProfileModalCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_opened");
});
newPostButton.addEventListener("click", function () {
  newPostModal.classList.add("modal_opened");
});
newPostModalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_opened");
});

function handleEditProfileSubmit(event) {
  event.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_opened");
}

function handleNewPostSubmit(event) {
  event.preventDefault();
  console.log(newPostImageInput.value);
  console.log(newPostCaptionInput.value);
  newPostModal.classList.remove("modal_opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostModal.addEventListener("submit", handleNewPostSubmit);
