//Refatorar o código em funções modulares.

function eventoImc() {
  const frm = document.querySelector("#form");
  const res = document.querySelector("#resultado");

  function calculaImc(e) {
    e.preventDefault();

    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);

    const imc = peso / Math.pow(altura, 2);

    //Criar a lógica de comparação
    if (!peso || !altura) {
      res.innerText = `Peso ou Altura inválido`;
    } else {
      if (imc <= 18.5) {
        res.innerText = `${imc.toFixed(2)}: Você está Abaixo do peso`;
      } else if (imc <= 24.9) {
        res.innerText = `${imc.toFixed(2)}: Peso normal`;
      } else if (imc <= 34.9) {
        res.innerText = `${imc.toFixed(2)}: Obesidade grau I`;
      } else if (imc <= 39.9) {
        res.innerText = `${imc.toFixed(2)}: Obesidade grau II`;
      } else {
        res.innerText = `${imc.toFixed(2)}: Obesidade grau III`;
      }
    }
  }
  frm.addEventListener("submit", calculaImc);
}
eventoImc();
