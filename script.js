let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-solid-a');
    navbar.classList.toggle('active');
}

menu.onscroll = () => {
    menu.classList.remove('fa-solid-a');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiplr-text', {
    strings: ['Frontend Developer', 'Backend Developer' , 'Web Designer' , 'Mobile App Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });