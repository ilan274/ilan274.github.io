[English - Portuguese]

# Welcome to the Pixels Art project repository!

## Project requirements

### 1 - The page must have the title "Palette of Colors"

The title should be inside an `h1` tag with ** id **` title`.

### 2 - The page must have a palette of four colors

The palette should list all the colors available for use, side by side, and should be positioned under the "Color Palette" heading.

The color palette must have the ** id ** `color-palette`, whereas each color in the color palette must have the ` color` ** class **.

The background color of each element in the palette should be the color that the element represents.

### 3 - The color ** black ** must be the first in the color palette

The other colors can be chosen freely.

### 4 - The page must have a pixel frame, with 25 pixels

The pixel frame must be 5 pixels wide by 5 pixels high. The initial color of the pixels, when opening the page, must be white.

The pixel frame must have the ** id ** `pixel-board`, whereas each pixel in the frame must have the ` pixel` ** class **.

### 5 - The pixel frame must appear below the color palette

### 6 - Each pixel in the pixel frame must be 40 pixels wide and 40 pixels high and be delimited by a black border of 1 pixel

40 pixels should be the total size of the element, including content, padding, and wedding.

### 7 - When loading the page, the color ** black ** of the palette must already be selected to paint the pixels

The element of black color must initially have the `selected` ** class **.

** Note that the element that should receive the `selected` class must be one of the elements that have the` color` class, as specified in requirement 2. **

### 8 - When clicking on one of the colors in the palette, the color selected in the palette will be used to fill the pixels

The `selected` ** class ** must be added to the selected color, while removing it from the previously selected color.

** Note that the elements that should receive the `selected` class must be the same elements that have the` color` class, as specified in requirement 2. **

### 9 - When clicking on a pixel with a selected color, the pixel must be filled with that color

### 10 - When clicking on a pixel with a selected color, only that pixel should be filled, without influencing the color of the other pixels

## BONUS

### 11 - Create a button that, when clicked, clears the frame, filling the color of all its pixels with white

The button should have the ** id ** `clear-board`.

### 12 - Make the pixel frame have its size defined by the user

Create an input and a button that allow you to define a pixel frame with sizes between 5 and 50. When clicking on the button, a frame of ** N ** pixels wide and ** N ** pixels high, where ** N ** is the number entered in the input.

That is, if the value passed to the input is 7 when clicking on the button, a frame of 49 pixels (7 pixels wide x 7 pixels high) will be generated.

The new frame should have all pixels filled with white.

The input and button must have ** ids ** `board-size` and` generate-board`, respectively.

If the value entered is outside the range of 5 to 50, do:
- A value less than 5, consider 5 as standard
- A value greater than 50, consider 50 as standard

### 13 - Make the palette colors randomly generated when loading the page

Remember that the black color still needs to be present and should be the first in your color palette.

---

----
----
----
----

# Boas vindas ao repositório do projeto de Arte com Pixels!

## Requisitos do projeto

### 1 - A página deve possuir o título "Paleta de Cores"

O título deverá ficar dentro de uma tag `h1` com o **id** `title`.

### 2 - A página deve possuir uma paleta de quatro cores

A paleta deverá listar todas as cores disponíveis para utilização, lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores".

A paleta de cores deve possuir o **id** `color-palette`, ao passo que cada cor individual da paleta de cores deve possuir a **classe** `color`.

A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa.

### 3 - A cor **preta** deve ser a primeira na paleta de cores

As demais cores podem ser escolhidas livremente.

### 4 - A página deve possuir um quadro de pixels, com 25 pixels

O quadro de pixels deve possuir 5 pixels de largura por 5 pixels de altura. A cor inicial dos pixels, ao abrir a página, deve ser branca.

O quadro de pixels deve possuir o **id** `pixel-board`, ao passo que cada pixel individual no quadro deve possuir a **classe** `pixel`.

### 5 - O quadro de pixels deve aparecer abaixo da paleta de cores

### 6 - Cada pixel do quadro de pixels deve possuir 40 pixels de largura e 40 pixels de altura e ser delimitado por uma margem preta de 1 pixel

40 pixels deve ser o tamanho total do elemento, incluindo conteúdo, padding e boda.

### 7 - Ao carregar a página, a cor **preta** da paleta já deve estar selecionada para pintar os pixels

O elemento da cor preta deve possuir, inicialmente, a **classe** `selected`.

**Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no requisito 2.**

### 8 - Ao clicar em uma das cores da paleta, a cor selecionada na paleta é que vai ser usada para preencher os pixels

A **classe** `selected` deve ser adicionada à cor selecionada, ao mesmo tempo em que é removida da cor anteriormente selecionada.

**Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no requisito 2.**

### 9 - Ao clicar em um pixel com uma cor selecionada, o pixel deve ser preenchido com esta cor

### 10 - Ao clicar em um pixel com uma cor selecionada, somente esse pixel deverá ser preenchido, sem influenciar na cor dos demais pixels

## BÔNUS

### 11 - Crie um botão que, ao ser clicado, limpa o quadro, preenchendo a cor de todos seus pixels com branco

O botão deve ter o **id** `clear-board`.

### 12 - Faça o quadro de pixels ter seu tamanho definido pelo usuário

Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de **N** pixels de largura e **N** pixels de altura, onde **N** é o número inserido no input.

Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura).

O novo quadro deve ter todos os pixels preenchidos com a cor branca.

O input e o botão deve ter os **ids** `board-size` e `generate-board`, respectivamente.

Caso o valor digitado fuja do intervalo de 5 a 50, faça:
- Valor menor que 5, considerar 5 como padrão;
- Valor maior que 50, considerar 50 como padrão.

### 13 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página

Lembre-se de que a cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.

---