const switchButtons = document.querySelectorAll('.slide-switch');
const slides = document.querySelectorAll('.slide');

const hideSlides = () => {
    slides.forEach(item => {
        item.classList.remove('slide-active');
        item.classList.add('slide-noactive');
    })

    switchButtons.forEach(item => {
        item.classList.remove('slide-switch-active');
    })
}

const showSlide = (i = 0) => {
    slides[i].classList.remove('slide-noactive');
    slides[i].classList.add('slide-active', 'fade');
}

switchButtons.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideSlides();
        showSlide(index);

        switchButtons[index].classList.add('slide-switch-active');        
    })
});


let products = [
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
    {
        title: 'PIZZA QUATRO STAGIONI',
        description: 'Integer ullamcorper neque eu purus euismod',
        price: '55,68 USD',
    },
];

const menuContent = document.querySelector('.menu-content');
const createNode = (tagOfNode, classOfNode, parentOfNode, nodeText = null) => {    
        let node = document.createElement(tagOfNode);
        node.classList.add(classOfNode);
        node.textContent = nodeText;
        parentOfNode.appendChild(node);
        return node;    
}

for (let i = 0; i < products.length; i += 1) {
    let productWrap = createNode('div', 'product-wrap', menuContent);
    let productHeader = createNode('div', 'product-header', productWrap);
    let productTitle = createNode('h3', 'product-title', productHeader, products[i].title);
    let productPrice = createNode('p', 'product-price', productHeader, products[i].price);
    let productDescription = createNode('p', 'product-description', productWrap, products[i].description);    
}



const galleryImages = document.querySelectorAll('.gallery li img');
const length = galleryImages.length;

function galleryShow() {
    let imagesSrc = [];
    galleryImages.forEach(item => {
        imagesSrc.push(item.src);
    });
    for (let i = 0; i < length; i += 1) {

        if (i === (length - 1)) {
            galleryImages[length - 1].src = imagesSrc[0];
            galleryImages[length - 2].src = imagesSrc[length - 1];
            
        } else {
            galleryImages[i].src = imagesSrc[i + 1];
        }         
    }
}

setInterval(galleryShow, 2000);