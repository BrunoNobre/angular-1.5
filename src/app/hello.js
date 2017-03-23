angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    // controller: function (MathFactory, MathService) {
    controller: function (ContactFactory) {

    	// VM: View Model
    	// this: Equivale ao scope e é acessado na view através do $ctrl.
    	let vm = this;

        vm.title = 'Novo contato';
        vm.listTitle = "Lista de Contatos";
        vm.list = [];
        vm.form = {};

        vm.add = add;

        (function onInit() {
            return vm.list = ContactFactory.getList();
        })();

        // Adiciona um contato
        function add(contact) {
            if(!contact) {
                alert('Necessário um contato válido');
                return;
            }
            clearForm();
            ContactFactory.add(contact);
        }

        // Limpa o formulário
        function clearForm() {
            vm.form = {};
        }
 
    //     vm.hello = 'Hello World School of Net!';
    //     vm.person = {
    //   	    name: 'Paulo Cesar',
    //   	    lastname: 'Ferreira de Mello'
    //     }

    //     vm.list = [
    //         { name: 'Paulo Cesar', lastname: 'Ferreira de Mello' },
    //         { name: 'Claudia', lastname: 'Rodrigues' },
    //         { name: 'Lucas', lastname: 'Freitas' },
    //         { name: 'Nerci', lastname: 'Abreu' },
    //         { name: 'Jaqueline', lastname: 'Ferreira de Mello' }
    //     ]

    //     vm.alertMe = function(){
    //     	alert("Eu sou o " + vm.person.name + " " + vm.person.lastname);
    //     } 

    //     vm.sumFactory = function(num1, num2) {
    //     	return alert('SumFactory: ' + (MathFactory.sum(num1, num2)));
    //     }

    //     vm.subFactory = function(num1, num2) {
    //     	return alert('SubFactory: ' + (MathFactory.sub(num1, num2)));
    //     }

    //     vm.sumService = function(num1, num2) {
    //     	return alert('SumService: ' + (MathService.sum(num1, num2)));
    //     }

    //     vm.subService = function(num1, num2) {
    //     	return alert('SubService: ' + (MathService.sub(num1, num2)));
    //     }
    }

  });
