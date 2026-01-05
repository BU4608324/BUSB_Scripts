// Função de copiar texto ao clicar no botão "Copiar"
function copyToClipboard(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado pelo botão: " + copyText.value);
  }
}

// Função de copiar texto ao clicar no campo
function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}

const inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
  input.addEventListener('click', copyOnClick);
});

// Função de copiar texto ao focar no campo
function copyOnFocus(elementId) {
  var copyText = document.getElementById(elementId);
  if (copyText) {
    copyText.select();
    document.execCommand("copy");
    console.log("Copiado com foco: " + copyText.value);
  }
}

// Função de preencher o dropdown de "Navegação"
function populateDropdown() {
  var caminhoElement = document.getElementById('Caminho');
  if (caminhoElement) {
    var caminho = caminhoElement.value;
    var caminhoArray = caminho.split(',');
    var select = document.getElementById('navegacaoURA');

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

window.onload = function () {
  // Abrir modal de gravação
  openRecordingModal();

  // Preencher dropdown
  populateDropdown();

  // Exibir skill de entrada
  const skillOrigemElement = document.getElementById('SkillOrigem');
  let skillFormatada = "";

  if (skillOrigemElement) {
    let skillOrigem = skillOrigemElement.value;

    switch (skillOrigem) {
        case "RetencaoCartao":
            skillFormatada = "29269553 - Card_Sicoob_Retencao";
            break;
        case "29269580":
            skillFormatada = "29269580 - Card_Sicoob_App";
            break;
        case "29269581":
            skillFormatada = "29269581 - Card_Sicoob_Atendente";
            break;
        case "29269582":
            skillFormatada = "29269582 - Card_Sicoob_BNDES";
            break;
        case "29269583":
            skillFormatada = "29269583 - Card_Sicoob_Cadastro";
            break;
        case "29269584":
            skillFormatada = "29269584 - Card_Sicoob_Cartao";
            break;
        case "29269585":
            skillFormatada = "29269585 - Card_Sicoob_Contestar";
            break;
        case "29269586":
            skillFormatada = "29269586 - Card_Sicoob_Erro_Valida_URA";
            break;
        case "29269587":
            skillFormatada = "29269587 - Card_Sicoob_Fatura";
            break;
        case "29269588":
            skillFormatada = "29269588 - Card_Sicoob_Pagamento_Digit";
            break;
        case "29269589":
            skillFormatada = "29269589 - Card_Sicoob_VIP";
            break;
        case "29269590":
            skillFormatada = "29269590 - Card_Sicoob_VIP_Pgto_Digita";
            break;
        case "UraPuc":
            skillFormatada = "URA PUC";
            break;
        default:
            skillFormatada = " ";
            break;
    }

    const origemElement = document.getElementById('Origem');
    if (origemElement) {
      origemElement.value = skillFormatada;
    } else {
      console.warn("Elemento com ID 'Origem' não encontrado.");
    }
  }

  // Opções para o select
  const allOptions = [
    { value: "", text: "Lista de Transferência:" },
    { value: "RetencaoCartao", text: "29269553 - Card_Sicoob_Retencao" },
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
    { value: "UraPuc", text: "URA PUC" },
  ];

  // Obter o valor do input SkillT
  const skillValue = document.getElementById("SkillT").value;

  // Obter o select
  const select = document.getElementById("ListaTransf");

  // Limpar o select para evitar duplicação
  select.innerHTML = "";

  // Filtrar as opções para remover a que está em skillValue
  const optionsToShow = allOptions.filter(option => option.value !== skillValue);

  // Adicionar as opções ao select
  optionsToShow.forEach(option => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.textContent = option.text;
    select.appendChild(opt);
  });

  // Não exibir mesma skill
  const skillValueElement = document.getElementById('SkillT');
  const options = select.querySelectorAll('option');

  if (skillValueElement) {
    const skillValue = skillValueElement.value;
    options.forEach(option => {
      if (option.value === skillValue) {
        option.style.display = 'none';
      } else {
        option.style.display = '';
      }
    });
  }

  // Habilitar/desabilitar botão baseado na seleção
  const selectElement = document.getElementById('ListaTransf');
  const button = document.getElementById('openConfirmation');

  // Iniciar com o botão desabilitado
  button.disabled = true;
  button.style.cursor = "not-allowed";

  // Adicionar evento para habilitar/desabilitar o botão quando houver mudança no select
  selectElement.addEventListener('change', function() {
    if (selectElement.value !== "") {
      button.disabled = false;
      button.style.cursor = "pointer";
    } else {
      button.disabled = true;
      button.style.cursor = "not-allowed";
    }
  });

  // Event listener para o botão de transferência
  document.getElementById('openConfirmation').addEventListener('click', showPopup);

  // Botão "Pesquisa"
  document.getElementById("btnPesquisa").addEventListener("click", function () {
    this.value = "pesquisa";
  });
};

// Função para obter skill formatada
function getTransferSkill(opTransf) {
  switch (opTransf) {
    case "RetencaoCartao":
      return "29269553 - Card_Sicoob_Retencao";
    case "29269580":
      return "29269580 - Card_Sicoob_App";    
    case "29269581":
      return "29269581 - Card_Sicoob_Atendente";
    case "29269582":
      return "29269582 - Card_Sicoob_BNDES";
    case "29269583":
      return "29269583 - Card_Sicoob_Cadastro";
    case "29269584":
      return "29269584 - Card_Sicoob_Cartao";
    case "29269585":
      return "29269585 - Card_Sicoob_Contestar";
    case "29269586":
      return "29269586 - Card_Sicoob_Erro_Valida_URA";
    case "29269587":
      return "29269587 - Card_Sicoob_Fatura";
    case "29269588":
      return "29269588 - Card_Sicoob_Pagamento_Digit";
    case "29269589":
      return "29269589 - Card_Sicoob_VIP";
    case "29269590":
      return "29269590 - Card_Sicoob_VIP_Pgto_Digita";
    case "UraPuc":
      return "URA PUC";
    default:
      return " ";
  }
}

// Função para confirmar transferência
function confirmTransfer() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log('Transferência confirmada para: ' + opTransf);
  document.getElementById('openConfirmation').value = "transf";
}

// Popup Confirmação Transferência
function showPopup() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log(opTransf);

  if (opTransf != "") {
    let transfSkill = getTransferSkill(opTransf);

    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      confirmTransfer();
    }
  } else {
    alert("Nenhuma opção selecionada.");
  }
}

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

// Função para confirmar fechamento da gravação
function confirmRecording() {
  document.getElementById("recordingModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
