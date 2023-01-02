const rex = document.getElementById("rex");
const cactus = document.getElementById("cactus");

document.addEventListener("click", cactusmove)

function cactusmove(){
  if (cactus.classList != "cactus-move"){
    cactus.classList.add("cactus-move");
    setInterval(function(){
      var pic = document.getElementById("rex");
      pic.src("dino"+(i%2).toString()+"png");
      let i = 1;
      i++;}, 30);
    n.style.setProperty('opacity', '0');
  }
}

document.addEventListener("keydown", jump)
j = document.querySelector('.jump');
c = document.querySelector('.cactus');
r = document.querySelector('.rex');

function jump(){
  if(rex.classList != "jump"){
    rex.classList.add("jump");
  }
  setTimeout( function(){
      rex.classList.remove("jump");
    }, 500)

}

function gameover(cactusLeft, rexTop){
  n.style.setProperty('opacity', '1');
  cactus.classList.remove("cactus-move");
  c.style.setProperty('left', cactusLeft+"px");
  document.addEventListener("click", cactusmove);
}

var n = document.querySelector('.name2');

let isAlive = setInterval( 
  function(){
    let rexTop = parseInt(window.getComputedStyle(rex).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(rexTop>114&&cactusLeft<-30){
      gameover(cactusLeft, rexTop);
    }
  }, 10)
