angular
	.module('app')
	.directive('appDirective', function() {
		return {
			// restrict:
			template: '<h1>Minha Diretiva</h1><p>{{ name }} {{ lastname }}</p>',
			// require:
			// bindToController:
			scope: {
				name: '@',
				lastname: '@'
			},
			link: function($scope, $element, $attr) {
				console.log($scope);
			}
		}
	});