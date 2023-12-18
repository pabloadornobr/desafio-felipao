console.log("teste");

let nivel;
let experiencia=1; // escreva a quantidade de pontos de experiência
var nomePersonagem="Kirito"; // Escreva entre aspas o nome do seu personagem

if (experiencia <= 1000) {
    nivel = "Ferro";
}
if (experiencia > 1000 && experiencia <= 2000) {
    nivel = "Bronze";
}
if (experiencia > 2000 && experiencia <= 6000) {
    nivel = "Prata";
}
if (experiencia > 6000 && experiencia <= 7000) {
    nivel = "Ouro";
}
if (experiencia > 7000 && experiencia <= 8000) {
    nivel = "Platina";
}
if (experiencia > 8000 && experiencia <= 9000) {
    nivel = "Ascendente";
}
if (experiencia > 9000 && experiencia <= 10000) {
    nivel = "Imortal";
}
if (experiencia > 10000) {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nomePersonagem + " está no nível de " + nivel); //Mostra o nome e o nível do personagem
