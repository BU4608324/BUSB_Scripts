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
        case "ConsorcioRetencao":
            skillFormatada = "20868533 - Consorcio_Retencao";
            break;
        case "20868528":
            skillFormatada = "20868528 - Consorcio_Baixa-DOC";
            break;
        case "20868525":
            skillFormatada = "20868525 - Consorcio_Adesao";
            break;
        case "20868526":
            skillFormatada = "20868526 - Consorcio_Assembleia";
            break;
        case "20868527":
            skillFormatada = "20868527 - Consorcio_Assuntos-Gerais";
            break;
        case "20868529":
            skillFormatada = "20868529 - Consorcio_Cadastro";
            break;
        case "20868530":
            skillFormatada = "20868530 - Consorcio_Contemplacao";
            break;
        case "20868531":
            skillFormatada = "20868531 - Consorcio_Financeiro";
            break;
        case "20868535":
            skillFormatada = "20868535 - Consorcio_TrocaTitularidade";
            break;
        case "25166234":
            skillFormatada = "25166234 - Transf_Consorcio_Funchal";
            break;
        case "UraConsorcio":  
            skillFormatada = "URA CONSORCIO";
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
    { value: "ConsorcioRetencao", text: "20868533 - Consorcio_Retencao" },
    { value: "20868528", text: "20868528 - Consorcio_Baixa-DOC" },
    { value: "20868525", text: "20868525 - Consorcio_Adesao" },
    { value: "20868526", text: "20868526 - Consorcio_Assembleia" },
    { value: "20868527", text: "20868527 - Consorcio_Assuntos-Gerais" },
    { value: "20868529", text: "20868529 - Consorcio_Cadastro" },
    { value: "20868530", text: "20868530 - Consorcio_Contemplacao" },
    { value: "20868531", text: "20868531 - Consorcio_Financeiro" },
    { value: "20868535", text: "20868535 - Consorcio_TrocaTitularidade" },
    { value: "25166234", text: "25166234 - Transf_Consorcio_Funchal" },
    { value: "UraConsorcio", text: "URA CONSORCIO" },
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
    case "ConsorcioRetencao":
      return "20868533 - Consorcio_Retencao";
    case "20868528":
      return "20868528 - Consorcio_Baixa-DOC";
    case "20868525":
      return "20868525 - Consorcio_Adesao";
    case "20868526":
      return "20868526 - Consorcio_Assembleia";
    case "20868527":
      return "20868527 - Consorcio_Assuntos-Gerais";
    case "20868529":
      return "20868529 - Consorcio_Cadastro";
    case "20868530":
      return "20868530 - Consorcio_Contemplacao";
    case "20868531":
      return "20868531 - Consorcio_Financeiro";
    case "20868535":
      return "20868535 - Consorcio_TrocaTitularidade";
    case "25166234":
      return "25166234 - Transf_Consorcio_Funchal";
    case "UraConsorcio":
      return "URA CONSORCIO";
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
