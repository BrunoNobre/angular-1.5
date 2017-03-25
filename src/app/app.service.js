angular
	.module('app')
	.service('ContactService', function() {

		var list = [];

		this.getList = getList;
		this.setList = setList;
		this.add = add;
		this.update = update;
		this.remove = remove;

		function getList() {
			return list;
		}

		function setList(_list) {
			list = _list;
		}

		function add(contact) {
			list.push(contact);
		}

		function update(contact, index) {
			list[index] = contact;
		}

		function remove(index) {
			list.splice(index, 1);
		}

		// ASSOCIANDO AS FUNÇÕES DA FACTORY NO SERVICE
		// this.sum = MathFactory.sum;
		// this.sub = MathFactory.sub;

		/* PODERIA SER DESSA FORMA TAMBÉM
		
		this.sum = function(num1, num2) {
			return MathFactory.sum(num1, num2)
		};

		this.sub = function(num1, num2) {
			return MathFactory.sub(num1, num2)
		};
		*/
});