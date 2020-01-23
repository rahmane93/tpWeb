
// Implémenter ici les 4 classes du modèle.
function Forme(couleur, epaisseurTrait) {
    this.couleur = couleur;
    this.epaisseurTrait = epaisseurTrait;

    this.getCouleur = function() {
      return this.couleur;
    }.bind(this) ;

    this.getEpaisseur = function() {
        return this.epaisseurTrait;
      }.bind(this) ;
      
  };

  function Rectangle(hautGaucheX,hautGaucheY,largeur,hauteur, epaisseurTrait, couleur) {
    Forme.call(this, couleur, epaisseurTrait);
    this.hautGaucheX = hautGaucheX;
    this.hautGaucheY = hautGaucheY;
    this.largeur = largeur;
    this.hauteur = hauteur;
    
    this.getHautGaucheX = function() {
        return this.hautGaucheX;
      }.bind(this) ;
    
      this.getHautGaucheY = function() {
        return this.hautGaucheY;
    }.bind(this) ;
    
    this.getLargeur = function() {
        return this.largeur;
    }.bind(this) ;
    
    this.getHauteur = function() {
        return this.hauteur;
    }.bind(this) ;

  };
  function Ligne(beginX,beginY,endX,endY, epaisseurTrait, couleur){
    Forme.call(this, couleur, epaisseur);
    this.beginX = beginX;
    this.beginY = beginY;
    this.endX = endX;
    this.endY = endY;

    this.getBeginX = function() {
        return this.getBeginX;
    }.bind(this) ;
    
    this.getBeginY = function() {
        return this.getBeginY;
    }.bind(this) ;

    this.getEndX = function() {
        return this.endX;
    }.bind(this) ;
    
    this.getEndY = function() {
        return this.endY;
    }.bind(this) ;

  }
 
  function Drawing(listForm){
      this.listForm = listForm;

    this.getListForm = function() {
        return this.listForm;
    }.bind(this) ;
  }
  
  

// N'oubliez pas l'héritage !
