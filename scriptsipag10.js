// Função de copiar texto ao clicar no botão "Copiar"
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado pelo botão: " + copyText.value);
  }
}

// Função de copiar texto ao clicar no campo
function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
  input.addEventListener('click', copyOnClick);
});

// Função de copiar texto ao focar no campo
function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado com foco: " + copyText.value);
  }
}

// Função de preencher o dropdown de "Navegação"
function populateDropdown() {
  var caminhoElement = document.getElementById('Caminho');
  if (caminhoElement) {
    var caminho = caminhoElement.value;
    var caminhoArray = caminho.split(',');
    var select = document.getElementById('navegacaoURA');

    select.innerHTML = '';

    var defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Navegação:";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.style.color = "#000000";
    select.appendChild(defaultOption);

    caminhoArray.forEach(function (item) {
      var option = document.createElement('option');
      option.value = item.trim();
      option.text = item.trim();
      option.disabled = true;
      option.style.color = "#000000";
      select.appendChild(option);
    });
  }
}

window.onload = function () {
  // Preencher dropdown
  populateDropdown();

  // Não exibir mesma skill
  const skillValueElement = document.getElementById('SkillT');
  const select = document.getElementById('ListaTransf');
  const options = select.querySelectorAll('option');

  if (skillValueElement) {
    const skillValue = skillValueElement.value;
    options.forEach(option => {
      if (option.value === skillValue) {
        option.style.display = 'none';
      } else {
        option.style.display = '';
      }
    });
  }

  // Exibir skill de entrada
  const skillOrigemElement = document.getElementById('SkillOrigem');
  let skillFormatada = "";

  if (skillOrigemElement) {
    let skillOrigem = skillOrigemElement.value;

    switch (skillOrigem) {
      case "23120871":
        skillFormatada = "23120871 - Sipag 1.0 Atendente";
        break;
      case "23120872":
        skillFormatada = "23120872 - Sipag 1.0 App";
        break;
      case "23120873":
        skillFormatada = "23120873 - Sipag 1.0 Cadastro";
        break;
      case "23120874":
        skillFormatada = "23120874 - Sipag 1.0 Credenciamento";
        break;
      case "23120875":
        skillFormatada = "23120875 - Sipag 1.0 Financeiro";
        break;
      case "23120876":
        skillFormatada = "23120876 - Sipag 1.0 Fiserv";
        break;
      case "23120877":
        skillFormatada = "23120877 - Sipag 1.0 Logistica";
        break;
      case "23120878":
        skillFormatada = "23120878 - Sipag 1.0 Portal";
        break;
      case "23121571":
        skillFormatada = "23121571 - Sipag 1.0 Retencao";
        break;
      case "23120889":
        skillFormatada = "23120889 - Sipag 1.0 Disc Sipag";
        break;
      case "29221027":
        skillFormatada = "29221027 - Sipag 1.0 Transferencia";
        break;
      case "23120887":
        skillFormatada = "23120887 - Sipag Erro Validação URA";
        break;
      default:
        skillFormatada = " ";
        break;
    }

    const origemElement = document.getElementById('Origem');
    if (origemElement) {
      origemElement.value = skillFormatada;
    } else {
      console.warn("Elemento com ID 'Origem' não encontrado.");
    }
  }
};

// Popup Confirmação Transferência
function showPopup() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log(opTransf);

  if (opTransf != "") {
    let transfSkill = "";

    switch (opTransf) {
      case "23120871":
        transfSkill = "23120871 - Sipag 1.0 Atendente";
        break;
      case "23120872":
        transfSkill = "23120872 - Sipag 1.0 App";
        break;
      case "23120873":
        transfSkill = "23120873 - Sipag 1.0 Cadastro";
        break;
      case "23120874":
        transfSkill = "23120874 - Sipag 1.0 Credenciamento";
        break;
      case "23120875":
        transfSkill = "23120875 - Sipag 1.0 Financeiro";
        break;
      case "23120876":
        transfSkill = "23120876 - Sipag 1.0 Fiserv";
        break;
      case "23120877":
        transfSkill = "23120877 - Sipag 1.0 Logistica";
        break;
      case "23120878":
        transfSkill = "23120878 - Sipag 1.0 Portal";
        break;
      case "23121571":
        transfSkill = "23121571 - Sipag 1.0 Retencao";
        break;
      case "23120889":
        transfSkill = "23120889 - Sipag 1.0 Disc Sipag";
        break;
      case "29221027":
        transfSkill = "29221027 - Sipag 1.0 Transferencia";
        break;
      case "PUC":
        transfSkill = "URA PUC";
        break;
      default:
        transfSkill = " ";
        break;
    }

    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      executarFuncao();
    }
  } else {
    alert("Nenhuma opção selecionada.");
  }
}

function executarFuncao() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log('Função executada!');
  document.getElementById('openConfirmation').value = "transf";
}

document.getElementById('openConfirmation').addEventListener('click', showPopup);

// Botão "Pesquisa"
document.getElementById("btnPesquisa").addEventListener("click", function () {
  this.value = "pesquisa";
});

// Habilitar/desabilitar botão baseado na seleção
document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('ListaTransf');
  const button = document.getElementById('openConfirmation');

  // Iniciar com o botão desabilitado
  button.disabled = true;
  button.style.cursor = "not-allowed";

  // Adicionar evento para habilitar/desabilitar o botão quando houver mudança no select
  selectElement.addEventListener('change', function() {
    if (selectElement.value !== "") {
      button.disabled = false;
      button.style.cursor = "pointer";
    } else {
      button.disabled = true;
      button.style.cursor = "not-allowed";
    }
  });
});


// Opções para o select
const allOptions = [
  { value: "", text: "Lista de Transferência:" },
  { value: "23120871", text: "23120871 - Sipag 1.0 Atendente" },
  { value: "23120872", text: "23120872 - Sipag 1.0 App" },
  { value: "23120873", text: "23120873 - Sipag 1.0 Cadastro" },
  { value: "23120874", text: "23120874 - Sipag 1.0 Credenciamento" },
  { value: "23120875", text: "23120875 - Sipag 1.0 Financeiro" },
  { value: "23120876", text: "23120876 - Sipag 1.0 Fiserv" },
  { value: "23120877", text: "23120877 - Sipag 1.0 Logistica" },
  { value: "23120878", text: "23120878 - Sipag 1.0 Portal" },
  { value: "23121571", text: "23121571 - Sipag 1.0 Retencao" },
  { value: "29221027", text: "29221027 - Sipag 1.0 Transferencia" },
  { value: "23120889", text: "23120889 - Sipag 1.0 Disc Sipag" },
  { value: "PUC", text: "URA PUC" }
];

// Obter o valor do input SkillT
const skillValue = document.getElementById("SkillT").value;

// Obter o select
const select = document.getElementById("ListaTransf");

// Limpar o select para evitar duplicação
select.innerHTML = "";

// Filtrar as opções para remover a que está em skillValue
const optionsToShow = allOptions.filter(option => option.value !== skillValue);

// Adicionar as opções ao select
optionsToShow.forEach(option => {
  const opt = document.createElement("option");
  opt.value = option.value;
  opt.textContent = option.text;
  select.appendChild(opt);
});
