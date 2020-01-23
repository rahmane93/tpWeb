
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.beginX = 0;
  this.beginY = 0;
  this.endX = 0;
  this.endY = 0;
  this.beginDnD = false;

  // Developper les 3 fonctions gérant les événements
  
  this.push = function(event){
    this.beginDnD = true;
    var position = getMousePosition(canvas,event);
    this.beginX = position.x;
    this.beginY = position.y;
    //console.log(this.beginX);
    interactor.onInteractionStart(this);
  }.bind(this);

  this.move = function(event){
    if(this.beginDnD == true){
      var position = getMousePosition(canvas,event);
      this.beginX = position.x;
      this.beginY = position.y;
      interactor.onInteractionUpdate(this)

      //console.log(this.beginX);
    }
  }.bind(this);

  this.up = function(event){
      var position = getMousePosition(canvas,event);
      this.endX = position.x;
      this.endY = position.y;
      this.beginDnD = false;
      interactor.onInteractionEnd(this)
      //console.log(this.endX);
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.push, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.up, false);

};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



