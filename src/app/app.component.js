/** 
* Diretiva especial onde conseguimos simplificar as 
* configurações e substituir a forma de uso da diretiva, 
* onde cria-se os web components. Presente a partir da versão 1.5
**/

angular
	.module('app')
	.component('hero', {
		templateUrl: 'app/hero.html',
		bindings: {
			heroname: '@'// '<' : One-way databinding
					  // '@' : Text
					  // '=' : Two-way databinding
					  // '&' : function 
		},
		controller: function() {
			this.hero = 'Esse é um novo component do AngularJS 1.5 - SON';
		}
	});