[English - Portuguese]

# Welcome to the project folder for ES6 and Higher-Order Functions!

## Project requirements

You must implement the functions that are in `src / zoo.js` to pass each of the tests. The `test / animalsByIds.test.js` test, for example, tests the` addEmployee` function, which is already created within `src / zoo.js`, although it does not yet contain any logic. To see what each function needs to return, just look at the assert of each test.

Use the new features of ES6 such as arrow functions, template literals, spread operator, rest parameter, object destructuring, among others. Also, use the _High Order Functions_.

Before you start, review the `src / data.js` file to see what data will be used.

### 1- Implement the animalsByIds function:
  - If you receive no parameters, you must return an empty array
  - When receiving a single id as a parameter, it returns the animals with this id
  - When receiving more than one id, it returns the animals that have one of these ids

### 2- Implement the animalsOlderThan function:
  - When passing the name of a species and an age, it tests whether all animals of this
 species have the minimum age specified

### 3- Implement the employeeByName function:
  - Without parameters, returns an empty object
  - When the employee's first name is provided, the employee's object is returned
  - When the employee's last name is provided, the employee's object is returned

### 4- Implement the createEmployee function:
  - Creates a new employee from objects containing personal information, managers and managed animals

### 5- Implement the isManager function:
  - Test if the past id is from a manager

### 6- Implement the addEmployee function:
  - Add an employee to the bottom of the list

### 7- Implement the animalCount function:
  - Without parameters, returns animals and their quantities
  - With the name of a species of animal, returns only the amount

### 8- Implement the entryCalculator function:
  - Return 0 if no arguments are passed
  - Returns 0 if an empty object is passed
  - Returns the total price to be charged given the number of adults, children and the elderly

### 9- Implement the animalMap function:
  - Without parameters, returns animals categorized by location
  - With specified options, returns animal names
  - With specified options, returns ordered animal names
  - With specified options, returns only male / female animal names
  - Returns gender-specific information only if `includeNames` is set

### 10- Implement the schedule function:
  - Without parameters, returns a human-readable schedule
  - If a single day is spent, return only that day in a human-readable format

### 11- Implement the oldestFromFirstSpecies function:
  - Once an employee's id is passed, he finds the first species of animal
  managed by the employee, and returns an array with the name, gender, and age of
  the oldest animal of this species

### 12- Implement the increasePrices function:
  - When passing a percentage, increases all prices, rounded to two decimal places

### 13- Implement the employeeCoverage function:
  - Without parameters, returns a list of employees and the animals for which they are responsible
  - With the ID of an employee, returns the animals for which the employee is responsible
  - With an employee's first name, returns the animals for which the employee is responsible
  - With the last name of an employee, returns the animals for which the employee is responsible

----
----
----
----

# Boas vindas à pasta do projeto de ES6 e Higher Order Functions!

## Requisitos do projeto

Vocẽ deverá implementar as funções que estão no `src/zoo.js` para passarem em cada um dos testes. O teste `test/animalsByIds.test.js`, por exemplo, testa a função `addEmployee`, que já está criada dentro do `src/zoo.js`, embora ainda não contenha lógica alguma. Para ver o que cada função precisa retornar basta ver o `assert` de cada um dos testes.

Utilize as novas funcionalidades do ES6 como arrow functions, template literals, spread operator, parâmetro rest, object destructuring, entre as outras. Utilize também as _High Order Functions_.

Antes de começar analise o arquivo `src/data.js`, para ver os dados que serão usados.

### 1- Implemente a função animalsByIds:
  - Caso receba nenhum parâmetro, necessário retornar um array vazio
  - Ao receber como parâmetro um único id, retorna os animais com este id
  - Ao receber mais de um id, retorna os animais que têm um desses ids

### 2- Implemente a função animalsOlderThan:
  - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
 espécie possuem a idade mínima especificada

### 3- Implemente a função employeeByName:
  - Sem parâmetros, retorna um objeto vazio
  - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  - Quando provido o último nome do funcionário, retorna o objeto do funcionário

### 4- Implemente a função createEmployee:
  - Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados

### 5- Implemente a função isManager:
  - Testa se o id passado é de um gerente

### 6- Implemente a função addEmployee:
  - Adiciona um funcionário no fim da lista

### 7- Implemente a função animalCount:
  - Sem parâmetros, returna animais e suas quantidades
  - Com o nome de uma espécie de animal, retorna somente a quantidade

### 8- Implemente a função entryCalculator:
  - Returna 0 se nenhum argumento for passado
  - Retorna 0 se um objeto vazio for passado
  - Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

### 9- Implemente a função animalMap:
  - Sem parâmetros, retorna animais categorizados por localização
  - Com opções especificadas, retorna nomes de animais
  - Com opções especificadas, retorna nomes de animais ordenados
  - Com opções especificadas, retorna somente nomes de animais macho/fêmea
  - Só retorna informações específicas de gênero se `includeNames` for setado

### 10- Implemente a função schedule:
  - Sem parâmetros, retorna um cronograma legível para humanos
  - Se um único dia for passado, retorna somente este dia em um formato legível para humanos

### 11- Implemente a função oldestFromFirstSpecies:
  - Passado o id de um funcionário, encontra a primeira espécie de animal
  gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do
  animal mais velho dessa espécie

### 12- Implemente a função increasePrices:
  - Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

### 13- Implemente a função employeeCoverage:
  - Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  - Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável
