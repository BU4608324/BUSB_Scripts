// Funções de cópia
function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log(`Copiado: ${copyText.value}`);
  }
}

function copyOnFocus(elementId) {
  copyToClipboard(elementId);
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
    29221007: "Consorcio Imob Funchal",
    29220975: "Credito Imobiliario Funchal",
    "AC": "URA Atendimento à Cooperativas",
    31507625: "2. SUPER: SANDRA DA CRUZ", 
    31507628: "2. SUPER: CAROLYNA M. S. PRUDES", 
    31507627: "2. SUPER: JOÃO MARTINS B. NETO", 
    31507626: "2. SUPER: LUCIANA SOARES LIMA",
  },

  transferOptions: {
    default: [
      { value: "29221007", text: "Consorcio Imob Funchal" },
      { value: "29220975", text: "Credito Imobiliario Funchal" },
      { value: "AC", text: "URA Atendimento à Cooperativas" },
      { value: "31507625", text: "2. SUPER: SANDRA DA CRUZ" },
      { value: "31507628", text: "2. SUPER: CAROLYNA M. S. PRUDES" },
      { value: "31507627", text: "2. SUPER: JOÃO MARTINS B. NETO" },
      { value: "31507626", text: "2. SUPER: LUCIANA SOARES LIMA" },
    ],
  },
};

// Gerenciar transferências
function setupTransfers() {
  const skillValue = document.getElementById("SkillT").value;
  const select = document.getElementById("ListaTransf");
  const options =
    skillConfig.transferOptions[skillValue] ||
    skillConfig.transferOptions.default;

  select.innerHTML = "";
  select.appendChild(
    createOption("", "Lista de Transferência:")
  ).disabled = true;

  options.forEach((opt) => {
    if (opt.value !== skillValue) {
      select.appendChild(createOption(opt.value, opt.text));
    }
  });
}

// Exibir skill de origem
function showOriginSkill() {
  const skillOrigem = document.getElementById("SkillOrigem").value;
  const origemElement = document.getElementById("Origem");

  if (origemElement) {
    const skillText = skillConfig.skills[skillOrigem] || "";
    origemElement.value = skillText ? `${skillOrigem} - ${skillText}` : "";
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
    skillConfig.skills[opTransf] ||
    (opTransf === "PUC" ? "URA PUC" : "Skill Desconhecida");

  if (confirm(`Realmente deseja transferir para ${skillName}?`)) {
    document.getElementById("openConfirmation").value = "transf";
    console.log("Transferência confirmada para:", skillName);
  }
}

// Preencher dropdown de navegação
function populateNavigation() {
  const caminho = document.getElementById("Caminho").value.split(";");
  const select = document.getElementById("navegacaoURA");

  select.innerHTML = "";
  select.appendChild(createOption("", "Navegação:")).disabled = true;

  caminho.forEach((item) => {
    const option = createOption(item.trim(), item.trim());
    option.disabled = true;
    select.appendChild(option);
  });
}

function confirmRecording() {
  document.getElementById("recordingModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Inicialização
window.onload = function () {
  populateNavigation();
  setupTransfers();
  showOriginSkill();
  handleTransfer();
  document.getElementById("recordingModal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document
    .getElementById("openConfirmation")
    .addEventListener("click", confirmTransfer);
  document
    .getElementById("btnFinalizar")
    .addEventListener("click", function () {
      this.value = "finalizar";
      console.log("Botão finalizar acionado");
    });
};
