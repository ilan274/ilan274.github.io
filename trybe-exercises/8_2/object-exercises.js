const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Write your code below:

const addKeyValue = (obj, key, value) => obj[key] = value;

const listObjectKeys = obj => Object.keys(obj);

const objectSize = obj => Object.entries(obj).length;

const listObjectValues = obj => Object.values(obj);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (obj) => {
  let total = null;
  const valores = Object.values(obj);
  for (let x in valores) {
    total += valores[x].numeroEstudantes;
  }
  return total;
};

const getValueByNumber = (obj, i) => Object.values(lesson3)[i];

const verifyPair = (obj, key, value) => {
  return 
}

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.