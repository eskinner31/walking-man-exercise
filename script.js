  var viewport = document.defaultView;
  var stickFigure = document.getElementById("sticky");
  stickFigure.style.position = "relative";
  stickFigure.style.left ="0px";
//document.body.style.width = "1000px";


viewport.addEventListener('click',function(){
  stickFigure.style.left = parseInt(stickFigure.style.left) + 10 + "px";
})
