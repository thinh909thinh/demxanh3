
//                     //  back ve 
var kichthuoc = document.getElementsByClassName('silde-main')[0].clientWidth
var slide = document.getElementsByClassName('slide')[0]
var nexts = document.querySelector('.slide-list')
var img = nexts.getElementsByTagName('img')
var dots = document.querySelectorAll(".owl-dot");
var max = kichthuoc * (img.length - 1)
let indexs = 0
dots.forEach(item => item.addEventListener("click", function (e) {
    dots.forEach(el => el.classList.remove('active'));
    e.target.classList.add('active')
    let slideIndex = e.target.dataset.index - "";
    indexs = slideIndex
    slide.style.marginLeft = `-${indexs * kichthuoc}px`
}));
setInterval(function () {
    dots.forEach(el => el.classList.remove('active'));
    if (indexs < dots.length - 1) {
        indexs++
    } else {
        indexs = 0
    }
    slide.style.marginLeft = `-${indexs * kichthuoc}px`
    dots[indexs].classList.add('active')
}, 3000);
