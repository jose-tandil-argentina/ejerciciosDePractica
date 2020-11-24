"use strict";

/*let btn = document.getElementById("btn");
*/


let contador = 0;




function showAlert() {

    fetch("http://api.icndb.com/jokes/random", {


        /*
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "dasdasd":"dasdasd",
            
        },
        body: JSON.stringify({
            name: "tata",
            age: 28,
        })
        .then((reponse)=>{
            debugger
        })
        */

    })
        
    .then(response => response.text())
    .then(data =>{
        debugger    
    })
       /*
        .then((response) => {
            debugger
        })



/*
btn.addEventListener("click", EventClick);


/*
btn.addEventListener('click', function(e){
  let t_bomba =  document.getElementById("inputBomba").value;
  alert("Corra en 5 segundos se activará la Bomba");
  setTimeout(function(){
  cuentaRegre(t_bomba); }, 5000); // llamado diferido
});

function cuentaRegre(i) {
    let intervalo = setInterval(function() {
        document.getElementById("bomba").innerHTML = i;
        if (i === 0) {
            clearInterval(intervalo); // limpio intervalo para detener
            alert('BOOOOOM!!');
        }
        else {
            i--;
        }
    }, 1000);
}
*/


