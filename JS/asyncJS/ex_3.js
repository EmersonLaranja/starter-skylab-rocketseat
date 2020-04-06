/*A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
<li>Carregando...</li>
Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.*/

var listElement = document.querySelector('ul');
    var inputElement = document.querySelector('input');

    function renderRepositories(repositories) {

        if(repositories.length==0){
            alert("User doesn't have a repository");
        }
        
      for (repository of repositories) {
          
        const textElement = document.createTextNode(repository.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
      }
    }

    function listRepositories() {
      var user = inputElement.value;

      if (!user) return;

      axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
          renderRepositories(response.data);
          console.log(response);
        })
        .catch(function(error){
            alert("User doesn't exist!");
            console.log(error);
        })
        
    }