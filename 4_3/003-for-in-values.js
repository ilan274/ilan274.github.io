/* Make a for / in that shows all the keys of the object. */

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recurring = ("Sim");

for (i in info) {
  console.log(i)
}