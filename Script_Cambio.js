// Funções utilitárias
function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    if (copyText) {
      copyText.select();
      document.execCommand("copy");
      console.log("Copiado pelo botão: " + copyText.value);
  }
}

function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}

function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado com foco: " + copyText.value);
  }
}

// Função auxiliar para criar opções
function createOption(value, text) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

// Configuração de skills
const skillConfig = {
  skills: {
    25166519: "Cambio Fechamento Operacao",
    25166577: "Cambio Cotacao Moeda",
    25166578: "Cambio Duvidas No Processo",
  },

  transferOptions: {
    25166519: [
      { value: "25166577", text: "Cambio Cotacao Moeda" },
      { value: "25166578", text: "Cambio Duvidas No Processo" },
    ],
    25166577: [
      { value: "25166519", text: "Cambio Fechamento Operacao" },
      { value: "25166578", text: "Cambio Duvidas No Processo" },
    ],
    25166578: [
      { value: "25166519", text: "Cambio Fechamento Operacao" },
      { value: "25166577", text: "Cambio Cotacao Moeda" },
    ],
    default: [
      { value: "25166519", text: "Cambio Fechamento Operacao" },
      { value: "25166577", text: "Cambio Cotacao Moeda" },
      { value: "25166578", text: "Cambio Duvidas No Processo" },
    ],
  },
};

// Gerenciar transferências
function setupTransfers() {
  const skillValue = document.getElementById("SkillT").value;
  const select = document.getElementById("ListaTransf");
  
  console.log("SkillT value:", skillValue);
  console.log("ListaTransf element:", select);
  
  const options =
    skillConfig.transferOptions[skillValue] ||
    skillConfig.transferOptions.default;

  console.log("Options to show:", options);

  select.innerHTML = "";
  select.appendChild(
    createOption("", "Lista de Transferência:")
  ).disabled = true;

  options.forEach((opt) => {
    if (opt.value !== skillValue) {
      select.appendChild(createOption(opt.value, opt.text));
    }
  });
  
  console.log("SetupTransfers completed. Options added:", select.options.length);
}

function populateDropdown() {
  var caminhoElement = document.getElementById('Caminho');
  if (caminhoElement) {
    var caminho = caminhoElement.value;
    var caminhoArray = caminho.split(',');
    var select = document.getElementById('navegacaoURA');

    if (select) {
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
}

// Controle de transferência
function handleTransfer() {
  const select = document.getElementById("ListaTransf");
  const button = document.getElementById("openConfirmation");

  button.disabled = !select.value;
  button.style.cursor = select.value ? "pointer" : "not-allowed";

  select.addEventListener("change", () => {
    button.disabled = !select.value;
    button.style.cursor = select.value ? "pointer" : "not-allowed";
  });
}

// Confirmar transferência
function confirmTransfer() {
  const opTransf = document.getElementById("ListaTransf").value;
  if (!opTransf) return alert("Nenhuma opção selecionada.");

  const skillName =
    skillConfig.skills[opTransf];

  if (confirm(`Realmente deseja transferir para ${skillName}?`)) {
    document.getElementById("openConfirmation").value = "transf";
    console.log("Transferência confirmada para:", skillName);
  }
}

function confirmRecording() {
  document.getElementById("recordingModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Inicialização geral após o carregamento do DOM
window.addEventListener('load', function () {
  // Copiar ao clicar no input
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    input.addEventListener('click', copyOnClick);
  });

  // Preenchimento de dropdown
  populateDropdown();

  // Funções que você mencionou mas não detalhou
  if (typeof populateNavigation === 'function') populateNavigation();
  if (typeof setupTransfers === 'function') setupTransfers();
  if (typeof showOriginSkill === 'function') showOriginSkill();
  if (typeof handleTransfer === 'function') handleTransfer();

  // Modal
  const modal = document.getElementById("recordingModal");
  const overlay = document.getElementById("overlay");
  if (modal && overlay) {
    modal.style.display = "block";
    overlay.style.display = "block";
  } else {
    console.warn("Modal ou overlay não encontrados.");
  }

  // Botão confirmação
  const openBtn = document.getElementById("openConfirmation");
  if (openBtn && typeof confirmTransfer === 'function') {
    openBtn.addEventListener("click", confirmTransfer);
  }

  // Botão finalizar
  const btnFinalizar = document.getElementById("btnPesquisa");
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", function () {
      this.value = "finalizar";
      console.log("Botão finalizar acionado");
    });
  }

  // Opções do select (se declaradas corretamente)
  if (typeof optionsToShow !== 'undefined' && Array.isArray(optionsToShow)) {
    const select = document.getElementById("seuSelectIdAqui"); // Substitua pelo ID real
    if (select) {
      optionsToShow.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
      });
    }
  }
});
