const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

// const ulList = document.getElementById('gallery');
// const addImg = images.map(option => {
//     const addLi = document.createElement('li');
//     const addImg = document.createElement('img');
//     addImg.setAttribute('src', `${option.url}`);
//     addImg.setAttribute('alt', `${option.alt}`);
//     addImg.setAttribute('style', 'list-style-type:none; display: flex;');
//     addLi.appendChild(addImg);
//     ulList.append(addLi);
// });

const addImg = ({ url, alt }) =>
    `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;

const galleryAdd = images.reduce((acc, item) => acc + addImg(item), '');

const galleryListEl = document.querySelector('#gallery');

galleryListEl.insertAdjacentHTML('afterbegin', galleryAdd);
galleryListEl.setAttribute('style', 'list-style-type:none; display: flex;');
