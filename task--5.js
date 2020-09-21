let inputEl = document.querySelector('#name-input');
let nameOutputEl = document.querySelector('#name-output');

inputEl.oninput = function () {
    if (inputEl.value === '') {
        nameOutputEl.textContent = 'незнакомец';
    } else {
        nameOutputEl.textContent = inputEl.value;
    }
};
