const form = document.querySelector('#form');
const name = document.querySelector('#text');
const nameTooShort = document.querySelector('#name-too-short');
const nameTooLong = document.querySelector('#name-too-long');


form.onsubmit = (e) => {
    e.preventDefault();
}
name.oninput = (e) => {
    nameTooShort.hidden = true;
    nameTooLong.hidden = true;
    if (e.srcElement.validity.nameTooShort) {
        nameTooShort.hiden = false;
    }
}
if (e.srcElement.validity.tooLong) {
    nameTooLong.hidden = false;
  }