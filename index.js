let openNav = document.getElementById('openNav');
let navbar = document.getElementById('navright');
let closeNav = document.getElementById('closeNav');


openNav.onclick = ()=>{
    navbar.style.transform = 'translateX(0)'
}
closeNav.onclick = ()=>{
    navbar.style.transform = 'translateX(100%)'
}
