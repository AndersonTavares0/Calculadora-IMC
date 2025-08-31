// Função para calcular IMC
function calcularIMC(peso, alturaCm) {
  if (!peso || !alturaCm || alturaCm <= 0) return null;
  const alturaM = alturaCm / 100;
  return peso / (alturaM * alturaM);
}

// Função para classificar IMC
function classificarIMC(imc) {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  if (imc < 35) return "Obesidade grau I";
  if (imc < 40) return "Obesidade grau II";
  return "Obesidade grau III";
}

// Exibir resultado
function mostrarResultado(imc) {
  const resultado = document.getElementById("resultado");
  if (imc === null) {
    resultado.textContent = "Preencha os campos corretamente.";
    return;
  }
  resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(
    2
  )}</strong><br>${classificarIMC(imc)}`;
}

// Formulário
const form = document.getElementById("imcForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = parseFloat(document.getElementById("peso").value);
  const alturaCm = parseFloat(document.getElementById("altura").value);
  const imc = calcularIMC(peso, alturaCm);
  mostrarResultado(imc);
});

// Modo escuro
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

function setDarkMode(enabled) {
  if (enabled) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "true");
    darkModeToggle.checked = true;
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
    darkModeToggle.checked = false;
  }
}

darkModeToggle.addEventListener("change", function () {
  setDarkMode(this.checked);
});

// Carregar preferência ao iniciar
window.addEventListener("DOMContentLoaded", () => {
  const darkPref = localStorage.getItem("darkMode");
  setDarkMode(darkPref === "true");
});
