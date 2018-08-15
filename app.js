/*
var app = (function() {
	"use strict";

	var arr, parseSimple, parseImbriquee, start;

	var i,j,arr=[ // ici arr n'est pas le même que celui de dessus et reste dans la fonction
	["a1", "b1", "c1"], 
	["a2","b2","c2","d2"],
	["a3","b3","c3","d3","e3"]
	];

	parseSimple = function (){
		var i, arr= ["a", "b", "c", "d", "e", "f", "g"];

		for(let i=0; i < arr.length; i+=1){			
	// ici pas de var avant i car mot clé var i est mis avant
	// mieux de mettre var i avant la fonction car automatiquement la fonction la place au dessus
	// mieux de mettre let si mot clé var i déjà au dessus
			console.log(arr[0]);
		};
	};


	parseImbriquee = function(){
		var i, arr=[ // ici arr n'est pas le même que celui de dessus et reste dans la fonction
		["a1", "b1", "c1"], 
		["a2","b2","c2","d2"],
		["a3","b3","c3","d3","e3"]
		];
	console.log(arr);
	for (let i=0; i < arr.length; i++){
		console.log(arr[i]);
	};
	console.log("fin de boucle");	
	};



	for (i=0; i < arr.length; i++){
		console.log(arr[i]);
		for (j=0; j < arr[i].length; j++){
			console.log(arr[i][j]);
		};
	console.log("boucle finie")	
	}

	start = function(){
	parseSimple();
	parseImbriquee();
};


window.addEventListener("DOMContentLoaded", start);
	
}());
*/




console.log(" ");
console.log("-------- Let's try --------");
console.log(" ");


var app2 = function(){
	"use strict";

	var pizza = function(n,b,p){
		return {
			name: n,
			base: b,
			price: p
		};
	};


	var pizza1 = pizza("4 fromages", "crème fraiche", 21);
	var pizza2 = pizza("saumon", "crème fraiche", 18);
	var pizza3 = pizza("savoyarde", "crème fraiche", 21);
	var pizza4 = pizza("thon", "tomate", 17);
	var pizza5 = pizza("margarita", "tomate", 15);
	var pizza6 = pizza("végétarienne", "tomate", 15);


	var parcourir=function(){
		var i, j, arr1=[];
		arr1.push(pizza1);
		arr1.push(pizza2);
		arr1.push(pizza3);


		var arr2 = [];
		arr2.push(pizza4);
		arr2.push(pizza5);
		arr2.push(pizza6);

		var arr=[];
		arr.push(arr1,arr2);
		console.log(arr);

		for(let i=0; i<arr.length; i++){
			console.log(arr[i]);
			for (let j=0; j<arr[i].length; j++){
				console.log(arr[i][j].name);
				console.log(arr[i][j].base);
				console.log(arr[i][j].price);
			};		
		};

	};
	parcourir();
};


app2();
























