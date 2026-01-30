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
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  return option;
}

// Preencher dropdown de navegação
function populateNavigation() {
  const caminho = document.getElementById('Caminho').value.split(',');
  const select = document.getElementById('navegacaoURA');
  
  select.innerHTML = '';
  select.appendChild(createOption('', 'Navegação:')).disabled = true;

  caminho.forEach(item => {
    const option = createOption(item.trim(), item.trim());
    option.disabled = true;
    select.appendChild(option);
  });
}

// Configuração de skills
const skillConfig = {
  skills: {
    "23120880": "Sipag 2.0 App",
    "23120881": "Sipag 2.0 Atendente",
    "23120882": "Sipag 2.0 Cadastro",
    "23120883": "Sipag 2.0 Financeiro",
    "23120884": "Sipag 2.0 Logistica",
    "23120885": "Sipag 2.0 Relatorio",
    "23120886": "Sipag 2.0 Suporte Tecnico",
    "23121572": "Sipag 2.0 Retencao",
    "25166191": "Sipag 2.0 Reativacao de Cadastro",
    "25166192": "Sipag 2.0 Habilitar Servico Antecipacao",
    "23120887": "Sipag 2.0 Erro Validação URA",
  },
  
  transferOptions: {
    default: [
 //     {value: "23120880", text: "Sipag 2.0 App"},
 //     {value: "23120881", text: "Sipag 2.0 Atendente"},
 //     {value: "23120882", text: "Sipag 2.0 Cadastro"},
 //     {value: "23120883", text: "Sipag 2.0 Financeiro"},
 //     {value: "23120884", text: "Sipag 2.0 Logistica"},
 //     {value: "23120885", text: "Sipag 2.0 Relatorio"},
      {value: "23120886", text: "Sipag 2.0 Suporte Tecnico"},
 //     {value: "23121572", text: "Sipag 2.0 Retencao"},
 //     {value: "25166191", text: "Sipag 2.0 Reativacao de Cadastro"},
      {value: "25166192", text: "Sipag 2.0 Habilitar Servico Antecipacao"},
      {value: "PUC", text: "URA PUC"}
    ],
    "25166399": [
      {value: "PUC", text: "URA PUC"}
    ],
    "20868530": [
      {value: "20868534", text: "Consórcio Transferência"},
      {value: "20868532", text: "Consórcio Funchal"},
      {value: "PUC", text: "URA PUC"}
    ]
  }
};

// Gerenciar transferências
function setupTransfers() {
  const skillValue = document.getElementById("SkillT").value;
  const select = document.getElementById("ListaTransf");
  const options = skillConfig.transferOptions[skillValue] || skillConfig.transferOptions.default;

  select.innerHTML = '';
  select.appendChild(createOption('', 'Lista de Transferência:')).disabled = true;

  options.forEach(opt => {
    if (opt.value !== skillValue) {
      select.appendChild(createOption(opt.value, opt.text));
    }
  });
}

// Exibir skill de origem
function showOriginSkill() {
  const skillOrigem = document.getElementById('SkillOrigem').value;
  const origemElement = document.getElementById('Origem');
  
  if (origemElement) {
    const skillText = skillConfig.skills[skillOrigem] || '';
    origemElement.value = skillText ? `${skillOrigem} - ${skillText}` : '';
  }
}

// Controle de transferência
function handleTransfer() {
  const select = document.getElementById('ListaTransf');
  const button = document.getElementById('openConfirmation');
  
  button.disabled = !select.value;
  button.style.cursor = select.value ? "pointer" : "not-allowed";

  select.addEventListener('change', () => {
    button.disabled = !select.value;
    button.style.cursor = select.value ? "pointer" : "not-allowed";
  });
}

// Confirmar transferência
function confirmTransfer() {
  const opTransf = document.getElementById('ListaTransf').value;
  if (!opTransf) return alert("Nenhuma opção selecionada.");

  const skillName = skillConfig.skills[opTransf] || 
                   (opTransf === 'PUC' ? 'URA PUC' : 'Skill Desconhecida');
  
  if (confirm(`Realmente deseja transferir para ${skillName}?`)) {
    document.getElementById('openConfirmation').value = "transf";
    console.log('Transferência confirmada para:', skillName);
  }
}

function confirmRecording() {
  document.getElementById("recordingModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Inicialização
window.onload = function() {
  populateNavigation();
  setupTransfers();
  showOriginSkill();
  handleTransfer();
  document.getElementById("recordingModal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.getElementById('openConfirmation').addEventListener('click', confirmTransfer);
  document.getElementById("btnPesquisa").addEventListener("click", function() {
    this.value = "pesquisa";
    console.log('Botão pesquisa acionado');
  });
};
