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

// Preencher select de Produto 
function populateProduto() {
  const select = document.getElementById('Produto');
  select.innerHTML = '';

  select.appendChild(createOption('SelecioneOpcao', 'Selecione uma Opção'));
  select.appendChild(createOption('Cartao', 'Cartão'));
  select.appendChild(createOption('Consorcio', 'Consórcio'));
  select.appendChild(createOption('Coopcerto', 'Coopcerto'));
  select.appendChild(createOption('Coopera', 'Coopera'));
  select.appendChild(createOption('CreditoImobiliario', 'Credito Imobiliário'));
  select.appendChild(createOption('Previdencia', 'Previdência'));
  select.appendChild(createOption('Seguros', 'Seguros'));
  select.appendChild(createOption('Sipag1', 'Sipag 1.0'));
  select.appendChild(createOption('Sipag2', 'Sipag 2.0'));
}

// Preencher select de Assunto
function populateAssunto() {
  const select = document.getElementById('Assunto');
  select.innerHTML = '';
  
  select.appendChild(createOption('Selecione uma Opção', 'Selecione uma Opção'));
}

// Processar dados da API diretamente
function processarDadosAPI() {
  const resInput = document.getElementById('Res');
  
  if(resInput && resInput.value) {
    const resultData = JSON.parse(resInput.value); // Remove o split anterior

    if(resultData.content?.length > 0) {
      const conta = resultData.content[0].account;
      
      // Exibir dados (exemplo)
      console.log('Dados da conta:', {
        cooperativa: conta.numeroCoperativa,
        contaCorrente: conta.numContaCorrente,
        instituicao: conta.institution.name
      });

      // Preencher campos na página (exemplo)
      document.getElementById('Cooperativa').value = conta.numeroCoperativa;
      document.getElementById('ContaCorrente').value = conta.numContaCorrente;
    }
  }
}

window.onload = function () {
  populateProduto();
  populateAssunto();
  processarDadosAPI(); // Chama a nova função

  // Configuração da Skill de Origem
  const skillOrigemElement = document.getElementById('SkillOrigem');
  const origemElement = document.getElementById('Origem');
  
  if (skillOrigemElement && origemElement) {
    const skillMap = {
      "20868796": "Adq Cabal Cadastro",
      "20868797": "Adq Cabal Atendente",
      "20868798": "Adq Cabal Credenciamento",
      "20868799": "Adq Cabal Portal",
      "20868801": "Adq Cabal Financeiro",
      "20868802": "Adq Cabal Retencao",
      "20868803": "Adq Cabal Suporte Tecnico",
      "31507625": "2. SUPER: SANDRA DA CRUZ", 
      "31507628": "2. SUPER: CAROLYNA M. S. PRUDES", 
      "31507627": "2. SUPER: JOÃO MARTINS B. NETO", 
      "31507626": "2. SUPER: LUCIANA SOARES LIMA", 
    };

    const skillFormatada = skillMap[skillOrigemElement.value] 
      ? `${skillOrigemElement.value} - ${skillMap[skillOrigemElement.value]}`
      : " ";
    
    origemElement.value = skillFormatada;
  }

  // Configuração do Botão Finalizar 
  document.getElementById("btnFinalizar").addEventListener("click", function () {
    this.value = "finalizar";
    console.log("valor:" + this.value);
  });

  // Configuração do Botão Consultar 
  document.getElementById("btnConsultar").addEventListener("click", function () {
    this.value = "consultar";
    console.log("valor:" + this.value);
  });
};
