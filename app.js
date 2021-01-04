const newgame =document.getElementById("NewGame");
const score1 =document.getElementById("score1");
const totalscore1 =document.getElementById("totalscore1");
const score2 =document.getElementById("score2");
const totalscore2 =document.getElementById("totalscore2");
const rolldice =document.getElementById('RollDice');
const hold=document.getElementById('Hold');


newgame.addEventListener('click',()=>{
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    totalscore1.innerHTML = 0;
    totalscore2.innerHTML = 0;
    cscore= 0;
    tscore1 = 0;
    tscore2= 0 ;
    x=1;
    
})
let cscore=0;
let x =1;

rolldice.addEventListener('click',()=>{
    let rnum= Math.floor(Math.random()*6 )+1;
    if ( rnum != '1' ) {
        document.querySelector("img").setAttribute("src","./assets/dice" + rnum+ ".svg") ;
        cscore = rnum + cscore;
        document.getElementById('score' + x ).innerHTML=cscore;
        return cscore;    
    }
    else {
        document.querySelector("img").setAttribute("src","./assets/dice" + rnum+ ".svg") ;
        cscore=0;
        document.getElementById('score' + x ).innerHTML=cscore;
        if ( x == 1) {
            x = x+1 ;
        }
        else {
            x= x - 1;
        }
        return cscore;
    }
})
let tscore1=0;
let tscore2= 0;
hold.addEventListener('click',()=>{
    if ( x == '1' ) {
        tscore1 = tscore1 + cscore;
        totalscore1.innerHTML = tscore1;
        cscore = 0;
        x= x+1 ;
        if (tscore1 > 40 ) {
            document.getElementById('player1').innerHTML = 'Winner' ; 

            }
        return cscore, tscore1 ;
        }
     if ( x == '2' ) {
        tscore2 = tscore2 + cscore;
        totalscore2.innerHTML = tscore2;
        cscore = 0;
        x=x-1;
        if (tscore2 > 40 ) {
            document.getElementById('player2').innerHTML = 'Winner' ; 

            }
        return cscore, tscore2 ;
        }            
})
