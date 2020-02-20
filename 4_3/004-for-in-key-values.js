/* Make a new for / in, but now show all the key values ​​for the object. */

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recurring = ("Sim");

for (i in info) {
  console.log(info[i])
}