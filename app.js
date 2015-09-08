(function(){
	var app = angular.module('recordMan', []);

	app.controller('mainCtrl', function(){
		this.persons = record;
	});

	var record = [
		{ name: 'Miguel A. Covarrubias',
		age: 19,
		description: "peorsona que estudioa" },

		{ name: 'Jose A. Covarrubias',
		age: 33,
		description: "Programer who has done anything" },

		{ name: 'Guillermo Vela',
		age: 29,
		description: "Programer who has done everything" }
	];
})();