let search = document.getElementById('search')
search.addEventListener('input',function () {
  
    let inputVal = search.value.toLowerCase();
    // console.log('input fired',inputVal);
    
    let card = document.getElementsByClassName('card');
Array.from(card).forEach(function (element) {
    let cardTxt = element.getElementsByClassName('headPara')[0].innerText;
    // console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
        element.style.display = 'block';
    }
    else{
        element.style.display = 'none';

    }
})
});
let progressBar = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight-window.innerHeight;
window.onscroll = function () {
    let progressBarHeight = (window.pageYOffset/totalHeight)*100;
    progressBar.style.height = progressBarHeight + '%';
}

let logo = document.getElementById('logo');
let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar')
let navlist = document.querySelector('.navlist');
let rightnav = document.querySelector('.nav-Right');

burger.addEventListener('click',()=>{
    
    
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp') ;
    rightnav.classList.toggle('v-class-resp');
    if (  logo.style.display != 'none' ) {
        logo.style.display = 'none';


    }
    else{
        logo.style.display = 'block';
    }
    
})


