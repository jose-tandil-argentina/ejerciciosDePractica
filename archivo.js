let btn = document.getElementById("btn");

function EventClick() {
  if()
    {
        "type"; "success"; "value"; {
            "id"; 175, "joke"; "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle.";
             "categories"; []
        }
    }
}

let btn = document.getElementById("btn");

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






  