

for(let i=0;i<document.querySelectorAll(".item").length;i++){

    document.querySelectorAll(".item")[i].addEventListener("click",function(){
        if(document.querySelectorAll(".item")[i].textContent==""){
        document.querySelectorAll(".item")[i].textContent="X";
        }
        computerchoice();
        checkwinner();
        if(document.getElementById("Result").textContent=="You Won"){
            document.getElementById("Result").textContent="You Won! Click Replay to play again";
        }
        else if(document.getElementById("Result").textContent=="You lose"){
            document.getElementById("Result").textContent="You lose! Click Replay to play again";
        }
        
    })
   
    
    
}

function computerchoice(){
    let random = Math.floor(Math.random() * 9)+1;
    if(random==1){
        random="first";
    }
    else if(random==2){
        random="second";
    }
    else if(random==3){
        random="third";
    }
    else if(random==4){
        random="fourth";
    }
    else if(random==5){
        random="fifth";
    }
    else if(random==6){
        random="sixth";
    }
    else if(random==7){
        random="seventh";
    }
    else if(random==8){
        random="eigth";
    }
    else if(random==9){
        random="ninth";
    }
    if(document.getElementById(random).textContent=="X" || document.getElementById(random).textContent=="O"){
        computerchoice();
    }
    else{
        document.getElementById(random).textContent="O";
    }
    
}

function checkwinner(){

if(document.getElementById("first").textContent=="X" && document.getElementById("second").textContent=="X" && document.getElementById("third").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("fourth").textContent=="X" && document.getElementById("fifth").textContent=="X" && document.getElementById("sixth").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("seventh").textContent=="X" && document.getElementById("eigth").textContent=="X" && document.getElementById("ninth").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("first").textContent=="X" && document.getElementById("fourth").textContent=="X" && document.getElementById("seventh").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("second").textContent=="X" && document.getElementById("fifth").textContent=="X" && document.getElementById("eigth").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("third").textContent=="X" && document.getElementById("sixth").textContent=="X" && document.getElementById("ninth").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("first").textContent=="X" && document.getElementById("fifth").textContent=="X" && document.getElementById("ninth").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}
else if(document.getElementById("third").textContent=="X" && document.getElementById("fifth").textContent=="X" && document.getElementById("seventh").textContent=="X"){
    document.getElementById("Result").textContent="You Won";
}



if(document.getElementById("first").textContent=="O" && document.getElementById("second").textContent=="O" && document.getElementById("third").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("fourth").textContent=="O" && document.getElementById("fifth").textContent=="O" && document.getElementById("sixth").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("seventh").textContent=="O" && document.getElementById("eigth").textContent=="O" && document.getElementById("ninth").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("first").textContent=="O" && document.getElementById("fourth").textContent=="O" && document.getElementById("seventh").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("second").textContent=="O" && document.getElementById("fifth").textContent=="O" && document.getElementById("eigth").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("third").textContent=="O" && document.getElementById("sixth").textContent=="O" && document.getElementById("ninth").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("first").textContent=="O" && document.getElementById("fifth").textContent=="O" && document.getElementById("ninth").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}
else if(document.getElementById("third").textContent=="O" && document.getElementById("fifth").textContent=="O" && document.getElementById("seventh").textContent=="O"){
    document.getElementById("Result").textContent="You lose";
}


}

document.getElementById("Reset").addEventListener("click",function(){
    for(let i=0;i<document.querySelectorAll(".item").length;i++){
        document.querySelectorAll(".item")[i].textContent="";
    }
    document.getElementById("Result").textContent="Result:"
})


