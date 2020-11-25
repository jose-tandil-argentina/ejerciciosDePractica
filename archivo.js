"use strict";

/*let btn = document.getElementById("btn");
*/


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
let contador = 0;




function showAlert() {

    fetch("://api.icndb.com/jokehttps/info.json", {
    
    })

    
    .then(response => response.json())
    .catch(error  => console.error(error));
    /*
    .then(data => {
        alert(data.value.joke)    
    })
    */

    /*
    then ( response.json())
    then  (alert(data.value.joke) =>{

    })
}
¨*/
    /*
        .then(response => response.json())
        .then(data => {
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

}
