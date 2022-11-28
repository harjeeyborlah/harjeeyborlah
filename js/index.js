const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click',() =>{
    document.body.classList.toggle('nav-open');
})

console.log(navLinks);

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    })
})