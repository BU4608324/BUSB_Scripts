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
    29221046: "Prevenção MED",
    31545494: "Prevenção MED Especialistas",
  },

  transferOptions: {
    29221046: [
      { value: "31545494", text: "Prevenção MED Especialistas" },
    ],
    31545494: [
      { value: "29221046", text: "Prevenção MED" },
    ],
    default: [
      { value: "29221046", text: "Prevenção MED" },
      { value: "31545494", text: "Prevenção MED Especialistas" },
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

  // Funções que você mencionou mas não detalhou
  if (typeof setupTransfers === 'function') setupTransfers();
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

  // Botão "Pesquisa" - movido para dentro do DOM ready
  const btnPesquisa = document.getElementById("btnPesquisa");
  if (btnPesquisa) {
    btnPesquisa.addEventListener("click", function () {
      this.value = "pesquisa";
    });
  }

  // Event listener para MotivoDesc - movido para dentro do DOM ready
  const motivoDesc = document.getElementById('MotivoDesc');
  if (motivoDesc) {
    motivoDesc.addEventListener('change', function () {
      console.log("Motivo selecionado:", this.value);
    });
  }
});
