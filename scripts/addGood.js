const btnCard = document.querySelectorAll('.product__btn');
const basket = document.querySelector('.basket');

const basketBlock = document.createElement('div');
basketBlock.classList.add('container');
basketBlock.classList.add('basket-block');

const basketH2 = document.createElement('h2');
basketH2.classList.add('basket-block__header');
basketH2.textContent = 'Cart Items';

let productSection = false;

btnCard.forEach(element => {
    element.addEventListener('click', function(e) {

        if (productSection === false) {
            basketBlock.appendChild(basketH2);
            basket.appendChild(basketBlock);
            productSection = true;
        }

        const basketItem = document.createElement('div');
        basketItem.classList.add('basket-block__item');

        const basketImg = document.createElement('img');
        basketImg.classList.add('basket-block__img');
        basketImg.src = dataB[element.name].picture;
        basketImg.alt = 'photo_product';

        const basketTextBlock = document.createElement('div');
        basketTextBlock.classList.add('basket-block__text-block');

        const basketName = document.createElement('h3');
        basketName.classList.add('basket-block__name');
        basketName.textContent = dataB[element.name].name;

        const closeImg = document.createElement('img');
        closeImg.src = 'img/basket-close.png';
        closeImg.classList.add('basket-block__basket-close');
        closeImg.src.alt = 'close';

        const basketBlockText = document.createElement('div');
        basketBlockText.classList.add('basket-block__text');


        const basketPrice = document.createElement('p');
        basketPrice.classList.add('basket-block__text-el');
        basketPrice.textContent = 'Price: ';
        const basketPriceSpan = document.createElement('span');
        basketPriceSpan.classList.add('basket-block__price');
        basketPriceSpan.textContent = dataB[element.name].price;

        const basketColor = document.createElement('p');
        basketColor.classList.add('basket-block__text-el');
        basketColor.textContent = 'Color: ';
        const basketColorSpan = document.createElement('span');
        basketColorSpan.classList.add('basket-block__color');
        basketColorSpan.textContent = dataB[element.name].color;

        const basketSize = document.createElement('p');
        basketSize.classList.add('basket-block__text-el');
        basketSize.textContent = "Size: ";
        const basketSizeSpan = document.createElement('span');
        basketSizeSpan.classList.add('basket-block__size');
        basketSizeSpan.textContent = dataB[element.name].size;


        const basketQuanity = document.createElement('p');
        basketQuanity.classList.add('basket-block__text-el');
        basketQuanity.textContent = 'Quanity: ';
        const basketQuanitySpan = document.createElement('span');
        basketQuanitySpan.classList.add('basket-block__quanity');
        basketQuanitySpan.textContent = dataB[element.name].quanity;

        basketPrice.appendChild(basketPriceSpan);
        basketColor.appendChild(basketColorSpan);
        basketSize.appendChild(basketSizeSpan);
        basketQuanity.appendChild(basketQuanitySpan);

        basketBlockText.appendChild(basketPrice);
        basketBlockText.appendChild(basketColor);
        basketBlockText.appendChild(basketSize);
        basketBlockText.appendChild(basketQuanity);

        basketTextBlock.appendChild(basketName);
        basketTextBlock.appendChild(closeImg);
        basketTextBlock.appendChild(basketBlockText);

        basketItem.appendChild(basketImg);
        basketItem.appendChild(basketTextBlock);

        basketBlock.appendChild(basketItem);

        const closeBtn = document.querySelectorAll('.basket-block__basket-close');

        closeBtn.forEach(i => {
            i.addEventListener('click', function() {
                i.parentElement.parentElement.remove();
                if (basketBlock.children.length < 2) {
                    productSection = false;
                    basketBlock.remove();
                    basketH2.remove();
                }
            })
        });
    })
});