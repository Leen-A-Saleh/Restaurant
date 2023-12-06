document.addEventListener('scroll',()=>{
    const navbar = document.getElementById('navbar');
    if(window.scrollY>0){
        navbar.classList.add('nav-bg');
    }else{
        navbar.classList.remove('nav-bg');
    }
})