angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory, MathService) {

    	// VM: View Model
    	// this: Equivale ao scope e é acessado na view através do $ctrl.
    	let vm = this;
 
        vm.hello = 'Hello World School of Net!';
        vm.person = {
      	    name: 'Paulo Cesar',
      	    lastname: 'Ferreira de Mello'
        }

        vm.alertMe = function(){
        	alert("Eu sou o " + vm.person.name + " " + vm.person.lastname);
        } 

        vm.sumFactory = function(num1, num2) {
        	return alert('SumFactory: ' + (MathFactory.sum(num1, num2)));
        }

        vm.subFactory = function(num1, num2) {
        	return alert('SubFactory: ' + (MathFactory.sub(num1, num2)));
        }

        vm.sumService = function(num1, num2) {
        	return alert('SumService: ' + (MathService.sum(num1, num2)));
        }

        vm.subService = function(num1, num2) {
        	return alert('SubService: ' + (MathService.sub(num1, num2)));
        }
    }

  });
