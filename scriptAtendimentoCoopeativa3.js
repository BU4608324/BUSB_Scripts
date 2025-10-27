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
    29220937: "5300-IRRF",
    29220938: "Adquirencia Cabal",
    29220939: "Antecipacao",
    29220940: "App Sicoob e IB",
    29220941: "Arquivos Oficiais",
    29220942: "Atendimento Digital",
    29220943: "ATM",
    29220944: "Bacen Jud",
    29220945: "Cadastro de Pessoas",
    29220946: "Caixa e Correspondente",
    29220947: "Captacao Remunerada",
    29220948: "CLS-CRL-e-GRC",
    29220949: "Cob Arquivos",
    29220950: "Cob Beneficiario",
    29220951: "Cob Emissao",
    29220952: "Cob Mecanismo",
    29220953: "Cob Negativacao",
    29220955: "Cob Relatorios",
    29220954: "Cobranca Administrativa",
    29220956: "Compensacao",
    29220957: "Conciliacao Contabil",
    29220958: "Consorcio Cobranca",
    29220959: "Consorcio Condicoes",
    29220960: "Consorcio Contemplacao",
    29220961: "Consorcio Imovel",
    29220962: "Consorcio Vendas",
    29220963: "Conta Capital",
    29220964: "Conta Corrente",
    29220965: "Controles Internos",
    29220966: "Convenios",
    29220967: "Coopera e Coopcerto",
    29220968: "COP",
    29220969: "Credito Consignado",
    29220970: "Credito Imob Analise",
    29220971: "Credito Imob Demais",
    29220972: "Credito Imob Pagamentos",
    29220973: "Credito Imob Prognum",
    29220974: "Credito Rural",
    29220976: "CRO",
    29220977: "Demais de Investimento",
    29220978: "Disputas e Recuperacao",
    29220979: "E-Financeira",
    29220980: "Empresarial Gente",
    29220981: "Empresarial RM",
    29220982: "Empresarial SISBR",
    29220983: "Emprestimo",
    31507693: "Gestao De Acesso", 
    29220984: "Link - Agendamentos",
    29220985: "Link - Reparos",
    29220986: "Migracao",
    29220987: "Obrigacoes",
    29221008: "Parceiro Plus",
    29220988: "Partes Relacionadas",
    29220989: "PIX",
    29220990: "PLD",
    29220991: "Poupanca",
    29220992: "Prevencao e Fraude",
    29220993: "Previdencia Privada",
    29220994: "Recursos Banco",
    29220995: "Relatorios Antigos",
    29220996: "Repactuacao",
    29220997: "Rotinas Contabeis",
    29220998: "Liberacao de Dispositivo USB",
    29220999: "Seguros Gerais",
    31507692: "Seguro Prestamista", 
    29221000: "Sicoob Moob",
    29221001: "Sicoob TAG",
    29221002: "Sipag 1.0",
    29221003: "Sipag 2.0",
    29221004: "Sisbr Analitico e PAD",
    29221005: "Solicitacao Fundo",
    29221006: "Transacao de Cartoes",
    29221009: "Transferencia Internacional",
    "AC": "URA Atendimento à Cooperativas",
    31507625: "2. SUPER: SANDRA DA CRUZ", 
    31507628: "2. SUPER: CAROLYNA M. S. PRUDES", 
    31507627: "2. SUPER: JOÃO MARTINS B. NETO", 
    31507626: "2. SUPER: LUCIANA SOARES LIMA",
    35589848: "2. Portal de Serviços do CCS",
  },

  transferOptions: {
    default: [
      { value: "29221007", text: "Consorcio Imob Funchal" },
      { value: "29220975", text: "Credito Imobiliario Funchal" },
      { value: "29220937", text: "5300-IRRF" },
      { value: "29220938", text: "Adquirencia Cabal" },
      { value: "29220939", text: "Antecipacao" },
      { value: "29220940", text: "App Sicoob e IB" },
      { value: "29220941", text: "Arquivos Oficiais" },
      { value: "29220942", text: "Atendimento Digital" },
      { value: "29220943", text: "ATM" },
      { value: "29220944", text: "Bacen Jud" },
      { value: "29220945", text: "Cadastro de Pessoas" },
      { value: "29220946", text: "Caixa e Correspondente" },
      { value: "29220947", text: "Captacao Remunerada" },
      { value: "29220948", text: "CLS-CRL-e-GRC" },
      { value: "29220949", text: "Cob Arquivos" },
      { value: "29220950", text: "Cob Beneficiario" },
      { value: "29220951", text: "Cob Emissao" },
      { value: "29220952", text: "Cob Mecanismo" },
      { value: "29220953", text: "Cob Negativacao" },
      { value: "29220955", text: "Cob Relatorios" },
      { value: "29220954", text: "Cobranca Administrativa" },
      { value: "29220956", text: "Compensacao" },
      { value: "29220957", text: "Conciliacao Contabil" },
      { value: "29220958", text: "Consorcio Cobranca" },
      { value: "29220959", text: "Consorcio Condicoes" },
      { value: "29220960", text: "Consorcio Contemplacao" },
      { value: "29220961", text: "Consorcio Imovel" },
      { value: "29220962", text: "Consorcio Vendas" },
      { value: "29220963", text: "Conta Capital" },
      { value: "29220964", text: "Conta Corrente" },
      { value: "29220965", text: "Controles Internos" },
      { value: "29220966", text: "Convenios" },
      { value: "29220967", text: "Coopera e Coopcerto" },
      { value: "29220968", text: "COP" },
      { value: "29220969", text: "Credito Consignado" },
      { value: "29220970", text: "Credito Imob Analise" },
      { value: "29220971", text: "Credito Imob Demais" },
      { value: "29220972", text: "Credito Imob Pagamentos" },
      { value: "29220973", text: "Credito Imob Prognum" },
      { value: "29220974", text: "Credito Rural" },
      { value: "29220976", text: "CRO" },
      { value: "29220977", text: "Demais de Investimento" },
      { value: "29220978", text: "Disputas e Recuperacao" },
      { value: "31507693", text: "Gestao De Acesso" },
      { value: "29220979", text: "E-Financeira" },
      { value: "29220980", text: "Empresarial Gente" },
      { value: "29220981", text: "Empresarial RM" },
      { value: "29220982", text: "Empresarial SISBR" },
      { value: "29220983", text: "Emprestimo" },
      { value: "29220984", text: "Link - Agendamentos" },
      { value: "29220985", text: "Link - Reparos" },
      { value: "29220986", text: "Migracao" },
      { value: "29220987", text: "Obrigacoes" },
      { value: "29221008", text: "Parceiro Plus" },
      { value: "29220988", text: "Partes Relacionadas" },
      { value: "29220989", text: "PIX" },
      { value: "29220990", text: "PLD" },
      { value: "29220991", text: "Poupanca" },
      { value: "29220992", text: "Prevencao e Fraude" },
      { value: "29220993", text: "Previdencia Privada" },
      { value: "29220994", text: "Recursos Banco" },
      { value: "29220995", text: "Relatorios Antigos" },
      { value: "29220996", text: "Repactuacao" },
      { value: "29220997", text: "Rotinas Contabeis" },
      { value: "29220998", text: "Liberacao de Dispositivo USB" },
      { value: "29220999", text: "Seguros Gerais" },
      { value: "31507692", text: "Seguro Prestamista" },
      { value: "29221000", text: "Sicoob Moob" },
      { value: "29221001", text: "Sicoob TAG" },
      { value: "29221002", text: "Sipag 1.0" },
      { value: "29221003", text: "Sipag 2.0" },
      { value: "29221004", text: "Sisbr Analitico e PAD" },
      { value: "29221005", text: "Solicitacao Fundo" },
      { value: "29221006", text: "Transacao de Cartoes" },
      { value: "29221009", text: "Transferencia Internacional" },
      { value: "35589848", text: "2. Portal de Serviços do CCS" },
      { value: "AC", text: "URA Atendimento à Cooperativas" },
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
