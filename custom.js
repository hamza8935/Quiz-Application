let main = document.querySelector('.main');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn2.addEventListener('click',function () {
    main.classList.add('hide');
})