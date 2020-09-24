const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

// const ulList = document.getElementById('ingredients');
const ulList = document.querySelector('#ingredients');
const foodIngred = ingredients.map(ingredient => {
    const elem = document.createElement('li');
    elem.textContent = ingredient;
    // ulList.append(elem);
    return elem;
});

ulList.append(...foodIngred);
