[English - Portuguese]

# Welcome to the Task List project repository!

## What should be developed

In this project, you will implement a task list.
An application that allows the person using it to add tasks, mark them as completed and clear all or just those that have been completed.

Below you can see an example of a task list.
Use this example as a reference.
You will be able to style your project the way you want as long as all requirements are met.
Use your imagination!

! [] (todo-list-example.gif)

## Project requirements

### 1 - Your list should have the title "My Task List" in a `<header>` tag. This title does not vary according to the content of the list. Do not confuse this title with the page title, which should appear inside the `head`_ tag.

### 2 - Below the title, there should be a small and discreet paragraph with `id =" operation "` and with the text "Double click on an item to mark it as complete" explaining the operation of the list to the user.

### 3 - There must be an `input` with` id = "task text" `where the user can type the name of the item he wants to add to the list.

### 4 - There should be an ordered list of tasks with `id =" task list "`.

### 5 - There should be a button with `id =" create task "` and when clicking this button, a new item must be created at the end of the list and the text of the input must be cleared.

### 6 - The items in the task list must be ordered in order of creation.

### 7 - When hovering over any button, the mouse icon should change to a little hand pointing it.

### 8 - When clicking on an item in the list, change the background color of the item to rRGBgray (128,128,128).

### 9 - When double-clicking on an item, it should be crossed out, indicating that it was complete. It should be possible to undo this action by double-clicking the item again.

    Important points about this requirement:

    * Create a CSS class with the name "completed" and set the "text-decoration" property to the value "line-through".

    * Use the CSS class "completed" to add the strikethrough effect to the completed tasks.

### 10 - There should be a button with `id ="delete-everything"` that when clicked should delete all items from the list.

### 11 - There should be a button`id = "remove-finalized" `that when clicked removes ** only ** the finished elements from your list.

## BONUS

### 1 - Add a button with `id ="save tasks"` that saves the contents of the list. If you close and reopen the page, the list should continue as it was. Tip: Read about _Local Storage_ in the additional resources section.

### 2 - How your list is ordered, what happens if you forget an item? You would have to delete the list and start all over again, as you can only insert one item at the end, right? Add two buttons, one with `id ="move-up"` and another with `id ="move-down"`, which allows you to move the selected item up or down in the task list.

Important points about this bonus requirement:

* Before starting to develop this functionality, stop and think. What does it mean to move an item in a list up or down in ** _ DOM _ **? You already have all the skills necessary to do this.

* Get used to thinking about special cases when building programs. What happens if the user tries to move the first item up or the last item down?

### 3 - Add a button with `id ="remove-selected"` which, when clicked, removes the selected item.

----
----
----
----

# Boas vindas ao repositório do projeto Lista de Tarefas!

## O que deverá ser desenvolvido

Neste projeto, você implementará uma lista de tarefas.
Ou seja, uma aplicação que permita a pessoa que usa adicionar tarefas, marcá-las como concluídas e limpar todas ou apenas aquelas que foram concluídas.

Abaixo você pode ver um exemplo de uma lista de tarefas.
Utilize este exemplo como referência.
Você poderá estilizar seu projeto da forma que desejar desde que todos os requisitos sejam cumpridos.
Use sua imaginação!

![](todo-list-example.gif)

## Requisitos do projeto

### 1 - Sua lista deve possuir o título "Minha Lista de Tarefas" em uma tag `<header>`. Esse título não varia de acordo com o conteúdo da lista. _Não confunda esse título com o título da página, que deve aparecer dentro da tag `head`_.

### 2 - Abaixo do título deve haver um pequeno e discreto parágrafo com `id="funcionamento"` e com o texto "Clique duas vezes em um item para marcá-lo como completo" explicando o funcionamento da lista para o usuário.

### 3 - Deve haver um `input` com o `id="texto-tarefa"` onde o usuário poderá digitar o nome do item que deseja adicionar à lista.

### 4 - Deve haver uma lista ordenada de tarefas com o `id="lista-tarefas"`.

### 5 - Deve haver um botão com `id="criar-tarefa"` e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

### 6 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.

### 7 - Ao passar o mouse sobre qualquer botão o ícone do mouse deve mudar para uma mãozinha apontando ele.

### 8 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).

### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) as tarefas finalizadas.

### 10 - Deve haver um botão com `id="apaga-tudo"`que quando clicado deve apagar todos os items da lista.

### 11 - Deve haver um botão`id="remover-finalizados"` que quando clicado remove **somente** os elementos finalizados da sua lista.

## BÔNUS

### 1 - Adicione um botão com `id="salvar-tarefas"` que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava. Dica: Leia sobre _Local Storage_ na seção de recursos adicionais.

### 2 - Como sua lista é ordenada, o que acontece se você esquecer de um item? Você teria que apagar a lista e começar tudo de novo, pois só é possível inserir um item no final, certo? Adicione dois botões, um com `id="mover-cima"` e outro com `id="mover-baixo"`, que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.

Pontos importantes sobre este requisito bônus:

* Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

* Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

### 3 - Adicione um botão com `id="remover-selecionado"` que, quando clicado, remove o item selecionado.

----