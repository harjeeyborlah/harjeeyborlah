const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const reg = document.querySelector('#register');

burger.addEventListener('click' , ()=>{
    if (menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
})


burger.addEventListener('click' , ()=>{
    if (reg.classList.contains('hidden')){
    reg.classList.remove('hidden');
    } else{
       reg.classList.add('hidden');
    }
})

// // //when burger is clicked, look at menu if it contains hidden class, remove to show the menu, if not when clicked again add hidden

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Hide";
      moreText.style.display = "inline";
    }
  } 

  // for the read more and read less portion