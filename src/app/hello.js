angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function () {

    	// VM: View Model
    	// this: Equivale ao scope e é acessado na view através do $ctrl.
    	let vm = this;

        // Ele trabalha melhor que o scope.
        vm.hello = 'Hello World School of Net!';
        vm.person = {
      	    name: 'Paulo Cesar',
      	    lastname: 'Ferreira de Mello'
        }

        vm.alertMe = function(){
        	alert("Eu sou o " + vm.person.name + " " + vm.person.lastname);
        } 
    }

  });
