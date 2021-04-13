function imgSlider(image){
    document.querySelector('.starbucks').src = image; 
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color; 
}
function toggleMenu(){
    let menuToggle = document.querySelector('.toggle');
    let nav = document.querySelector('.nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}