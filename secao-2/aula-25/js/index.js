const nome = prompt('Digite o seu nome completo: ');
const resp = document.querySelector('#resp');

//Nelsijan Santana da Silva 22 caracteres
resp.innerHTML = `<p>Seu nome é: ${nome}</p>`;
resp.innerHTML += `<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras</p>`;
resp.innerHTML += `<p>A segunda letra do seu nome é: ${nome.charAt(1)}</p>`
resp.innerHTML += `<p>Qual o primeiro indice da letra a do seu nome ${nome.replace(/\s/g, "").indexOf("a")}</p>`
resp.innerHTML += `<p>Qual o último indice da letra a do seu nome ${nome.replace(/\s/g, "").lastIndexOf("a")}</p>`
resp.innerHTML += `<p>As últimas 3 letras do seu nome são: ${nome.slice(-3)}</p>`
resp.innerHTML += `<p>As palavras do seu nome são: ${nome.split(" ")}</p>`
resp.innerHTML += `<p>As letras do seu nome são: ${nome.split("")}</p>`
resp.innerHTML += `<p>Seu nome com letras maiúsculas: ${nome.toUpperCase()}</p>`
resp.innerHTML += `<p>Seu nome com letras minúsculas: ${nome.toLowerCase()}</p>`




