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
    select.appendChild(defaultOption);
 
    caminhoArray.forEach(function (item) {
      var option = document.createElement('option');
      option.value = item.trim();
      option.text = item.trim();
      option.disabled = true;
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
      case "25166183":
        skillFormatada = "25166183 - TER SAC";
        break;
      case "25166580":
        skillFormatada = "25166580 - SAC Contestação";
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
 
  if (opTransf != "") {
    let transfSkill = getTransferSkill(opTransf);
 
    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      confirmTransfer();
    }
  } else {
    alert("Nenhuma opção selecionada.");
  }
}
 
// Obter a skill de transferência com base na opção
function getTransferSkill(opTransf) {
  const skillConfig = {
    "SacContestacao": "25166580 - SAC Contestação",
    "RetencaoSipag": "23121572 - Retenção Sipag",
    "ConsorcioRetencao": " - Retenção Consórcio",
    "UraPuc": "URA PUC",
    "UraCoopcerto": "URA COOPCERTO",
    "Poupanca": "POUPANÇA",
    "RetencaoSeguros": "RETENÇÃO SEGUROS",
    "RetencaoCartao": "RETENÇÃO CARTÃO",
    "UraCartoes": "URA CARTÕES",
    "UraCartoesBlack": "URA CARTÕES BLACK",
    "UraConsorcio": "URA Consórcio",
    "UraCoopera": "URA COOPERA",
    "UraCartoesCresol": "URA CARTÕES CRESOL",
    "UraLojistaCabal": "URA LOJISTA CABAL",
    "UraSipag1": "URA SIPAG 1.0",
    "UraSipag2": "URA SIPAG 2.0"
  };
 
  return skillConfig[opTransf] || "";
}
 
function confirmTransfer() {
  const opTransf = document.getElementById('ListaTransf').value;
  const transfSkill = getTransferSkill(opTransf);
  if (transfSkill) {
    document.getElementById('openConfirmation').value = "transf";
    console.log('Transferência confirmada para:', transfSkill);
  }
}

function confirmRecording() {
  document.getElementById("recordingModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

const modal = document.getElementById("recordingModal");
  const overlay = document.getElementById("overlay");
  if (modal && overlay) {
    modal.style.display = "block";
    overlay.style.display = "block";
  } else {
    console.warn("Modal ou overlay não encontrados.");
  }
 
document.getElementById('openConfirmation').addEventListener('click', showPopup);
 
// Habilitar/desabilitar botão baseado na seleção
document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('ListaTransf');
  const button = document.getElementById('openConfirmation');
 
  // Iniciar com o botão desabilitado
  button.disabled = true;
  button.style.cursor = "not-allowed";
 
  // Adicionar evento para habilitar/desabilitar o botão quando houver mudança no select
  selectElement.addEventListener('change', function () {
    button.disabled = selectElement.value === "";
    button.style.cursor = selectElement.value === "" ? "not-allowed" : "pointer";
  });
});
 
// Atualizar as opções do select com base na skill
const skillValue = document.getElementById("SkillT").value;
 
// Opções para o select, incluindo a opção SAC_CONTESTAÇÃO com a skill necessária
const allOptions = [  
  { value: "", text: "Lista de Transferência:" },
  { value: "SacContestacao", text: "SAC Contestação"},
  { value: "UraPuc", text: "URA PUC" },
  { value: "UraCartoes", text: "URA Cartões" },
  { value: "UraConsorcio", text: "URA Consórcio" },
  { value: "UraCoopcerto", text: "URA Coopcerto" },
  { value: "UraCoopera", text: "URA Coopera" },
  { value: "UraLojistaCabal", text: "URA Lojista Cabal" },
  { value: "UraSipag2", text: "URA Sipag" }, /*Era a 2.0*/
  { value: "RetencaoCartao", text: "Retenção Cartões" },
  { value: "ConsorcioRetencao", text: "Retenção Consórcio" },
  { value: "RetencaoSeguros", text: "Retenção Seguros" },
  { value: "RetencaoSipag", text: "Retenção Sipag" },
];
 
const allOptions2 = [
  { value: "", text: "Lista de Transferência:" },
  { value: "UraPuc", text: "URA PUC" },
  { value: "UraCartoes", text: "URA Cartões" },
  { value: "UraConsorcio", text: "URA Consórcio" },
  { value: "UraCoopcerto", text: "URA Coopcerto" },
  { value: "UraCoopera", text: "URA Coopera" },
  { value: "UraLojistaCabal", text: "URA Lojista Cabal" },
  { value: "UraSipag2", text: "URA Sipag" }, /*Era a 2.0*/
  { value: "RetencaoCartao", text: "Retenção Cartões" },
  { value: "ConsorcioRetencao", text: "Retenção Consórcio" },
  { value: "RetencaoSeguros", text: "Retenção Seguros" },
  { value: "RetencaoSipag", text: "Retenção Sipag" },
];
 
// Filtrar as opções para garantir que a opção "SAC_CONTESTAÇÃO" seja exibida apenas se a skill for 25166580
 
let filteredOptions;
if (skillValue == 25166183) {
  filteredOptions = allOptions;
} else {
  filteredOptions = allOptions2;
}
 
// Atualizar o select com as opções filtradas
const selectElement = document.getElementById("ListaTransf");
selectElement.innerHTML = ""; // Limpar o conteúdo existente
 
filteredOptions.forEach(option => {
  const optionElement = document.createElement("option");
  optionElement.value = option.value;
  optionElement.textContent = option.text;
  selectElement.appendChild(optionElement);
});
 
const openConfirmationButton = document.getElementById('openConfirmation');
if (openConfirmationButton) {
  openConfirmationButton.addEventListener('click', showPopup);
}
 
// Botão "Pesquisa"
document.getElementById("btnPesquisa").addEventListener("click", function () {
  this.value = "pesquisa";
});
 
document.getElementById('MotivoDesc').addEventListener('change', function () {
  console.log("Motivo selecionado:", this.value);
});
 
 
 
