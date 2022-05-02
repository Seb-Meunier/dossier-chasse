//auteurs: Sébastien Meunier 
//dernières modifications le 11 Avril 2022
 
//Variables globales
var TableauJeu ;
var tresorCarte="Trésor" ;
var nbMax=9 ;
var tresorX ;
var tresorY ;
var scoreJoueur ;

//Création du tableau (en mémoire)
function Tab2D(x, y) {
	var table = new Array(x);
	for (var i = 0; i < table.length; i++) {
		table[i] = new Array(y);
	}
	return table ;
}

//Fonction d'initialisation du jeu
function init() {
	//Remise de la partie à zéro (supprimer le bouton, vider le tableau pour laisser la place aux nouvelles cases, remise du score à 0)
	document.getElementById("bouttonInit").innerHTML="" ;
	document.getElementById("carte").innerHTML="" ;
	document.getElementById("scoreJoueur").innerHTML="0"  ;
	scoreJoueur=0 ;

	//Création et récupération du tableau (en mémoire) dans une variable "globale"
	TableauJeu=Tab2D(10, 10) ;

	//Définir l'emplacement du trésor avec un Random
	tresorX = Math.floor(Math.random() * nbMax + 1) ;
	tresorY = Math.floor(Math.random() * nbMax + 1) ;

	//Ajouter le trésor dans le tableau (en mémoire)
	TableauJeu[tresorX][tresorY]=tresorCarte ;
	//console.log(TableauJeu) ;

	//Générer le tableau en html (i=numéro de ligne / h numéro de colonne) => départ à 0
	//Création de la ligne
	var ligneTab="" ;
	for(var i=0; i<=9;i++)
	{
		ligneTab+="<tr>"
		for(var h=0; h<=9;h++)
		{
			//création des colonnes
			ligneTab+='<td class="caseCarte" onclick="choix(this.id)" id='+i+"-"+h+'></td>' ;
		}
		ligneTab+="</tr>" ;
		
	}
	//ajout de toutes les lignes au tableau
	document.getElementById("carte").innerHTML+=ligneTab ;

}

// choix() récupère l'ID de la case cliquée et traite le résultat
