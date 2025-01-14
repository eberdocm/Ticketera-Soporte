const selectedUbicacion = document.getElementById("ubicacion");
const inputAnydesk = document.getElementById("anydesk");
const inputPuesto = document.getElementById("puesto");

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
