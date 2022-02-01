'use strict';
const checkButton = document.querySelector('.check');
const newsletterText = document.querySelector('#newsletter-signup');
const password = document.querySelector('.password');
const passwordConfirmation = document.querySelector('.password-confirmation');
const errorPopUp = document.querySelector('.error-popup');
const createButton = document.querySelector('.create-button');
const country = document.querySelector('.country');
const city = document.querySelectorAll('.city');
const citiesList = document.querySelector('.cities-list');
const modal = document.querySelector('.modal');
let bothNames = [];
const comparisonOfPasswords = (a, b) =>
  a.length === b.length && a.every((v, i) => v === b[i]);
let passCheck = [];
let passConfirmCheck = [];
let numberOfCheck = 1;

// Creating  a function to make checkbox react
checkButton.addEventListener('click', function () {
  numberOfCheck++;
  if (numberOfCheck % 2 === 0) {
    newsletterText.textContent =
      'You have successfully subscribed to our NewsLetter';
  } else {
    newsletterText.textContent = 'You are not subscribed to our Newsletter';
  }
});

// Creating a function to check for passwords

password.addEventListener('keydown', function (e) {
  passCheck.push(e.key);
});
passwordConfirmation.addEventListener('keydown', function (e) {
  passConfirmCheck.push(e.key);
  // console.log(comparisonOfPasswords(passCheck, passConfirmCheck));
  // console.log(passCheck);
  // console.log(passConfirmCheck);
  if (comparisonOfPasswords(passCheck, passConfirmCheck) === false) {
    createButton.addEventListener('click', function () {
      errorPopUp.classList.remove('hidden');
    });
  }
});

/* Unfortunately, I couldn`t find a proper way to make a dropdown cities menu work correctly.

    country.addEventListener('click', function () {
      console.log(country.value);
    });
    citiesList.addEventListener('click',function(){
      console.log(citiesList.value);
      if (country.value === citiesList.value) {
        city.classList.add('hidden');
      }
    })
    console.log(citiesList.value);
    

*/
bothNames.push(document.querySelector('#first-name').value);
bothNames.push(document.querySelector('#last-name').value);

createButton.addEventListener('click', function () {
  modal.classList.remove('hidden');
  bothNames.push(document.querySelector('#first-name').value);
  bothNames.push(document.querySelector('#last-name').value);
  document.querySelector('.account-name').textContent =
    bothNames[2] + ' ' + bothNames[3];
  document.querySelector('.account-email').textContent =
    document.querySelector('#email').value;
});
