const header = document.querySelector('header');

let 이전좌표 = 0;

window.addEventListener('scroll',()=>{
    if(window.scrollY >= 100){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
    
    if(이전좌표 < window.scrollY){
        header.classList.add('hide');
    }else{
        header.classList.remove('hide');
    }
    이전좌표 = window.scrollY ;
})
