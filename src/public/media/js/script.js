function init() {

    const loader = document.querySelector('.container');
const main = document.querySelector('.header_p');

    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = 'none';
  
      main.style.display = 'block';
      setTimeout(() => main.style.opacity = 1, 100);
    }, 4000);
  }
  
  init();


$(".choco").on("click", function(){
    const header_p = document.querySelector('.header_p');
    const main_page = document.querySelector('.main_page');

    setTimeout(() => {
        header_p.style.opacity = 0;
        header_p.style.display = 'none';
    
        main_page.style.display = 'flex';
        setTimeout(() => main_page.style.opacity = 1, 100);
      }, 1000);
});