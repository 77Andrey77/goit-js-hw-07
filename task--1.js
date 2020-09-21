const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const categorAll = [...categoriesEl];
categorAll.forEach(elem =>
    console.log(
        `Категория: ${
            elem.querySelector('h2').textContent
        }\nКоличество элементов: ${elem.querySelectorAll('li').length}`,
    ),
);
