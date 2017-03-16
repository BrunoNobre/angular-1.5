angular
	.module('app')
	.factory('MathFactory', function() {

		/* IMPLEMENTAÇÃO MAIS FÁCIL DE SER ENTENDIDA
		Cria um objeto, cria as funções, atribui-as 
		dentro do objeto e retorna o objeto */
		var factory = {};

		factory.sub = sub;
		factory.sum = sum;

		function sub(num1, num2) {
			return num1 - num2;
		}

		function sum(num1, num2) {
			return num1 + num2;
		}

		return factory;

		/*
			Seria a mesma coisa de:
			return {
				sub: function(num1, num2) {
					return num1 - num2;
				},
				sum: function(num1, num2) {
					return num1 + num2;
				}
			}
		*/
});