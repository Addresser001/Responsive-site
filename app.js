const nav = document.querySelector('#nav-links');
const navButton = document.querySelector('.material-icons');

navButton.addEventListener('click', e =>{
    e.preventDefault();
    if(nav.className === 'hide'){
        nav.className = 'show';
    }else{
        nav.className ='hide';
    }
    
})