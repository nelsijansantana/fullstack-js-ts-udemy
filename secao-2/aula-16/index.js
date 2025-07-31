/* 
    Nelsijan Santana da Silva tem 36 anos, pesa 69 kg
    tem 1.78 de altura e seu IMC é de 23.5
    Nelsijan Silva Nasceu em 1988
*/

const firstName = "Nelsijan Santana";
const lastName = "Silva";
const height = 1.79;
const birthdayYear = 1988;
const weight = 69;
let idade = 2025 - 1988;

const imc = weight / Math.pow(height, 2);

console.log(
  `${firstName} ${lastName} tem ${idade}, e pesa ${weight}KG, tem ${height} e seu img é de ${imc.toFixed(
    2
  )}, ${firstName} ${lastName} nasceu ${birthdayYear}`
);
