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
    { value: "29221352", text: "29221352 - Seguro_Vida_Retencao" },
    { value: "29221357", text: "29221357 - Seguro_Vida" },,
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
    "29221352": "29221352 - Seguro_Vida_Retencao",
    "29221357": "29221357 - Seguro_Vida",
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
