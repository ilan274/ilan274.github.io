[English - Portuguese]

# Welcome to the _animations_ and _mobile first_ project folder!

## What should be developed

You must create a page that is based on the newspaper that circulated through the universe of the ** Harry Potter ** story.

Here are some examples:

- [Page with a recreation of the newspaper: The Daily Prophet] (https://redonion.se/cssgrid/)
- [Presentation of a newspaper design: The Daily Prophet] (https://docs.google.com/presentation/d/1yZ2ErHv-ptgR7XZEwr_uOWPMmqjFL6uKGr-XkmfmrWo/edit#slide=id.gd1f3d9fb3_0_4)

Before starting the project, carefully read the "Deliverables" section.

---

## Project requirements

### 1 - Your page must use the _HTML_ semantic elements correctly. Your page should contain the elements: `header`,` nav`, `aside`,` article`, `section`,` footer`, `img`,` a`.

### 2 - Your page must pass the accessibility validator [AChecker] (https://achecker.ca/).

### 3 - You must create two layouts: one for screens that are up to `760px` wide, and the other for screens that are at least` 1170px` wide.

  Important points:
  
- Create the `container-layout` class
- Up to `760px`, the` container-layout` class must set the background-color` property to the value `rgb (255, 255, 0)` (yellow)
- With a size of at least `1170px`, the` container-layout` class must define the `background-color` property with the value` rgb (255, 0, 0) `(red)

  Important points:
  
- Remember that you can enjoy the styles you create if you use the _mobile first_ approach!

### 4 - You must implement a specific style rule for when the screen orientation is in `landscape`.

  Important points:

- Create the `container-orientation` class
- Define a solid `1px` border in red in the` container-orientation` class when the orientation is in `landscape`
- Think about which elements would benefit from a wider width or, what would be the most suitable layout for the person who reads your page with the screen horizontal

### 5 - Animate something flying across the screen.

  Important points:

- It could be a wand, a bird, a moon, use your creativity
- Use a keyframe called `flying`
- Create the `fly` class to receive this animation
- The animation should start after 3 seconds of the page being loaded
- The animation must happen 3 times: once in the normal direction, once backward and once in the normal direction
- The animated element must remain where it is after the animation ends

### 6 - You must use the `skew` transformation.

### 7 - You must use the `scale` transformation.

### 8 - You must use the `translate` transformation.

  Important points:

- It can be the transformation `translate`,` translateX` or `translateY`

### 9 - You must use `transitions` to smooth style changes between your elements.

### 10 - When clicking on an article, it should grow by 50% over 4 seconds, and its font should gradually become bolder during this transition.

  Important points:

- Create the `article-animation` class and use it in articles
- Create a keyframe with the name `article-grow` and use it in the` article-animation` class

### 11 - You must use `steps` so that the transitions between the steps of your animation are discrete.

  Important points:

- Documentation on `Steps` can be consulted [here] (https://designmodo.com/steps-css-animations/)

----
----
----
----

# Boas vindas à pasta do projeto de _animações_ e _mobile first_!

## O que deverá ser desenvolvido

Você deve criar uma página que se baseie no jornal que circulava pelo universo da história de **Harry Potter**.

Veja alguns exemplos:

- [Página com uma recriação do jornal: O Profeta Diário](https://redonion.se/cssgrid/)
- [Apresentação de um design do jornal: O Profeta Diário](https://docs.google.com/presentation/d/1yZ2ErHv-ptgR7XZEwr_uOWPMmqjFL6uKGr-XkmfmrWo/edit#slide=id.gd1f3d9fb3_0_4)

Antes de iniciar o projeto, leia atentamente a seção "Entregáveis".

---

## Requisitos do projeto

### 1 - Sua página deve usar os elementos semânticos do _HTML_ de forma correta. Sua página deve conter os elementos: `header`, `nav`, `aside`, `article`, `section`, `footer`, `img`, `a`.

### 2 - Sua página deve passar no validador de acessibilidade [AChecker](https://achecker.ca/).

### 3 - Você deve criar dois layouts: um para telas que tenham até `760px` de largura, e outro para telas que tenham no mínimo `1170px` de largura.

  Pontos importantes:
  
- Crie a classe `container-layout`
- Com o tamanho de até `760px` a classe `container-layout` deve definir a propriedade background-color` com o valor `rgb(255, 255, 0)` (yellow)
- Com o tamanho de no mínimo `1170px` a classe `container-layout` deve definir a propriedade `background-color` com o valor `rgb(255, 0, 0)` (red)

  Pontos importantes:
  
- Lembre-se que você pode aproveitar bastante os estilos que criar se utilizar a abordagem _mobile first_!

### 4 - Você deve implementar uma regra de estilo específica para quando a orientação da tela estiver em `landscape`.

  Pontos importantes:

- Crie a classe `container-orientation`
- Defina uma borda de `1px` sólida na cor vermelha na classe `container-orientation` quando a orientação estiver em `landscape`
- Pense em quais elementos se beneficiariam de uma largura maior ou, qual seria o `layout` mais adequado para a pessoa que lê sua página com a tela na horizontal

### 5 - Faça a animação de alguma coisa voando pela tela.

  Pontos importantes:

- Pode ser uma varinha, um pássaro, uma lua, use sua criatividade
- Utilize um `keyframe` de nome `flying`
- Crie a classe `fly` para receber essa animação
- A animação deve iniciar depois de 3 segundos da página ser carregada
- A animação deve acontecer 3 vezes: uma vez no sentido normal, uma vez de trás pra frente e outra no sentido normal
- O elemento animado deve permanecer onde está após o fim da animação

### 6 - Você deve utilizar a transformação `skew`.

### 7 - Você deve utilizar a transformação `scale`.

### 8 - Você deve utilizar a transformação `translate`.

  Pontos importantes:

- Pode ser a transformação `translate`, `translateX` ou `translateY`

### 9 - Você deve utilizar `transitions` para suavizar alterações de estilo entre seus elementos.

### 10 - Ao clicar em um artigo, ele deve crescer em 50% ao longo de 4 segundos, e sua fonte deve ir ficando gradativamente mais em negrito durante essa transição.

  Pontos importantes:

- Crie a classe `article-animation` e utilize-a nos artigos
- Crie um keyframe com o nome `article-grow` e utilize-o na classe `article-animation`

### 11 - Você deve utilizar `steps` para que as transições entre as etapas da sua animação sejam discretas.

  Pontos importantes:

- Documentação sobre `Steps` pode ser consultada [aqui](https://designmodo.com/steps-css-animations/)


