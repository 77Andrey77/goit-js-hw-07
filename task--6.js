const inputEl = document.querySelector('#validation-input');
// console.dir(inputEl);

const inputLengthEl = inputEl.dataset.length;
// console.dir(inputLengthEl);

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputLengthEl)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
