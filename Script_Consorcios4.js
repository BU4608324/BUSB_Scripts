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
    "20868525": "Consórcio Adesão",
    "20868526": "Consórcio Assembléia",
    "20868527": "Consórcio Assuntos Gerais",
    "20868528": "Consórcio Baixa DOC",
    "20868529": "Consórcio Cadastro",
    "20868530": "Consórcio Contemplação",
    "20868531": "Consórcio Financeiro",
    "20868532": "Consórcio Funchal",
    "20868533": "Consórcio Retenção",
    "20868534": "Consórcio Transferência",
    "20868535": "Consórcio Troca Titularidade",
    "25166400": "Consórcio Troca de Bem",
    "25166399": "Consórcio Recebimento de Crédito"
    "31507920": "testeFabricio-2"
  },
  
  transferOptions: {
    default: [
      {value: "20868525", text: "Consórcio Adesão"},
      {value: "20868526", text: "Consórcio Assembleia"},
      {value: "20868527", text: "Consórcio Assuntos Gerais"},
      {value: "20868528", text: "Consórcio Baixa DOC"},
      {value: "20868529", text: "Consórcio Cadastro"},
      {value: "20868530", text: "Consórcio Contemplação"},
      {value: "20868531", text: "Consórcio Financeiro"},
      {value: "20868532", text: "Consórcio Funchal"},
      {value: "20868533", text: "Consórcio Retenção"},
      {value: "20868534", text: "Consórcio Transferência"},
      {value: "20868535", text: "Consórcio Troca Titularidade"},
      {value: "25166400", text: "Consórcio Troca de Bem"},
      {value: "25166399", text: "Consórcio Recebimento de Crédito"},
      {value: "PUC", text: "URA PUC"}
      {value: "CRD", text: "1. CRD"}
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
