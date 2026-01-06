/*************************************************
 * UTILIDADES DE CÓPIA
 *************************************************/

// Copiar texto via botão
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.select();
  document.execCommand("copy");
  console.log("Copiado:", el.value);
}

// Copiar ao clicar no input
function copyOnClick(event) {
  const el = event.target;
  el.select();
  document.execCommand("copy");
}

// Copiar ao focar
function copyOnFocus(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  el.select();
  document.execCommand("copy");
}

// Aplica evento de clique a todos os inputs texto
document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('input[type="text"]')
    .forEach(input => input.addEventListener("click", copyOnClick));
});

/*************************************************
 * NAVEGAÇÃO URA
 *************************************************/

function populateDropdown() {
  const caminhoElement = document.getElementById("Caminho");
  const select = document.getElementById("navegacaoURA");

  if (!caminhoElement || !select) return;

  const caminho = caminhoElement.value?.trim();

  // Estado seguro: nunca deixa vazio
  if (!caminho) {
    select.innerHTML = '<option value="">Sem navegação</option>';
    return;
  }

  const itens = caminho
    .split(",")
    .map(i => i.trim())
    .filter(i => i.length > 0);

  if (itens.length === 0) {
    select.innerHTML = '<option value="">Sem navegação</option>';
    return;
  }

  select.innerHTML = "";

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Navegação:";
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  select.appendChild(defaultOpt);

  itens.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    opt.disabled = true; // apenas informativo
    select.appendChild(opt);
  });
}

/*************************************************
 * LISTA DE TRANSFERÊNCIA
 *************************************************/

function populateTransferList() {
  const select = document.getElementById("ListaTransf");
  const skillInput = document.getElementById("SkillT");

  if (!select || !skillInput) return;

  const skillAtual = skillInput.value;

const allOptions = [
  { value: "29269553", text: "29269553 - Card_Sicoob_Retencao" },
  { value: "29269580", text: "29269580 - Card_Sicoob_App" },
  { value: "29269581", text: "29269581 - Card_Sicoob_Atendente" },
  { value: "29269582", text: "29269582 - Card_Sicoob_BNDES" },
  { value: "29269583", text: "29269583 - Card_Sicoob_Cadastro" },
  { value: "29269584", text: "29269584 - Card_Sicoob_Cartao" },
  { value: "29269585", text: "29269585 - Card_Sicoob_Contestar" },
  { value: "29269586", text: "29269586 - Card_Sicoob_Erro_Valida_URA" },
  { value: "29269587", text: "29269587 - Card_Sicoob_Fatura" },
  { value: "29269588", text: "29269588 - Card_Sicoob_Pagamento_Digit" },
  { value: "29269589", text: "29269589 - Card_Sicoob_VIP" },
  { value: "29269590", text: "29269590 - Card_Sicoob_VIP_Pgto_Digita" },
  { value: "UraPuc", text: "URA PUC" }
];


  select.innerHTML = "";

  // Default obrigatório
  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.textContent = "Selecione uma transferência";
  defaultOpt.disabled = true;
  defaultOpt.selected = true;
  select.appendChild(defaultOpt);

  allOptions
    .filter(opt => opt.value !== skillAtual)
    .forEach(opt => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.text;
      select.appendChild(option);
    });
}

/*************************************************
 * BOTÃO DE TRANSFERÊNCIA
 *************************************************/

function setupTransferButton() {
  const select = document.getElementById("ListaTransf");
  const button = document.getElementById("openConfirmation");

  if (!select || !button) return;

  button.disabled = true;
  button.style.cursor = "not-allowed";

  select.addEventListener("change", () => {
    const habilitar = select.value !== "";
    button.disabled = !habilitar;
    button.style.cursor = habilitar ? "pointer" : "not-allowed";
  });

  button.addEventListener("click", showPopup);
}

/*************************************************
 * TRANSFERÊNCIA
 *************************************************/

function getTransferSkill(value) {
  const map = {
    "29269553": "29269553 - Card_Sicoob_Retencao",
    "29269580": "29269580 - Card_Sicoob_App",
    "29269581": "29269581 - Card_Sicoob_Atendente",
    "29269582": "29269582 - Card_Sicoob_BNDES",
    "29269583": "29269583 - Card_Sicoob_Cadastro",
    "29269584": "29269584 - Card_Sicoob_Cartao",
    "29269585": "29269585 - Card_Sicoob_Contestar",
    "29269586": "29269586 - Card_Sicoob_Erro_Valida_URA",
    "29269587": "29269587 - Card_Sicoob_Fatura",
    "29269588": "29269588 - Card_Sicoob_Pagamento_Digit",
    "29269589": "29269589 - Card_Sicoob_VIP",
    "29269590": "29269590 - Card_Sicoob_VIP_Pgto_Digita",
    "UraPuc": "URA PUC"
  };
  return map[value] || "";
}

function confirmTransfer() {
  document.getElementById("openConfirmation").value = "transf";
}

function showPopup() {
  const select = document.getElementById("ListaTransf");
  const value = select.value;

  if (!value) {
    alert("Nenhuma opção selecionada.");
    return;
  }

  const texto = getTransferSkill(value);
  const confirmar = confirm(`Realmente deseja transferir para ${texto}?`);

  if (confirmar) {
    confirmTransfer();
  }
}

/*************************************************
 * MODAL DE GRAVAÇÃO
 *************************************************/

function openRecordingModal() {
  const modal = document.getElementById("recordingModal");
  const overlay = document.getElementById("overlay");

  if (!modal || !overlay) return;

  modal.style.display = "block";
  overlay.style.display = "block";
}

function confirmRecording() {
  document.getElementById("recordingModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

/*************************************************
 * INICIALIZAÇÃO
 *************************************************/

window.onload = function () {
  openRecordingModal();
  populateDropdown();
  populateTransferList();
  setupTransferButton();
};

// BOTÃO PESQUISA E FINALIZAR LIGAÇÃO
document.getElementById("btnPesquisa").addEventListener("click", function () {
  this.value = "pesquisa";
});
 
document.getElementById('MotivoDesc').addEventListener('change', function () {
  console.log("Motivo selecionado:", this.value);
});
