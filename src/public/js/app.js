// ============================content-brands====================
var track= document.querySelector('.content-brands__track');
var slides= track.children;
var slide_width= slides[0].getBoundingClientRect().width;
console.log(slides[0].getBoundingClientRect().width);

var right_button= document.querySelector('.content-brands__button-right');
var left_button= document.querySelector('.content-brands__button-left');


right_button.addEventListener('click', e=>{
    track.style.transform= 'translateX(-' + (slide_width*7) + 'px)';
    left_button.classList.remove('be-hidden');
    right_button.classList.add('be-hidden');
});

left_button.addEventListener('click', e=>{
    track.style.transform= 'translateX(-' + 0 + 'px)';
    right_button.classList.remove('be-hidden');
    left_button.classList.add('be-hidden');
});

// ============================end of content-brands====================

// ============================best-seller====================
var best_seller_track= document.querySelector('.best-seller__track');
var best_seller_slides= best_seller_track.children;
var card_width= best_seller_slides[0].getBoundingClientRect().width + 38; 
var number_of_card= best_seller_slides.length;

var best_seller_right_button= document.querySelector('.best-seller__button-right');
var best_seller_left_button= document.querySelector('.best-seller__button-left');



best_seller_right_button.addEventListener('click', e=>{
    
    best_seller_track.style.transform= 'translateX(-' + card_width + 'px)';
        
});
// ============================end of best-seller====================

