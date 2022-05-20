//auteurs: Sébastien Meunier 
//dernières modifications le 19 mai 2022
 
//Variables globales

var bonus = ["Vous trouvez une pelle en or", "Un eniripsa passe par la et vous aide à trouvez le chemin","Un éliotrope vous lance des portails","Une épée planter dans l'herbe"];
var malus = ["Vous tombez contre un ennemie lv 200 vous êtes lv 100","Vous vous battez contre la maladie", "Un iop vous indique le mauvais chemin","Vous cherchez dans cette direction et hop un sram vous fait les poches ..."];
var texte = ["Bravo vous avez gagné"];
var texte2 = ["Vous êtes dans la bonne ligne"];
var texte2 = ["Vous êtes dans la bonne ligne"];
var TableauJeu ;
var tresorCarte="Trésor" ;
var nbMax=9 ;
var tresorX ;
var tresorY ;
var scoreJoueur ;
var jourJoueur  ; 
var aléatoire = Math.floor(Math.random()*bonus.length); // selectionne au hasard dans la liste bonus
var aléatoire2 = Math.floor(Math.random()*malus.length); // selectionne au hasard dans la liste malus
var texte3 = []; 

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
	//Remise de la partie à zéro (supprimer le bouton, vider le tableau pour laisser la place aux nouvelles cases, remise du score à 0, mise du jours à 0)
	document.getElementById("bouttonInit").innerHTML="" ;
	document.getElementById("carte").innerHTML="" ;
	document.getElementById("scoreJoueur").innerHTML="0"  ;
	document.getElementById("jourJoueur").innerHTML = "0"  ;
	

	scoreJoueur=0 ;
	jourJoueur = 0;
	commentaire = 0;
	

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
function choix(idCase) {
    tabCoordonnees = idCase.split("-");
    var idX=tabCoordonnees[0] ;
    var idY=tabCoordonnees[1] ;

	var caseClic=document.getElementById(idX +"-" + idY);

	if(TableauJeu[idX][idY]=="Trésor")
	{
		scoreJoueur += 1;
		jourJoueur += 0;
		
		//la case contient le trésor
		caseClic.classList.add("tresor");
		//Empecher l'utilisateur de cliquer à nouveau
		//Récupérer les td dans un tableau
		var tabTd= document.getElementsByClassName("caseCarte");
		//retirer pour chaque case sa capacité à être cliquable
		for (var i=0 ; i<tabTd.length ;i++)
		{
			tabTd[i].removeAttribute("onclick") ;
		}

		//Proposition de reccomencer le jeu
		document.getElementById("bouttonInit").innerHTML+='<button onclick="init()">Recommencer le jeu</button>' ;
	}
	else{
	//la case ne contient pas le trésor
		if(idY==tresorY) {
			scoreJoueur += 0.5;
			commentaire = aléatoire;
			
			//si la case cliquée est dans la bonne colonne 
			caseClic.classList.add("bonneColonne");
			jourJoueur += 1;
			commentaire = aléatoire;
		}
		else if (idX==tresorX){ 
			scoreJoueur += 0.5;
			jourJoueur += 1;
			//si la case cliquée est dans la bonne ligne
			//console.log(caseClic);
			caseClic.classList.add("bonneLigne");	
			commentaire = aléatoire; 
		}
		else {
			caseClic.classList.add("bad");
			scoreJoueur -= 0;
			jourJoueur +=1;
			
		}
		
	}
	//Afficher le nouveau score et les jours 
	document.getElementById('scoreJoueur').innerHTML=scoreJoueur ;
	document.getElementById('jourJoueur').innerHTML=jourJoueur ;
	
	
	

}

/*function Personne(prenom, nom, age, genre, interets) {
	this.nom = {
	  prenom,
	  nom
	};
	this.age = age;
	this.genre = genre;
	this.interets = interets;
  };*/ 

 /* function Professeur(prenom, nom, age, genre, interets, matiere) {
	Personne.call(this, prenom, nom, age, genre, interets);
  
	this.matiere = matiere;
  }*/

/*  var myArray = ['one', 'two', 'three', 'four', 'five'];
var rand = Math.floor(Math.random()*myArray.length);
var rValue = myArray[rand];
console.log(rValue)*/