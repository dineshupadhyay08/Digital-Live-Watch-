let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

setInterval(()=>{
    
let currentTIme = new Date();


    hrs.innerHTML = (currentTIme.getHours()<10?"0":"") + currentTIme.getHours();
    min.innerHTML = (currentTIme.getMinutes()<10?"0":"") + currentTIme.getMinutes();;
    sec.innerHTML = (currentTIme.getSeconds()<10?"0":"") + currentTIme.getSeconds();


},1000)