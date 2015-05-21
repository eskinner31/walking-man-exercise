  var viewport = document.defaultView;
  var stickFigure = document.getElementById("sticky");
  stickFigure.style.position = "relative";
  stickFigure.style.left ="0px";
  var logicValue = true;
//document.body.style.width = "1000px";
  var move = function(){
    if (logicValue == true){
      stickFigure.style.left = parseInt(stickFigure.style.left) + 10 + "px";
      if(parseInt(stickFigure.style.left) >= 1000){
        logicValue = false;
      }
      setTimeout(move,200);
    }
    if (logicValue == false){
      stickFigure.style.left = parseInt(stickFigure.style.left) - 10 + "px";
      if(parseInt(stickFigure.style.left) <= 0){
        logicValue = true;
      }
      setTimeout(move,200);
    }
  }

viewport.addEventListener('load',function(){
  move();
})
