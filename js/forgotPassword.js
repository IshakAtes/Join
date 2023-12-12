/**
 * Initializes the forgot password process by loading the user Data.
 * Displays a loading image during the loading time.
 * @async
 */
async function initForgotPassword() {
  toggleClass("loadingContainer", "d-none");
  await loadUserData();
  toggleClass("loadingContainer", "d-none");
}

/**
 * Checks the email to reset the password.
 * @param {Event} event - The event object.
 */
function checkEmailToResetPassword(event) {
  event.preventDefault();
  let existingUser = checkForExistingUser("emailForgotPassword");
  if (existingUser) {
    hideError("noUserWithThisEmail");
    saveEmailToResetPassword();
    sendMail(event);
  } else {
    showError("noUserWithThisEmail");
  }
}

/**
 * Saves the email in the local storage.
 */
function saveEmailToResetPassword() {
  let email = document.querySelector('input[name="recipient"]').value;
  setItemInLocalStorage("emailToResetPassword", email);
}

/**
 * Sends the reset email.
 */
// function sendResetEmail() {
//   document.querySelector("form").action = "https://formspree.io/f/xleyqvzd";
//   document.querySelector("form").submit();
// }

function sendMail(event){﻿
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xleyqvzd", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
          'Accept': 'application/json'
      }
  }).then(() => {
      window.location.href = "http://ishak-ates.developerakademie.net/Join/templates/emailHasBeenSent.html";
  }).catch((error) => {
      console.log(error);
  });
}