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

/*
function toggleHamburgerMenu() {

    if (hamburgerMenu.classList.contains('open-navbar')) {
        hamburgerMenu.classList.remove('open-navbar')
        navbar.style.display = 'flex';
        setTimeout(() => {
            navbar.classList.remove('opacity-0');
        }, 1);

    } else {
        hamburgerMenu.classList.add('open-navbar')
        navbar.classList.add('opacity-0');
        setTimeout(() => {

        }, 200);
    }
}
*/

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



