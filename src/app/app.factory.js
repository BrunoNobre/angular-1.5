angular
	.module('app')
	.factory('ContactFactory', function(ContactService) {

		// O factory nesse contexto está sendo responsável em
		// enviar os dados para o service armazenar.
		var factory = {};

		factory.add = add;
		factory.getList = getList;

		function add(contact) {
			ContactService.add(contact);
		}

		function getList() {
			return ContactService.getList();
		}

		return factory;

		/* IMPLEMENTAÇÃO MAIS FÁCIL DE SER ENTENDIDA
		Cria um objeto, cria as funções, atribui-as 
		dentro do objeto e retorna o objeto */
		// var factory = {};

		// factory.sub = sub;
		// factory.sum = sum;

		// function sub(num1, num2) {
		// 	return num1 - num2;
		// }

		// function sum(num1, num2) {
		// 	return num1 + num2;
		// }

		// return factory;

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