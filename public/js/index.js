const selectedUbicacion = document.getElementById("ubicacion");
const selectedCampana = document.getElementById("campana");

const opciones = document.getElementById("opciones");

const inputAnydesk = document.getElementById("anydesk");
const inputPuesto = document.getElementById("puesto");
const inputMotivo = document.getElementById("motivo");

// inputAnydesk.disabled = false;
selectedUbicacion.addEventListener("change", () => {
  if (selectedUbicacion.value !== "Home Office") {
    inputPuesto.disabled = false;
    inputAnydesk.disabled = true;
  } else {
    inputPuesto.disabled = true;
    inputAnydesk.disabled = false;
  }
});

selectedCampana.addEventListener("change", () => {
  switch (selectedCampana.value) {
    case "Ventas":
    case "Retencion":
    case "Premium":
      inputMotivo.innerHTML =
        '<option selected disabled value="0">Seleccionar...</option>' +
        '<option value="Cambie de PC">Cambie de PC</option>' +
        '<option value="Carpeta Compartida">Carpeta Compartida</option>' +
        '<option value="Citrix">Citrix</option>' +
        '<option value="Doble Factor">Doble Factor</option>' +
        '<option value="Falla Audio">Falla Audio</option>' +
        '<option value="Falla Hardware">Falla Hardware</option>' +
        '<option value="FAN">FAN</option>' +
        '<option value="Internet / Proxy">Internet / Proxy</option>' +
        '<option value="Mail">Mail</option>' +
        '<option value="OPEN">OPEN</option>' +
        '<option value="PIC (WDE)">PIC (WDE)</option>' +
        '<option value="Usuario Windows">Usuario Windows</option>';
      break;
    case "Telecentro":
      inputMotivo.innerHTML =
        '<option selected disabled value="0">Seleccionar...</option>' +
        '<option value="3CX">3CX</option>' +
        '<option value="Cambie de PC">Cambie de PC</option>' +
        '<option value="Carpeta Compartida">Carpeta Compartida</option>' +
        '<option value="CRM">CRM</option>' +
        '<option value="Falla Audio">Falla Audio</option>' +
        '<option value="Falla Hardware">Falla Hardware</option>' +
        '<option value="Internet / Proxy">Internet / Proxy</option>' +
        '<option value="Mail">Mail</option>' +
        '<option value="Usuario Windows">Usuario Windows</option>' +
        '<option value="VPN">VPN</option>';
      break;

    case "Clarin 365":
      inputMotivo.innerHTML =
        '<option selected disabled value="0">Seleccionar...</option>' +
        '<option value="BotMaker">BotMaker</option>' +
        '<option value="Cambie de PC">Cambie de PC</option>' +
        '<option value="Carpeta Compartida">Carpeta Compartida</option>' +
        '<option value="Citrix">Citrix</option>' +
        '<option value="CRM">CRM</option>' +
        '<option value="Falla Audio">Falla Audio</option>' +
        '<option value="Falla Hardware">Falla Hardware</option>' +
        '<option value="Internet / Proxy">Internet / Proxy</option>' +
        '<option value="Mail">Mail</option>' +
        '<option value="PIC (WDE)">PIC (WDE)</option>' +
        '<option value="Usuario Windows">Usuario Windows</option>' +
        '<option value="VPN">VPN</option>' +
        '<option value="XLITE">XLITE</option>';
      break;

    case "Pfizer":
      inputMotivo.innerHTML =
        '<option selected disabled value="0">Seleccionar...</option>' +
        '<option value="Cambie de PC">Cambie de PC</option>' +
        '<option value="Carpeta Compartida">Carpeta Compartida</option>' +
        '<option value="CRM">CRM</option>' +
        '<option value="Falla Hardware">Falla Hardware</option>' +
        '<option value="Internet">Internet</option>' +
        '<option value="Mail">Mail</option>' +
        '<option value="Usuario Windows">Usuario Windows</option>' +
        '<option value="VPN">VPN</option>';
      break;

    case "Zurich":
      inputMotivo.innerHTML =
        '<option selected disabled value="0">Seleccionar...</option>' +
        '<option value="Cambie de PC">Cambie de PC</option>' +
        '<option value="Carpeta Compartida">Carpeta Compartida</option>' +
        '<option value="CRM">CRM</option>' +
        '<option value="Falla Audio">Falla Audio</option>' +
        '<option value="Falla Hardware">Falla Hardware</option>' +
        '<option value="Hermes">Hermes</option>' +
        '<option value="Internet">Internet</option>' +
        '<option value="Mail">Mail</option>' +
        '<option value="Usuario Windows">Usuario Windows</option>' +
        '<option value="VPN">VPN</option>' +
        '<option value="XLITE">XLITE</option>';
      break;

    default:
      break;
  }
});
