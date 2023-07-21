




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

makeCountUp(document.querySelector('.count-up'),8286684,1500,24);
makeScrollContents(document.querySelectorAll('.advantage>*'),);

const incline = document.querySelector('.incline');

incline.style.left ='50%'; 

window.addEventListener('scroll',()=>{
    if(incline.getBoundingClientRect().top - window.innerHeight < 0){
        incline.style.left = '0%';
    }
})
