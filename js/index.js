function checkRequrie() {
    var input_name = document.querySelector("#name");
    if(!input_name.value) alert("Name không được để trống");
}
function checkMail(){
    var input_mail = document.querySelector("#mail");
    if(input_mail.value){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(input_mail.value)) {
            alert('Địa chỉ mail không hợp lệ.');
        }
    }
}

function show() {
    var img = ["url(\"images/Layer 9.png\")", "url(\"images/wim1.png\")", "url(\"images/wim2.png\")" ];
    var i = 0;
    setInterval(function() {
        i++;
        if( i > 2) i = 0;
        document.querySelector(".banner").style.backgroundImage = img[i];
    }, 3000) ;
}
    show();
function set(){
    var review_1 = document.querySelector('.review-1');
    var review_2 = document.querySelector('.review-2');
    var review_3 = document.querySelector('.review-3');
    review_1.style.zIndex = 0;
    review_2.style.zIndex = 1;
    review_3.style.zIndex = 0;
}
    set();

function changeReview(selector_1, selector_2, selector_3 ){
    var left = document.querySelector(selector_1);
    var center = document.querySelector(selector_2);
    var right = document.querySelector(selector_3);
    if( left.style.zIndex == 0){
        if( center.style.zIndex == 1 ){
            var active = center.cloneNode(true);
            var normal_1 = left.cloneNode(true);
            var normal_2 = right.cloneNode(true);
        }
        else if( right.style.zIndex == 1 ){
            var active = right.cloneNode(true);
            var normal_1 = center.cloneNode(true);
            var normal_2 = left.cloneNode(true);
        }
        active.style.zIndex = 1;
        normal_1.style.zIndex = 0;
        normal_2.style.zIndex = 0;
        left.replaceWith(active);
        center.replaceWith(normal_1);
        right.replaceWith(normal_2);
    }
    else 1;
}


//image-popup
var slideIndex = 1;
showSlides(slideIndex);
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function openModal(){
    document.getElementById("myModal").style.display = "block";
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


