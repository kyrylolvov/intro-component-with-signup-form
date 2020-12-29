"use strict";

const wrappers = document.querySelectorAll(".inputWrapper");

for (let wrapper of wrappers) {
  const formInput = wrapper.querySelector(".formInput");
  formInput.addEventListener("invalid", function (e) {
    e.preventDefault();
  });
}

const submitButton = document.querySelector(`.claimButton`);
submitButton.addEventListener("click", function () {
  for (let wrapper of wrappers) {
    const formInput = wrapper.querySelector(".formInput");
    const errorImg = wrapper.querySelector(".errorImg");
    const errorMessage = wrapper.querySelector(".errorMessage");

    if (!formInput.value) {
      errorImg.classList.remove("hidden");
      errorMessage.classList.remove("hidden");
      formInput.classList.add("errorState");
    } else {
      errorImg.classList.add("hidden");
      errorMessage.classList.add("hidden");
      formInput.classList.remove("errorState");
    }
  }
});

