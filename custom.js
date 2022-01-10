let quiz = [
     
    {
    question : 'what is your name',
    option1 : 'Ali',
    option2 : 'ahmed',
    option3 : 'jabbar',
    option4 : 'naeem', 
    },
      
    {
        question : 'what is your degree title',
        option1 : 'chemical engineering',
        option2 : 'mechanical engineering',
        option3 : 'software engineering',
        option4 : 'computer science', 
        },
         
    {
        question : 'what is your semester',
        option1 : '5th',
        option2 : '7th',
        option3 : '1st',
        option4 : '3rd', 
        },
          
        {
            question : 'what is your favourite subject',
            option1 : 'database system',
            option2 : 'programming',
            option3 : 'blockchain',
            option4 : 'web Application', 
            },
]
let main = document.querySelector('.main');
let btn1 = document.getElementById('btn1');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');
let btn2 = document.getElementById('btn2');
let btn4 = document.getElementById('btn4');
let btn3 = document.querySelector('.btn3');
let main2 = document.querySelector('.main2');
let b1 = document.querySelector('.b1');
let next = document.querySelector('.next');

  

btn4.addEventListener('click',function () {
      

let next1 = 1; 
    let item = 0 ;
let element = quiz[item];
    
    
     b1.innerText = element.question,
    op1.innerText = element.option1,
    op2.innerText = element.option2,
    op3.innerText = element.option3,
    op4.innerText = element.option4;
  element++ ;  
    console.log(element);
    next.innerText = next1 + 1;
    console.log(next1);
         

// console.log(option34);
})








btn2.addEventListener('click',function () {
    main.classList.add('hide');
})
btn3.addEventListener('click',function ( ) {
    main2.classList.add('hide1');
})
