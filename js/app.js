const scriptURL =
  "https://script.google.com/macros/s/AKfycbwslcY4cytss2mN5jJ322uyDpnj1ri_y_qz_t57gh53IWaSa9Y7ZmUL42IBh9r-OymO/exec";
const form = document.forms["contact-form"];
const submitButton = document.getElementById("submit");
const submitText = document.getElementById("submit-text");
const loadingSpinner = document.getElementById("loading-spinner");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const closeButton = document.getElementById("close-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitText.classList.add("hidden");
  loadingSpinner.classList.remove("hidden");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      submitText.classList.remove("hidden");
      loadingSpinner.classList.add("hidden");
    })

    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
    })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
