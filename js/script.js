// Modo "use strict"
"use strict";

// Spinner (Carregador)
function spinner() {
    setTimeout(function () {
        var spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
            spinnerElement.classList.remove('show');
        }
    }, 1);
}
spinner();

// Navbar Fixa
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 45) {
        navbar.classList.add('sticky-top', 'shadow-sm');
    } else {
        navbar.classList.remove('sticky-top', 'shadow-sm');
    }
});

//Fechamento do menu hamburguer
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        var navbarCollapse = document.querySelector('#navbarCollapse');
        if (navbarCollapse.classList.contains('show')) {
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// criar um menu suspenso
const dropdowns = document.querySelectorAll('.dropdown');
const mediaQuery = window.matchMedia("(min-width: 992px)");

function handleDropdownHover() {
    if (mediaQuery.matches) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function () {
                dropdown.classList.add('show');
                dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
                dropdown.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function () {
                dropdown.classList.remove('show');
                dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                dropdown.querySelector('.dropdown-menu').classList.remove('show');
            });
        });
    } else {
        dropdowns.forEach(dropdown => {
            dropdown.removeEventListener('mouseenter', handleDropdownHover);
            dropdown.removeEventListener('mouseleave', handleDropdownHover);
        });
    }
}

// Troca o ativado no Menu inicial
const navLinks = document.querySelectorAll('.nav-item');

function deactivateLinks() {
    navLinks.forEach(link => link.classList.remove('active'));
}
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        deactivateLinks();
        this.classList.add('active');
    });
});

window.addEventListener('load', handleDropdownHover);
window.addEventListener('resize', handleDropdownHover);

//Criando A animação de Scroll
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));


// Removendo a classe tab-0 do menu
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('[data-bs-toggle="pill"]');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelector('#tab-0').classList.remove('show', 'active');
        });
       
    });
});


