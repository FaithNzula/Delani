const form = document.querySelector('#form');
const name = document.querySelector('#text');
const nameTooShort = document.querySelector('#name-too-short');
const nameTooLong = document.querySelector('#name-too-long');


form.onsubmit = (e) => {
    e.preventDefault();
}
