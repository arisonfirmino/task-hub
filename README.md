# TaskHub

TaskHub é uma aplicação web simples feita com Next.js e TypeScript para ajudar na organização de tarefas. O objetivo principal foi criar uma aplicação que permita adicionar, editar, visualizar e excluir tarefas (CRUD) de forma fácil. A interface é projetada para ser amigável, com menus e botões que facilitam a navegação.

👉 [acesse a aplicação](https://task-hub-six.vercel.app/)

![Preview](https://utfs.io/f/f5224ef8-a415-485f-934b-aaeb030e8bcf-r2tqvc.png)

A aplicação está dividida em duas partes principais: um tipo de menu lateral e uma área principal de visualização das tarefas. O menu lateral possui uma barra de pesquisa que permite encontrar tarefas rapidamente. Além disso, há quatro botões de filtro para organizar as tarefas por categoria: 'Todas', 'Importantes', 'Concluídas' e 'Lixeira'. O botão 'Lixeira' é especialmente útil para recuperar tarefas recentemente excluídas ou excluí-las permanentemente. Dentro do menu lateral também é onde se encontra o formulário usado para adicionar uma nova tarefa na aplicação.

Cada tarefa na aplicação possui três botões de interação individual.

Um botão que permite marcar a tarefa como importante. Quando uma tarefa é marcada como importante, suas bordas mudam para um tom de amarelo, proporcionando um sinal visual claro de sua importância. Essa abordagem torna fácil identificar as tarefas prioritárias em meio a outras.

Outro botão disponível é um que indica que a tarefa foi concluída. Ao marcá-la como tal, o ícone de conclusão é alterado para um tom de verde e uma linha é adicionada sobre o texto da tarefa. Essa mudança visual clara indica que a tarefa foi concluída com sucesso, o que facilita o progresso das atividades.

Há também um botão com o ícone de uma lixeira, que ao ser clicado envia a tarefa para a lixeira. Dentro da lixeira, as tarefas são exibidas com dois outros botões. Um desses botões possibilita que o usuário recupere a tarefa para a lista principal, enquanto o outro, também com o ícone de uma lixeira, remove a tarefa permanentemente da aplicação.

Para garantir a permanecia das tarefas mesmo se o usuário fechar a aplicação e, retornar mais tarde por exemplo, como é uma aplicação simples do frontend optei por uma solução prática que foi armazenar as tarefas no localStorage do navegador.
