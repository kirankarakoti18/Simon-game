let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=["pink","orange","blue","sky"];
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");   //(TO START THE GAME )
        started=true;

      setTimeout(levelUp,1000);
    }
});

function btnFlash(btn){
    btn.classList.add("flash"); 

    setTimeout(function(){
    btn.classList.remove("flash"); //(TO FLASH)
    },250);
    
    }

function userFlash(btn){
        btn.classList.add("userFlash"); //(ADDING CLASS )
    
        setTimeout(function(){
        btn.classList.remove("userFlash");
        },250);
        
        }
 
function levelUp(){
    userSeq=[];
level++;
h2.innerText=`level ${level}`;//(LEVEL :1,2,3....)

let randIdx=Math.floor(Math.random()*3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);//(FOR RANDOM COLOR)

gameSeq.push(randColor);  //(PUSHING RANDOM COLOR )
console.log(gameSeq); 
btnFlash(randBtn);
};
let h3=document.querySelector("h3");

function checkAns(idx){
   if(userSeq[idx]===gameSeq[idx]) 
  {  if(userSeq.length==gameSeq.length){
       setTimeout(levelUp,1000) ; }
      }  else{
            h2.innerHTML=`Game Over!! Your Score is <b>${level}</b> <br> press any key to start`; 
            document.querySelector("body").style.background="red" 
            setTimeout(function(){
                document.querySelector("body").style.background="white" 
            },150);
        const highScore=level;
        h3.innerText=`high score:${highScore}`;
           console.log(`your high score is ${highScore}`)
            reset();
        } 
};


function btnPress(){
    console.log(this); 
    let btn=this;
    userFlash(btn);   //(USER BACKGROUND CHANGE)

     userColor=btn.getAttribute("id") ;
     console.log(userColor);
    userSeq.push(userColor);
   

    checkAns(userSeq.length-1);
};


let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){         
   btn.addEventListener("click",btnPress);
};
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
