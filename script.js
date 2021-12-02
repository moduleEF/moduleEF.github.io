navbar = document.querySelector('.navbar');
hamburgerMenu = document.querySelector('.hamburger-menu');
navbarBtn = document.querySelector('.navbar-btn');
hamburgerMenuCloseBtn = document.querySelector('.hamburger-menu ul li:nth-child(1) img');

navbarBtn.addEventListener('click', () => {
    toggleHamburgerMenu();
})
hamburgerMenuCloseBtn.addEventListener('click', () => {
    toggleHamburgerMenu();
})

function toggleHamburgerMenu() {
    navbar.classList.toggle('navbar-active');
    hamburgerMenu.classList.toggle('open-navbar');
}


for (let x = 0; x < hamburgerMenu.children[0].children.length; x++) {
    let item = hamburgerMenu.children[0].children[x].children[0];
    let nodeName = item.nodeName;
    if (nodeName == 'A') {
        item.addEventListener('click', () => {
            toggleHamburgerMenu();
        })
    }
}

// fbbc35

