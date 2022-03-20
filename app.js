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
  const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $('#result');
  const email = $('#email').val();
  $result.text('');

  if (validateEmail(email)) {
    $result.text(email + ' is valid :)');
    $result.css('color', 'green');
  } else {
    $result.text(email + ' is not valid :(');
    $result.css('color', 'red');
  }
  return false;
}

$('#email').on('input', validate);



