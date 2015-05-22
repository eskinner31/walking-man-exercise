  var viewport = document.defaultView;
  var stickFigure = document.getElementById("sticky");
  stickFigure.style.position = "relative";
  stickFigure.style.left ="0px";;
  var logicValue = true;


  var move = function(){
    if (logicValue == true){
      stickFigure.style.left = parseInt(stickFigure.style.left) + 10 + "px";
      if(parseInt(stickFigure.style.left) >= 1000){
        logicValue = false;
        stickFigure.classList.add("flip");
      }
    }
    if (logicValue == false){
      stickFigure.style.left = parseInt(stickFigure.style.left) - 10 + "px";
      if(parseInt(stickFigure.style.left) <= 0){
        logicValue = true;
        stickFigure.classList.remove("flip");
      }
    }
  }

viewport.addEventListener('load',function(){
  setInterval(move,200);
})
