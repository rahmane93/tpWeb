
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd


	this.onInteractionStart = function(dnd){
		console.log(dnd.beginX + ' ' + dnd.beginY)
		var r = new Rectangle(dnd.beginX, dnd.beginY, dnd.beginX + dnd.endX , dnd.beginY + dnd.endY , this.currColour, this.currLineWidth );
		r.paint(ctx);

	}.bind(this);
	this. onInteractionUpdate = function(dnd){
		console.log(dnd.beginX + ' ' + dnd.beginY)
		var r = new Rectangle(dnd.beginX, dnd.beginY, dnd.beginX + dnd.endX , dnd.beginY + dnd.endY , this.currColour, this.currLineWidth );
		r.paint(ctx);

	}.bind(this);

	this.onInteractionEnd = function(dnd){
		console.log(dnd.beginX + ' ' + dnd.beginY)
		var r = new Rectangle(dnd.beginX, dnd.beginY, dnd.beginX + dnd.endX , dnd.beginY + dnd.endY , this.currColour, this.currLineWidth );
		r.paint(ctx);



	}.bind(this);
	
};


