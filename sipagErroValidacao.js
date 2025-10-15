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
      case "23120886":
        skillFormatada = "23120886 - Sipag 2.0 Suporte Tecnico";
        break;
      case "25166191":
        skillFormatada = "25166191 - Sipag 2.0 Reativacao de Cadastro";
        break;
      case "25166192":
        skillFormatada = "25166192 - Sipag 2.0 Habilitar Servico Antecipacao";
        break;
      case "23121572":
        skillFormatada = "23121572 - Sipag 2.0 Retencao";
        break;
      case "23121571":
        skillFormatada = "23121571 - Sipag 1.0 Retencao";
        break;
      case "29221027":
        skillFormatada = "29221027 - Sipag 1.0 Transferencia";
        break;
      case "23120887":
        skillFormatada = "23120887 - Sipag Erro Validacao URA";
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
      case "23120886":
        transfSkill = "23120886 - Sipag 2.0 Suporte Tecnico";
        break;
      case "25166191":
        transfSkill = "25166191 - Sipag 2.0 Reativacao de Cadastro";
        break;
      case "25166192":
        transfSkill = "25166192 - Sipag 2.0 Habilitar Servico Antecipacao";
        break;
      case "23121572":
        transfSkill = "23121572 - Sipag 2.0 Retencao";
        break;
      case "23121571":
        transfSkill = "23121571 - Sipag 1.0 Retencao";
        break;
      case "29221027":
        transfSkill = "29221027 - Sipag 1.0 Transferencia";
        break;       
      case "PUC":
        transfSkill = "URA PUC";
        break;
      case "FD":
        transfSkill = "URA FD";
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
  { value: "23120886", text: "23120886 - Sipag 2.0 Suporte Tecnico" },
  { value: "25166191", text: "25166191 - Sipag 2.0 Reativacao de Cadastro" },
  { value: "25166192", text: "25166192 - Sipag 2.0 Habilitar Servico Antecipacao" },
  { value: "23121572", text: "23121572 - Sipag 2.0 Retencao" },
  { value: "23121571", text: "23121571 - Sipag 1.0 Retencao" },
  { value: "29221027", text: "29221027 - Sipag 1.0 Transferencia" },  
  { value: "PUC", text: "URA PUC" },
  { value: "FD", text: "URA FD" }
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
