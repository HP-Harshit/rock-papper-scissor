let i = 0;
let plr = 0;
let cmp = 0;
let p = 0;
let n = 0;
let s1=0;
let s2=0;

function winner(){
    if(plr == cmp){
        document.getElementById("dcl").innerHTML = "DRAW";
    }
    if(plr>cmp){
        document.getElementById("dcl").innerHTML = "YOU WON";
    }
    if(plr<cmp){
        document.getElementById("dcl").innerHTML = "COMPUTER WON";
    }
}


function score(){
    if(p==1 && n==2){
        cmp++;
        document.getElementById("myNumber1").innerHTML = cmp;
        
    }
    else if(p==1 && n==3){
        plr++;
        document.getElementById("myNumber").innerHTML = plr;
        
    }
    else if(p==2 && n==1){
        plr++;
        document.getElementById("myNumber").innerHTML = plr;
        
    }
    else if(p==2 && n==3){
        cmp++;
        document.getElementById("myNumber1").innerHTML = cmp;
        
    }
    else if(p==3 && n==1){
        cmp++;
        document.getElementById("myNumber1").innerHTML = cmp;
        
    }
    else if(p==3 && n==2){
        plr++;
        document.getElementById("myNumber").innerHTML = plr;
        
    }
    
}


function showRandomNumber(){
    // document.getElementById("myNumber").innerHTML = rando(1, 3);

        n = rando(1,3);

            // computer


    if(n==1){
        document.getElementsByClassName("icon")[0].src = "R.png";
        if(i==1){
        document.getElementsByClassName("scr11")[0].src = "R.png";
        score();
        }
        else if(i==2){
        document.getElementsByClassName("scr22")[0].src = "R.png";
        score();
        }
        else if(i==3){
        document.getElementsByClassName("scr33")[0].src = "R.png";
        score();
        }
        else if(i==4){
        document.getElementsByClassName("scr44")[0].src = "R.png";
        score();
        }
        else if(i==0){
        document.getElementsByClassName("scr55")[0].src = "R.png";
        score();
        }
    }
    if(n==2){
        document.getElementsByClassName("icon")[0].src = "P.png";
        if(i==1){
        document.getElementsByClassName("scr11")[0].src = "P.png";
        score();
        }
        else if(i==2){
        document.getElementsByClassName("scr22")[0].src = "P.png";
        score();
        }
        else if(i==3){
        document.getElementsByClassName("scr33")[0].src = "P.png";
        score();
        }
        else if(i==4){
        document.getElementsByClassName("scr44")[0].src = "P.png";
        score();
        }
        else if(i==0){
        document.getElementsByClassName("scr55")[0].src = "P.png";
        score();
        }
    }
    if(n==3){
        document.getElementsByClassName("icon")[0].src = "S.png";
        if(i==1){
        document.getElementsByClassName("scr11")[0].src = "S.png";
        score();
        }
        else if(i==2){
        document.getElementsByClassName("scr22")[0].src = "S.png";
        score();
        }
        else if(i==3){
        document.getElementsByClassName("scr33")[0].src = "S.png";
        score();
        }
        else if(i==4){
        document.getElementsByClassName("scr44")[0].src = "S.png";
        score();
        }
        else if(i==0){
        document.getElementsByClassName("scr55")[0].src = "S.png";
        score();
        }
    }

       if(i==0){
        winner();
        setInterval(()=>{
            window.location.reload();
        }, 8000);
       }




        

    
    
}





function show1(){
    p = 1;
    i++;
     if(i==1)
    document.getElementsByClassName("scr1")[0].src = "R.png";
    else if(i==2)
    document.getElementsByClassName("scr2")[0].src = "R.png";
    else if(i==3)
    document.getElementsByClassName("scr3")[0].src = "R.png";
    else if(i==4)
    document.getElementsByClassName("scr4")[0].src = "R.png";
    else if(i==5){
    document.getElementsByClassName("scr5")[0].src = "R.png";
    i=0;
    }
    showRandomNumber();
}
function show2(){
     p = 2;
    i++;
     if(i==1)
    document.getElementsByClassName("scr1")[0].src = "p.png";
    else if(i==2)
    document.getElementsByClassName("scr2")[0].src = "p.png";
    else if(i==3)
    document.getElementsByClassName("scr3")[0].src = "p.png";
    else if(i==4)
    document.getElementsByClassName("scr4")[0].src = "p.png";
    else if(i==5){
    document.getElementsByClassName("scr5")[0].src = "p.png";
    i=0;
    }
    showRandomNumber();
}
function show3(){
     p = 3;
    i++;
     if(i==1)
    document.getElementsByClassName("scr1")[0].src = "s.png";
    else if(i==2)
    document.getElementsByClassName("scr2")[0].src = "s.png";
    else if(i==3)
    document.getElementsByClassName("scr3")[0].src = "s.png";
    else if(i==4)
    document.getElementsByClassName("scr4")[0].src = "s.png";
    else if(i==5){
    document.getElementsByClassName("scr5")[0].src = "s.png";
    i=0;
    }
    showRandomNumber();
}





