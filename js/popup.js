{
  const popupFailure = document.querySelector(".popup--failure");
  const popupSuccess = document.querySelector(".popup--success");
  const closeFailure = document.querySelector(".popup__btn--failure");
  const closeSuccess = document.querySelector(".popup__btn--success");
  const submitBtn = document.querySelector(".btn");
  const inputName = document.querySelector(".field-text__input--name");
  const inputSurname = document.querySelector(".field-text__input--surname");
  const inputEmail = document.querySelector(".field-text__input--email");


  const onSubminBtnClick = evt => {
    evt.preventDefault();
    if (!inputName.value || !inputSurname.value || !inputEmail.value) {
      popupFailure.classList.remove("hidden");
    } else {
      popupSuccess.classList.remove("hidden");
    }
  }

  submitBtn.addEventListener("click", onSubminBtnClick);
  closeFailure.addEventListener("click", () => popupFailure.classList.add("hidden"));
  closeSuccess.addEventListener("click", () => popupSuccess.classList.add("hidden"));
};
