
var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("h").textContent = 10 - timeleft;
  timeleft -= 1;
}, 1000);


function click() {
    for (i = 10; i > 0 ; i--) {
        
        setInterval(()=> {h.textContent = i}, 1000)
    }
}
button = document.getElementById("but")
button.onclick = click