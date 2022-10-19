/* splash page */

const spalsh = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
        spalsh.classList.add('display-none');
    }, 2000);
}) 

/* mobile nav bar toogle */

const toggleButton = document.getElementById('toggle-Button');
const navList = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
})
