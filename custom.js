let main = document.querySelector('.main');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.querySelector('.btn3');
let main2 = document.querySelector('.main2');
btn2.addEventListener('click',function () {
    main.classList.add('hide');
})
btn3.addEventListener('click',function ( ) {
    main2.classList.add('hide1');
})
