angular.module("app").component("app", {
  templateUrl: "app/hello.html",
  // controller: function (MathFactory, MathService) {
  controller: function (ContactFactory) {
    // VM: View Model
    // this: Equivale ao scope e é acessado na view através do $ctrl.

    let vm = this;

    // Título do formulário
    vm.title = "Novo contato";

    // Título da lista de contatos
    vm.listTitle = "Lista de Contatos";

    // Lista de contatos
    vm.list = [];

    // Formulário de contato
    vm.form = {};

    // Liberando as funções para o uso na view model
    vm.add = add;
    vm.edit = edit;
    vm.remove = remove;

    // IIFE = Função executada imediatamente após sua criação
    (function onInit() {
      return (vm.list = ContactFactory.getList());
    })();

    // Adiciona ou altera um contato
    function add(contact, index) {
      if (!contact) {
        alert("Necessário um contato válido");
        return;
      }
      if (!vm.list[index]) {
        ContactFactory.add(contact);
        clearForm();
        alert("Adicionado com sucesso!");
        return;
      }
      ContactFactory.update(contact, index);
      clearForm();
      alert("Alterado com sucesso!");
    }

    // Seleciona o contato para edição no formulário
    function edit(contact, index) {
      if (!contact) alert("Necessário um contato válido");
      vm.form = angular.copy(contact);
      vm.indexUpdate = index;
    }

    // Altera o contato na lista
    function update(contact, index) {
      ContactFactory.edit(contact, index);
    }

    // Deleta o contato da lista
    function remove(contact, index) {
      if (confirm("Deseja excluir " + contact.name + "?")) {
        ContactFactory.remove(index);
        alert("Excluído com sucesso!");
      }
    }

    // Limpa o formulário
    function clearForm() {
      vm.form = {};
      delete vm.indexUpdate;
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
  },
});
