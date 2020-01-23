
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;
	//var dessinTemp = new Drawing([]);

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.shapeFactory = function(dnd){
		switch(this.currEditingMode){
			case editingMode.rect:  {
			  return new Rectangle(dnd.beginX, dnd.beginY, dnd.beginX + dnd.endX , dnd.beginY + dnd.endY ,this.currLineWidth, this.currColour);
			  break;
			}
			case editingMode.line: {
			  return new Ligne(dnd.beginX, dnd.beginY, dnd.endX, dnd.endY ,this.currLineWidth, this.currColour);
			  break;
			}
		}
	}.bind(this);

	this.onInteractionStart = function(dnd){
		console.log(dnd.beginX + ' ' + dnd.beginY)
		this.currentShape = new Rectangle(dnd.beginX, dnd.beginY, dnd.beginX + dnd.endX , dnd.beginY + dnd.endY , this.currLineWidth, this.currColour);
		//this.currentShape.paint(ctx,canvas);
		//dessinTemp.addForm(this.currentShape);
		//dessinTemp.paint(ctx,canvas);
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		console.log(dnd.beginX + ' ' + dnd.beginY)
		this.currentShape = this.shapeFactory(dnd);
		drawing.paint(ctx);
		this.currentShape.paint(ctx);
		/*var r = new Rectangle(dnd.beginX, dnd.beginY, dnd.beginX + dnd.endX , dnd.beginY + dnd.endY ,this.currLineWidth, this.currColour);
		r.paint(ctx);*/
	}.bind(this);

	this.onInteractionEnd = function(dnd){
		console.log(dnd.beginX + ' ' + dnd.beginY)
		this.drawing.addForm(this.currentShape);
		this.drawing.paint(ctx);
	}.bind(this);
};


