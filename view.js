
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

    Forme.prototype.paint = function(ctx) {
        ctx.strokeStyle = this.getCouleur();
        ctx.lineWidth = this.getEpaisseur();
        console.log('passe par paintform' + this.getCouleur() + ' ' + this.getEpaisseur())
    };

    Rectangle.prototype.paint = function(ctx) {
        Forme.prototype.paint.call(this,ctx);
        ctx.beginPath();
        ctx.rect(this.getHautGaucheX(), this.getHautGaucheY(), this.getHautGaucheX()+this.getLargeur(), this.getHautGaucheY()+this.getHauteur());
        ctx.stroke();
        console.log('passe par paintrect' + this.getHautGaucheX() + ' ' +this.getLargeur())
    };
    
    Ligne.prototype.paint = function(ctx) {
        Forme.prototype.paint.call(this,ctx);
        ctx.beginPath();
        ctx.moveTo(this.getBeginX(), this.getBeginY());
        ctx.lineTo(this.getEndX(), this.getEndY());
        ctx.stroke();
        console.log('passe par paintLine' )
        console.log(this.getBeginX() )
        console.log(this.getBeginY() )
        console.log(this.getEndX() )
        console.log(this.getEndY() )
    
    };
 
   
    Drawing.prototype.paint = function(ctx) {
        console.log(this.getListForm());
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.getListForm().forEach(function(eltDuTableau) {
            // now fill the canvas
            eltDuTableau.paint(ctx);
        });
    };
    
