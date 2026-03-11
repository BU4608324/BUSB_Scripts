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
      case "20868796":
        skillFormatada = "20868796 - Adq Cabal Cadastro";
        break;
      case "20868797":
        skillFormatada = "20868797 - Adq Cabal Atendente";
        break;
      case "20868798":
        skillFormatada = "20868798 - Adq Cabal Credenciamento";
        break;
      case "20868799":
        skillFormatada = "20868799 - Adq Cabal Portal";
        break;
      case "20868801":
        skillFormatada = "20868801 - Adq Cabal Financeiro";
        break;
      case "20868802":
        skillFormatada = "20868802 - Adq Cabal Retencao";
        break;
      case "20868803":
        skillFormatada = "20868803 - Adq Cabal Suporte Tecnico";
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
      case "20868796":
        transfSkill = "20868796 - Adq Cabal Cadastro";
        break;
      case "20868797":
        transfSkill = "20868797 - Adq Cabal Atendente";
        break;
      case "20868798":
        transfSkill = "20868798 - Adq Cabal Credenciamento";
        break;
      case "20868799":
        transfSkill = "20868799 - Adq Cabal Portal";
        break;
      case "20868801":
        transfSkill = "20868801 - Adq Cabal Financeiro";
        break;
      case "20868802":
        transfSkill = "20868802 - Adq Cabal Retencao";
        break;
      case "20868803":
        transfSkill = "20868803 - Adq Cabal Suporte Tecnico";
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
  { value: "20868796", text: "20868796 - Adq Cabal Cadastro" },
  { value: "20868797", text: "20868797 - Adq Cabal Atendente" },
  { value: "20868798", text: "20868798 - Adq Cabal Credenciamento" },
  { value: "20868799", text: "20868799 - Adq Cabal Portal" },
  { value: "20868801", text: "20868801 - Adq Cabal Financeiro" },
  { value: "20868802", text: "20868802 - Adq Cabal Retencao" },
  { value: "20868803", text: "20868803 - Adq Cabal Suporte Tecnico" },
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
