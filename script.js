// RESPONSIVE MENU

const mobileMenu = () => {
    let menu = document.querySelector(".header ul");
    let btn = document.querySelector(".header button");
    console.log("btn mobile clicked", menu.classList);
    
    if (menu.classList.contains("invisible")) {
        console.log("cls contains", menu.classList.contains("invisible"));
        menu.classList.remove("invisible");
        menu.classList.add("visible");
    } else {
        menu.classList.add("invisible");
        menu.classList.remove("visible");
    }
};

// GALERIJA

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let galleryPictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
    displayNone();
    imgNum++;
    
    if(imgNum === galleryPictures.length){
        imgNum = 0;
    }
    galleryPictures[imgNum].style.display = 'block';
}

const moveLeftt = () => {
    displayNone();
    imgNum++;
    
    if(imgNum === galleryPictures.length){
        imgNum = 0;
    }
    galleryPictures[imgNum].style.display = 'block';
};

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeftt);


// CAROUSEL WITH KEYBOARD

const displayNone = () => {
    galleryPictures.forEach((img) => {
        img.style.display = 'none';
    });
};

document.addEventListener("keydown", (e) => {
    e.preventDefault();
    
    if (e.keyCode === 37) {
        moveLeftt();
    }
    
    if (e.keyCode === 39) {
        moveRight();
    }
});

// PORTFOLIO

const portfolioSort = (button) => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');
    
    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    })
    
    if (category === 'grand') {
        portfolioItems.forEach((item) => {
            item.style.display = 'block';
        });
    }
    
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        };
    })
};

// MODAL

const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');
    
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}


