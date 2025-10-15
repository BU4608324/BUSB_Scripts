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
/*
function copyOnClick(event) {
  var copyText = event.target;
  copyText.select();
  document.execCommand("copy");
  console.log("Copiado com clique: " + copyText.value);
}
*/

const inputs = document.querySelectorAll('input[type="text"]');

/*
inputs.forEach(input => {
  input.addEventListener('click', copyOnClick);
});
*/

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
  // Preencher dropdown
  populateDropdown();

  // Não exibir mesma skill
  const skillValueElement = document.getElementById('SkillT');
  const select = document.getElementById('ListaTransf');
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

  // Exibir skill de entrada
  const skillOrigemElement = document.getElementById('SkillOrigem');
  let skillFormatada = "";

  if (skillOrigemElement) {
    let skillOrigem = skillOrigemElement.value;

    switch (skillOrigem) {
      case "29221352":
        skillFormatada = "29221352 - Seguros Vida Retencao";
        break;
      case "29221353":
        skillFormatada = "29221353 - Poupanca";
        break;
      case "29221354":
        skillFormatada = "29221354 - Previ";
        break;
      case "29221355":
        skillFormatada = "29221355 - PUC Bloqueio Dispositivo";
        break;
      case "29221357":
        skillFormatada = "29221357 - Seguro Vida";
        break;
      case "29221358":
        skillFormatada = "29221358 - Seguro Vida Beneficios";
        break;
      case "29221359":
        skillFormatada = "29221359 - Seguro Vida Empresarial";
        break;
      case "29221360":
        skillFormatada = "29221360 - Credito Imobiliario Adesao";
        break;
      case "29221361":
        skillFormatada = "29221361 - Credito Imob Analis de Credito";
        break;
      case "29221362":
        skillFormatada = "29221362 - Credito Imob Financeiro";
        break;
      case "29221363":
        skillFormatada = "29221363 - Credito Imob Outros Assuntos";
        break;
      case "29221364":
        skillFormatada = "29221364 - Credito Imob Sim de Propost";
        break;
      case "25166174":
        skillFormatada = "25166174 - TER Coopera";
        break;
      case "25166176":
        skillFormatada = "25166176 - TER Aplicativo Sicoob";
        break;
      case "25166177":
        skillFormatada = "25166177 - TER Associacao Digital";
        break;
      case "25166179":
        skillFormatada = "25166179 - TER Atendente";
        break;
      case "25166180":
        skillFormatada = "25166180 - TER ATM";
        break;
      case "25166181":
        skillFormatada = "25166181 - TER Home Broker";
        break;
      case "25166182":
        skillFormatada = "25166182 - TER Internet Banking";
        break;
      case "25166184":
        skillFormatada = "25166184 - TER Sicoob Tag";
        break;
      case "25166185":
        skillFormatada = "25166185 - TER Sicoobnet Empresarial";
        break;
      case "23120880":
        skillFormatada = "23120880 - Sipag 2.0 App";
        break;
      case "20868525":
        skillFormatada = "20868525 - Consorcio Adesao";
        break;
      case "20868529":
        skillFormatada = "20868529 - Consorcio Cadastro";
        break;
      case "20868531":
        skillFormatada = "20868531 - Consorcio Financeiro";
        break;
      case "20868526":
        skillFormatada = "20868526 - Consorcio Assembleia";
        break;
      case "20868530":
        skillFormatada = "20868530 - Consorcio Contemplacao";
        break;
      case "20868528":
        skillFormatada = "20868528 - Consorcio Baixa de Documentacao";
        break;
      case "20868533":
        skillFormatada = "20868533 - Consorcio Retencao";
        break;
      case "20868535":
        skillFormatada = "20868535 - Consorcio Troca de Titularidade";
        break;
      case "20868527":
        skillFormatada = "20868527 - Consorcio Assuntos Gerais";
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
};

// Popup Confirmação Transferência
function showPopup() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log(opTransf);

  if (opTransf != "") {
    let transfSkill = "";

    switch (opTransf) {
    case "29221352":
        transfSkill = "29221352 - Seguros Vida Retencao";
        break;
      case "29221353":
        transfSkill = "29221353 - Poupanca";
        break;
      case "29221354":
        transfSkill = "29221354 - Previ";
        break;
      case "29221355":
        transfSkill = "29221355 - PUC Bloqueio Dispositivo";
        break;
      case "29221357":
        transfSkill = "29221357 - Seguro Vida";
        break;
      case "29221358":
        transfSkill = "29221358 - Seguro Vida Beneficios";
        break;
      case "29221359":
        transfSkill = "29221359 - Seguro Vida Empresarial";
        break;
      case "29221360":
        transfSkill = "29221360 - Credito Imobiliario Adesao";
        break;
      case "29221361":
        transfSkill = "29221361 - Credito Imob Analis de Credito";
        break;
      case "29221362":
        transfSkill = "29221362 - Credito Imob Financeiro";
        break;
      case "29221363":
        transfSkill = "29221363 - Credito Imob Outros Assuntos";
        break;
      case "29221364":
        transfSkill = "29221364 - Credito Imob Sim de Propost";
        break;
      case "25166174":
        transfSkill = "25166174 - TER Coopera";
        break;
      case "25166176":
        transfSkill = "25166176 - TER Aplicativo Sicoob";
        break;
      case "25166177":
        transfSkill = "25166177 - TER Associacao Digital";
        break;
      case "25166179":
        transfSkill = "25166179 - TER Atendente";
        break;
      case "25166180":
        transfSkill = "25166180 - TER ATM";
        break;
      case "25166181":
        transfSkill = "25166181 - TER Home Broker";
        break;
      case "25166182":
        transfSkill = "25166182 - TER Internet Banking";
        break;
      case "25166184":
        transfSkill = "25166184 - TER Sicoob Tag";
        break;
      case "25166185":
        transfSkill = "25166185 - TER Sicoobnet Empresarial";
        break;
      case "23120880":
        transfSkill = "23120880 - Sipag 2.0 App";
        break;
      case "20868525":
        transfSkill = "20868525 - Consorcio Adesao";
        break;
      case "20868529":
        transfSkill = "20868529 - Consorcio Cadastro";
        break;
      case "20868531":
        transfSkill = "20868531 - Consorcio Financeiro";
        break;
      case "20868526":
        transfSkill = "20868526 - Consorcio Assembleia";
        break;
      case "20868530":
        transfSkill = "20868530 - Consorcio Contemplacao";
        break;
      case "20868528":
        transfSkill = "20868528 - Consorcio Baixa de Documentacao";
        break;
      case "20868533":
        transfSkill = "20868533 - Consorcio Retencao";
        break;
      case "20868535":
        transfSkill = "20868535 - Consorcio Troca de Titularidade";
        break;
      case "20868527":
        transfSkill = "20868527 - Consorcio Assuntos Gerais";
        break;
    }

    const result = confirm("Realmente deseja transferir para " + transfSkill + "?");
    if (result) {
      executarFuncao();
    }
  } else {
    alert("Nenhuma opção selecionada.");
  }
}

