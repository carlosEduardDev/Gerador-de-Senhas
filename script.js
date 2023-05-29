const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789@#$%&*()?!";
const botoes = document.querySelectorAll("input[type='button']");
const senha = document.querySelector("input[type='text']");

function intervaloBotaoCopiar() {
  setInterval(() => {
    if (senha.value == "") {
      botoes[1].style.display = "none";
    } else {
      botoes[1].style.display = "block";
    }
  }, 500);
}

function gerarCaracter() {
  const caracter = Math.floor(Math.random() * caracteres.length);
  return caracteres.charAt(caracter);
}

function gerarSenha() {
  senha.value = `
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
${gerarCaracter()}
  `;
}

function copiarTexto() {
  senha.select();
  senha.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("A senha copiada é: " + senha.value);
}

botoes[0].addEventListener("click", gerarSenha);
botoes[1].addEventListener("click", copiarTexto);
window.addEventListener("load", intervaloBotaoCopiar);
