[English - Portuguese]

# Welcome to the Meme Generator project folder!

## What should be developed

You must create a website that allows you to upload an image and insert text on it, styled appropriately. In other words, a meme generator. Below are the requirements:

## Project requirements

### 1 - The website must have a text box with which the user can interact to insert text on top of the chosen image. The text box must necessarily have an id called 'text-input'. The user's text must be inserted over the chosen image, with the text element being completely inside the image. If there is no image inserted, it must be inserted over the area where the image appears in the correct position. The text element that appears over the image must have an id called 'meme-text'.

### 2 - The website should allow users to upload an image from their computer. The element that makes the image upload possible must be identified with the id 'meme-insert'. The image element must have an id called 'meme-image'. The chosen image must occupy a space previously delimited by a white area.

### 3 - The website must have a frame around the area where the image will appear after being chosen. The frame must be 1 pixel wide, black and solid. The area where the image will appear must have a white background.

## Bonus requirements:

### 4 - Allow users to customize the chosen meme by adding one with three borders. The page should have three buttons, each placing its border around the image. A button identified with the id 'button1' should style the image container with a 3-pixel, _dashed_, and red border. The button with id 'button2' should be blue, with a 5d pixel _double_ border. The button with id 'button3' must be green with a 6-pixel _groove_ border.

### 5 - Have a set of four pre-made images of famous memes for the user to choose from. List thumbnails of the images and, upon the user's click, this image must appear inside the frame to be customized. The clickable element must be identified by an id called 'meme1' for the first meme, 'meme2' for the second, and so on. The images that identify the memes must be, inside the application, in a directory called 'imgs' with the respective names 'meme1.jpeg', 'meme2.jpeg', and so on.

### 6 - Limit the size of the text that the user can enter. The maximum number of characters must be 60.

## Tips

- To do this job, you must give the text that goes over the image the `position: absolute;` style. Read more about it [here] (https://www.w3schools.com/css/css_positioning.asp).
- To receive the data of those who use the site, it is necessary to use the tag [`<input>`] (https://www.w3schools.com/tags/tag_input.asp). It is part of the content on forms, which we will see later. For now, just know that you can put it inside a `<form> </form>` element for it to work. From there, the challenge is to do the rest! And [here] (https://www.w3schools.com/html/html_form_input_types.asp) we have more content about `<input>`.
- To place your page on [GitHub Pages] (https://pages.github.com/), it is not necessary to remove the content that is already there, you can just add this new page. For this, all the content of this project must be placed in the `/ projects / meme-generator` folder.

----
----
----
----

# Boas vindas à pasta do projeto Meme Generator!

## O que deve ser desenvolvido

Você deve criar um site que permita o upload de uma imagem e a inserção de um texto sobre ela, estilizado de forma apropriada. Em outras palavras, um meme generator. Abaixo seguem os requisitos:

### 1 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida. A caixa de texto deve, necessariamente, ter um id denominado 'text-input'. O texto de quem usa deve ser inserido sobre a imagem escolhida, com o elemento do texto estando totalmente dentro da imagem. Se não houver imagem inserida, ele deve ser inserido sobre a área onde a imagem aparece na posição correta. O elemento do texto que aparece sobre a imagem deve ter um id denominado 'meme-text'.

### 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador. O elemento que viabiliza o upload da imagem deve ser identificado com o id 'meme-insert'. O elemento da imagem deve possuir um id chamado 'meme-image'. A imagem escolhida deve ocupar um espaço previamente delimitado por uma área branca.

### 3 - O site deve ter uma moldura em volta da área onde a imagem aparecerá depois de ser escolhida. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.

## Requisitos bônus:

### 4 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, cada um colocando a própria borda ao redor da imagem. Um botão identificado com o id 'button1' deve estilizar o container da imagem com uma borda de 3 pixels, _dashed_ e vermelha. O botão com id 'button2' deve ser azul, borda _double_ de 5 pixels. O botão com id 'button3' deve ser verde com borda _groove_ com 6 pixels.

### 5 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Liste miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura para ser customizada. O elemento clicável deve ser identificado um um id denominado 'meme1' para o primeiro meme, 'meme2' para o segundo, e assim por diante. As imagens que identificam os memes devem ficar, dentro da aplicação, num diretório chamado 'imgs' com os respectivos nomes 'meme1.jpeg', 'meme2.jpeg' e assim por diante.

### 6 - Limite o tamanho do texto que o usuário pode inserir. A quantidade máxima de caracteres deve ser 60.

## Dicas

- Para fazer este trabalho, você deverá atribuir ao texto que vai sobre a imagem o estilo `position: absolute;`. Leia mais sobre ele [aqui](https://www.w3schools.com/css/css_positioning.asp).
- Para receber os dados de quem usa o site, é preciso utilizar a tag [`<input>`](https://www.w3schools.com/tags/tag_input.asp). Ela faz parte do conteúdo sobre forms, que veremos mais adiante. Por hora, basta saber que você pode colocá-la dentro de um elemento `<form></form>` para que ela funcione. A partir daí, o desafio é fazer o resto! E [aqui](https://www.w3schools.com/html/html_form_input_types.asp) temos mais conteúdo sobre o `<input>`.
- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado na pasta `/projetos/meme-generator`.

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* ⚠ **PULL REQUESTS COM ISSUES NO CODE CLIMATE NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠


* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-03`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo CodeClimate estão resolvidas! ⚠

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Os monitores também farão a revisão de todos os projetos, e irão avaliar tanto o seu _Pull Request_, quanto as revisões que você fizer nos _Pull Requests_ dos seus colegas!!!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
