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
    "29269551": "Card_Cresol_Retencao",
    "29269552": "Card_Parceria_Retencao",
    "29269553": "Card_Sicoob_Retencao",
    "29269556": "Card_Ailos_Atendente",
    "29269557": "Card_Ailos_Cartao",
    "29269558": "Card_Ailos_Erro_Validac_URA",
    "29269559": "Card_Cartao_Emergencia",
    "29269560": "Card_Cresol_App",
    "29269561": "Card_Cresol_Atendente",
    "29269562": "Card_Cresol_Cadastro",
    "29269563": "Card_Cresol_Cartao",
    "29269564": "Card_Cresol_Contestar",
    "29269565": "Card_Cresol_Emergencia",
    "29269566": "Card_Cresol_Fatura",
    "29269567": "Card_Cresol_Internet_Bankin",
    "29269568": "Card_Cresol_Pagamento_Digital",
    "29269569": "Card_Parceria_App",
    "29269570": "Card_Parceria_Atendente",
    "29269571": "Card_Parceria_Cadastro",
    "29269572": "Card_Parceria_Cartao",
    "29269573": "Card_Parceria_Contestar",
    "29269574": "Card_Parceria_Fatura",
    "29269575": "Card_Parceria_Limite",
    "29269576": "Card_Parceria_Pagamento_Digital",
    "29269577": "Card_Parceria_Pontos",
    "29269578": "Card_Parceria_VIP",
    "29269579": "Card_Parceria_VIP_Pagamento_Digital",
    "29269580": "Card_Sicoob_App",
    "29269581": "Card_Sicoob_Atendente",
    "29269582": "Card_Sicoob_BNDES",
    "29269583": "Card_Sicoob_Cadastro",
    "29269584": "Card_Sicoob_Cartao",
    "29269585": "Card_Sicoob_Contestar",
    "29269586": "Card_Sicoob_Erro_Valida_URA",
    "29269587": "Card_Sicoob_Fatura",
    "29269588": "Card_Sicoob_Pagamento_Digital",
    "29269589": "Card_Sicoob_VIP",
    "29269590": "Card_Sicoob_VIP_Pagamento_Digital",
    "29269591": "Card_VIP_Emergencial",
    "29269592": "Card_VIP_Erro_Validacao_URA",
    "29269593": "Cresol_Erro_Validacao_URA"
  },
  
  transferOptions: {
    default: [
      {value: "29269551", text: "Card_Cresol_Retencao"},
      {value: "29269552", text: "Card_Parceria_Retencao"},
      {value: "29269553", text: "Card_Sicoob_Retencao"},
      {value: "29269556", text: "Card_Ailos_Atendente"},
      {value: "29269557", text: "Card_Ailos_Cartao"},
      {value: "29269558", text: "Card_Ailos_Erro_Validac_URA"},
      {value: "29269559", text: "Card_Cartao_Emergencia"},
      {value: "29269560", text: "Card_Cresol_App"},
      {value: "29269561", text: "Card_Cresol_Atendente"},
      {value: "29269562", text: "Card_Cresol_Cadastro"},
      {value: "29269563", text: "Card_Cresol_Cartao"},
      {value: "29269564", text: "Card_Cresol_Contestar"},
      {value: "29269565", text: "Card_Cresol_Emergencia"},
      {value: "29269566", text: "Card_Cresol_Fatura"},
      {value: "29269567", text: "Card_Cresol_Internet_Bankin"},
      {value: "29269568", text: "Card_Cresol_Pagamento_Digital"},
      {value: "29269569", text: "Card_Parceria_App"},
      {value: "29269570", text: "Card_Parceria_Atendente"},
      {value: "29269571", text: "Card_Parceria_Cadastro"},
      {value: "29269572", text: "Card_Parceria_Cartao"},
      {value: "29269573", text: "Card_Parceria_Contestar"},
      {value: "29269574", text: "Card_Parceria_Fatura"},
      {value: "29269575", text: "Card_Parceria_Limite"},
      {value: "29269576", text: "Card_Parceria_Pagamento_Digital"},
      {value: "29269577", text: "Card_Parceria_Pontos"},
      {value: "29269578", text: "Card_Parceria_VIP"},
      {value: "29269579", text: "Card_Parceria_VIP_Pagamento_Digital"},
      {value: "29269580", text: "Card_Sicoob_App"},
      {value: "29269581", text: "Card_Sicoob_Atendente"},
      {value: "29269582", text: "Card_Sicoob_BNDES"},
      {value: "29269583", text: "Card_Sicoob_Cadastro"},
      {value: "29269584", text: "Card_Sicoob_Cartao"},
      {value: "29269585", text: "Card_Sicoob_Contestar"},
      {value: "29269586", text: "Card_Sicoob_Erro_Valida_URA"},
      {value: "29269587", text: "Card_Sicoob_Fatura"},
      {value: "29269588", text: "Card_Sicoob_Pagamento_Digital"},
      {value: "29269589", text: "Card_Sicoob_VIP"},
      {value: "29269590", text: "Card_Sicoob_VIP_Pagamento_Digital"},
      {value: "29269591", text: "Card_VIP_Emergencial"},
      {value: "29269592", text: "Card_VIP_Erro_Validacao_URA"},
      {value: "29269593", text: "Cresol_Erro_Validacao_URA"},
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
