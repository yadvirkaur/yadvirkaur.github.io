
let scoreHome= document.getElementById("score_home");
let count=0;

function score1(){
    count +=1;
    scoreHome.textContent = count;
}
function score2(){
    count +=2;
    scoreHome.textContent = count;
}
function score3(){
    count +=3;
    scoreHome.textContent = count;
}

let scoreGuest= document.getElementById("score_guest");
let counts=0;
function scoreG1(){
    counts +=1;
    scoreGuest.textContent = counts;
}
function scoreG2(){
    counts +=2;
    scoreGuest.textContent = counts;
}
function scoreG3(){
    counts +=3;
    scoreGuest.textContent = counts;
}

let newG=0;
function newGame(){
    count=0;
    counts=0;
    scoreHome.textContent = newG;
    scoreGuest.textContent= newG;
}