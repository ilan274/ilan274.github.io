/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (pAnimal, pAge) =>
  data.animals.find(animal => animal.name === pAnimal).residents.every(a => a.age > pAge);

const employeeByName = employee =>
  data.employees.find(el => el.firstName === employee || el.lastName === employee) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});


const isManager = id => data.employees.some(el => el.managers[0] === id);


const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const detalhes = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(detalhes);
};

const animalCount = (species) => {
  const [...animais] = data.animals;
  if (!species) {
    const acumulador = animais.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
    return acumulador;
  }
  const qtdAnimal = animais.filter(animal => animal.name === species);
  const totalQtd = qtdAnimal.map(animal => animal.residents.length);
  return totalQtd[0];
};


const entryCalculator = (entrants) => {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  const { Adult: adulto, Child: crianca, Senior: idoso } = entrants;
  let retorno = null;
  const calc1 = (adulto * data.prices.Adult) + (crianca * data.prices.Child);
  retorno = calc1 + (idoso * data.prices.Senior);
  return retorno;
};

const getResidentsName = (animal, sorted, sex) => {
  const obj = {};
  obj[animal] = data.animals
    .find(element => element.name === animal).residents;
  if (sex) obj[animal] = obj[animal].filter(resident => resident.sex === sex);
  obj[animal] = obj[animal].map(({ name }) => name);
  if (sorted) obj[animal].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  return data.animals.reduce((obj, { name, location }) => {
    if (!obj[location]) obj[location] = [];
    if (!includeNames) {
      obj[location].push(name);
    } else {
      obj[location].push(getResidentsName(name, sorted, sex));
    }
    return obj;
  }, {});
};

const legibleSchedule = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

const schedule = (dayName) => {
  const sch = {};
  if (dayName) {
    sch[dayName] = legibleSchedule(dayName);
    return sch;
  }
  Object.keys(data.hours).forEach((e) => { sch[e] = legibleSchedule(e); });
  return sch;
};

function oldestFromFirstSpecies(id) {
  const especie = data.employees.find(el => el.id === id);
  const velho = data.animals.find(el => el.id === especie.responsibleFor[0]);
  const resident = velho.residents.sort((a, b) => b.age - a.age);
  return Object.values(resident[0]);
}

const increasePrices = (percentage) => {
  const { Adult, Child, Senior } = data.prices;
  const mult = (percentage / 100) + 1;
  const adultM = Math.round(100 * Adult * mult) / 100;
  const childM = Math.round(100 * Child * mult) / 100;
  const seniorM = Math.round(100 * Senior * mult) / 100;
  const obje = {
    Adult: adultM,
    Senior: seniorM,
    Child: childM,
  };
  data.prices = obje;
  return data.prices;
};

const findResponsibleForAnimals = (e) => {
  const asw = {};
  asw[`${e.firstName} ${e.lastName}`] = e.responsibleFor
    .map(id => data.animals
      .find(animal => animal.id === id).name);
  return asw;
};

const employeeCoverage = (idOrName) => {
  const obj = {};
  if (idOrName) {
    Object.assign(obj, findResponsibleForAnimals(data.employees
      .find(e => ((
        e.id === idOrName)
        || (e.firstName === idOrName)
        || (e.lastName === idOrName)))));
    return obj;
  }
  data.employees.forEach((e) => {
    Object.assign(obj, findResponsibleForAnimals(e));
  });
  return obj;
};

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
