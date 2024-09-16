const dataB = JSON.parse(dataBase);
const productGrid = document.querySelector('.productGrid');

dataB.forEach(element => {

    const productCard = document.createElement('div');
    productCard.classList.add('productCard');

    const productCardHover = document.createElement('div');
    productCardHover.classList.add('productCard__hover');

    const productBtn = document.createElement('button');
    const productBtnImg = document.createElement('img');
    const productSpan = document.createElement('span');

    productBtn.classList.add('product__btn');
    productBtnImg.src = 'img/basket2.svg';
    productBtnImg.alt = 'basket';
    productBtn.name = element.id;
    productSpan.textContent = 'Add to Card';

    const productImg = document.createElement('img');
    productImg.classList.add('productCard__img');
    productImg.src = element.picture;

    const description = document.createElement('div');
    description.classList.add('description');

    const descriptionHeading = document.createElement('p');
    descriptionHeading.classList.add('description__heading');
    descriptionHeading.textContent = element.name;

    const descriptionText = document.createElement('p');
    descriptionText.classList.add('description__text');
    descriptionText.textContent = element.description;

    const descriptionPrice = document.createElement('p');
    descriptionPrice.classList.add('description__price');
    descriptionPrice.textContent = `$${element.price}`;

    description.appendChild(descriptionHeading);
    description.appendChild(descriptionText);
    description.appendChild(descriptionPrice);

    productBtn.appendChild(productBtnImg);
    productBtn.appendChild(productSpan);

    productCardHover.appendChild(productBtn);

    productCard.appendChild(productCardHover);
    productCard.appendChild(productImg);
    productCard.appendChild(description);

    productGrid.appendChild(productCard);
});