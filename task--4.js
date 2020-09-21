// const button = {
//     decr: document.querySelector('button[data-action="decrement"]'),
//     incr: document.querySelector('button[data-action="increment"]'),
//     value: document.querySelector('#value'),
// };

const butDecr = document.querySelector('button[data-action="decrement"]');
const butIncr = document.querySelector('button[data-action="increment"]');
const butValue = document.querySelector('#value');

let counterValue = 0;
const decrement = () => {
    counterValue -= 1;

    butValue.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;

    butValue.textContent = counterValue;
};

butDecr.addEventListener('click', decrement);
butIncr.addEventListener('click', increment);
