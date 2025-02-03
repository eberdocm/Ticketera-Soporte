const selectedUbicacion = document.getElementById("ubicacion");
const inputAnydesk = document.getElementById("anydesk");

// inputAnydesk.disabled = false;
selectedUbicacion.addEventListener("change", () => {
  if (selectedUbicacion.value !== "Home Office") {
    inputAnydesk.disabled = true;
  } else {
    inputAnydesk.disabled = false;
  }
});