function executarFuncao() {
  let opTransf = document.getElementById('ListaTransf').value;
  console.log('Função executada!');
  document.getElementById('openConfirmation').value = "transf";
}

document.getElementById('openConfirmation').addEventListener('click', showPopup);

// Botão "Pesquisa"
document.getElementById("btnPesquisa").addEventListener("click", function () {
  console.log('BOTAO PESQUISA');
  this.value = "pesquisa";
  console.log('ACIONADO');
});

// Habilitar/desabilitar botão baseado na seleção
document.addEventListener('DOMContentLoaded', function() {
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
});


// Opções para o select
const allOptions = [
  { value: "", text: "Lista de Transferência:" },
  { value: "29221352", text: "29221352 - Seguros Vida Retencao" },
  { value: "29221353", text: "29221353 - Poupanca" },
  { value: "29221354", text: "29221354 - Previ" },
  { value: "29221355", text: "29221355 - PUC Bloqueio Dispositivo" },
  { value: "29221357", text: "29221357 - Seguro Vida" },
  { value: "29221358", text: "29221358 - Seguro Vida Beneficios" },
  { value: "29221359", text: "29221359 - Seguro Vida Empresarial" },
  { value: "29221360", text: "29221360 - Credito Imobiliario Adesao" },
  { value: "29221361", text: "29221361 - Credito Imob Analis de Credito" },
  { value: "29221362", text: "29221362 - Credito Imob Financeiro" },
  { value: "29221363", text: "29221363 - Credito Imob Outros Assuntos" },
  { value: "29221364", text: "29221364 - Credito Imob Sim de Propost" },
  { value: "25166174", text: "25166174 - TER Coopera" },
  { value: "25166176", text: "25166176 - TER Aplicativo Sicoob" },
  { value: "25166177", text: "25166177 - TER Associacao Digital" },
  { value: "25166179", text: "25166179 - TER Atendente" },
  { value: "25166180", text: "25166180 - TER ATM" },
  { value: "25166181", text: "25166181 - TER Home Broker" },
  { value: "25166182", text: "25166182 - TER Internet Banking" },
  { value: "25166184", text: "25166184 - TER Sicoob Tag" },
  { value: "25166185", text: "25166185 - TER Sicoobnet Empresarial" },
  { value: "23120880", text: "23120880 - Sipag 2.0 App" },
  { value: "20868525", text: "20868525 - Consorcio Adesao" },
  { value: "20868529", text: "20868529 - Consorcio Cadastro" },
  { value: "20868531", text: "20868531 - Consorcio Financeiro" },
  { value: "20868526", text: "20868526 - Consorcio Assembleia" },
  { value: "20868530", text: "20868530 - Consorcio Contemplacao" },
  { value: "20868528", text: "20868528 - Consorcio Baixa de Documentacao" },
  { value: "20868533", text: "20868533 - Consorcio Retencao" },
  { value: "20868535", text: "20868535 - Consorcio Troca de Titularidade" },
  { value: "20868527", text: "20868527 - Consorcio Assuntos Gerais" }
];

// Opções para "Consórcio Contemplação" (apenas Transferência e URA PUC)
// const contemplationOptions = [
//   { value: " ", text: "Lista de Transferência:" },
//   { value: "20868534", text: "20868534 - Consórcio Transferência" },
//   { value: "20868532", text: "20868532 - Consórcio Funchal" },
//   { value: "20868533", text: "20868533 - Consórcio Retencao" },
//   { value: "PUC", text: "URA PUC" }
// ];

// Obter o valor do input SkillT
const skillValue = document.getElementById("SkillT").value;

// Obter o select
const select = document.getElementById("ListaTransf");

// Escolher as opções com base na skill
const optionsToShow = skillValue === "20868530"
  ? contemplationOptions
  : allOptions.filter(option => option.value !== "20868534" && option.value !== skillValue);

// Adicionar as opções ao select
optionsToShow.forEach(option => {
  const opt = document.createElement("option");
  opt.value = option.value;
  opt.textContent = option.text;
  select.appendChild(opt);
});
