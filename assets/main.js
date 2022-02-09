// PAGE BTN DISABLE 
var pageCurrent = document.querySelector('.home-filter__page-btn--disable');
pageCurrent.onclick = function(e) {
    e.preventDefault();
}

        
// LIKE HANDLE 
var heartBtns = document.querySelectorAll('.home-product-item__like');
var heartEmtyBtn = document.querySelector('.home-product-item__like-emty');
var heartFillBtn = document.querySelector('.home-product-item__like-fill');

heartBtns.forEach(function(heartBtn, i) {
    heartBtn.onclick = function(e) {
        heartBtn.classList.toggle('home-product-item__like--liked');
        e.preventDefault();
    }
})
