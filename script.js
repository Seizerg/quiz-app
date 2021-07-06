const quest= [{
    question:"who is currently the most liked valorant player on internet?",
    a: "Tenz",
    b: "Scream",
    c: "Shroud",
    d: "Luke",
},
{
    question: "when 2nd world war ended?",
    a: "1919",
    b: "1937",
    c: "1945",
    d: "1890",
},
{
    question: "One tap gun?",
    a: 'phantom',
    b: "vandal",
    c: "bucky",
    d: "frenzy",
},
{
    question: "fastest agent in valorant?",
    a: "jett",
    b:"cypher",
    c: "viper",
    d: "brimstone",
}];
let time= 10;
let key=["a","c","b","a"];
console.log(quest.length);
let i=0;
let j=0;
const ques= document.getElementById("ques");
const atext= document.querySelector(".a");
const btext= document.querySelector(".b");
const ctext= document.querySelector(".c");
const dtext= document.querySelector(".d");
const button= document.getElementById("button");
const quiz= document.getElementById('quiz');
const ans= document.querySelectorAll(".option");
const p= document.getElementById("p");
const t=document.getElementById("time");

let a=undefined;
let b=undefined;
let score=0;
showQuiz();
timer();
setInterval(timer,1000);

function timer(){
  console.log(time);
    t.innerHTML=time;
      time= time-1;
 if (time<0) {
   (i<quest.length) ? showQuiz() : reload();
 }

}




 function showQuiz(){
   time=10;

     ques.innerText=quest[i].question;
     atext.innerText=quest[i].a;
     btext.innerText=quest[i].b;
     ctext.innerText=quest[i].c;
     dtext.innerText=quest[i].d;
     i++;
 }
function onClick(){

    button.addEventListener('click',()=>{
        checkSelection();

        j++;
        if(a){
          time=10;
            unCheck();
        (i<quest.length) ? showQuiz() : reload();
        }
    });
    }

    onClick();
function reload(){
             quiz.innerHTML=`<h2>Hey U answered ${score} correctly!</h2>
                            <button class="btn" onclick=location.reload()>Reload</button>`;
    }
    function checkSelection(){
        ans.forEach(x => {
           if(x.checked)
           {
               console.log(x.id);
               console.log(key[j]);
                if(x.id===key[j]){
                    score++;

               }
               a=x.checked;
           }

    })
return a;
};


    function unCheck(){
        ans.forEach(x=>{
            x.checked=false;
        })
    }
