const controlFontEl = document.querySelector('#font-size-control');
// console.dir(controlFontEl);
const textEl = document.querySelector('#text');
// console.dir(textEl);

controlFontEl.addEventListener('input', onControlFont);

function onControlFont(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}
