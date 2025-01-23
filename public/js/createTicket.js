window.addEventListener("load", function () {
  let form = document.querySelector(".form");
  let box = document.querySelector(".box");
  let boton = document.querySelector(".enviar");

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 10 numeros.
    documento: /^\d{8}$/, // 8 numeros.
    anydesk: /^\d{9,10}$/, // 8 numeros.
    box: /^\d{4}$/, // 4 numeros.
    usuario: /^.{4,7}$/, // 7 caracteres
  };

  form.addEventListener("submit", function (event) {
    // event.preventDefault();
    let errores = [];

    if (!expresiones.nombre.test(form.nombre.value)) {
      form.nombre.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.nombre.classList.remove("invalid", "is-invalid");
      flag = 0;
    }

    if (!expresiones.nombre.test(form.apellido.value)) {
      form.apellido.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.apellido.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.documento.test(form.documento.value)) {
      form.documento.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.documento.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.telefono.test(form.telefono.value)) {
      form.telefono.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.telefono.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.usuario.test(form.usuario.value)) {
      form.usuario.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.usuario.classList.remove("invalid", "is-invalid");
    }

    if (form.campana.value === "0") {
      form.campana.classList.add("invalid");
      errores.push(1);
    } else {
      form.campana.classList.remove("invalid");
    }

    if (form.turno.value === "0") {
      form.turno.classList.add("invalid");
      errores.push(1);
    } else {
      form.turno.classList.remove("invalid");
    }

    if (!expresiones.nombre.test(form.superior.value)) {
      form.superior.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.superior.classList.remove("invalid", "is-invalid");
    }

    if (!expresiones.correo.test(form.email.value)) {
      form.email.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.email.classList.remove("invalid", "is-invalid");
    }

    if (form.motivo.value === "0") {
      form.motivo.classList.add("invalid");
      errores.push(1);
    } else {
      form.motivo.classList.remove("invalid");
    }

    if (form.ubicacion.value === "0") {
      form.ubicacion.classList.add("invalid");
      errores.push(1);
    } else {
      form.ubicacion.classList.remove("invalid");
    }

    if (form.ubicacion.value === "Home Office") {
      if (!expresiones.anydesk.test(form.anydesk.value)) {
        form.anydesk.classList.add("invalid", "is-invalid");
        form.puesto.classList.remove("invalid", "is-invalid");
        box.classList.remove("invalid");

        errores.push(1);
      } else {
        form.anydesk.classList.remove("invalid", "is-invalid");
      }
    } else if (form.ubicacion.value !== "0") {
      if (!expresiones.box.test(form.puesto.value)) {
        form.puesto.classList.add("invalid", "is-invalid");
        box.classList.add("invalid");
        form.anydesk.classList.remove("invalid", "is-invalid");

        errores.push(1);
      } else {
        form.puesto.classList.remove("invalid", "is-invalid");
        box.classList.remove("invalid");
      }
    }

    if (form.comentario.value === "") {
      form.comentario.classList.add("invalid", "is-invalid");
      errores.push(1);
    } else {
      form.comentario.classList.remove("invalid", "is-invalid");
    }

    if (errores.length > 0) {
      event.preventDefault();
    } else {
      boton.classList.add("success")
      boton.disabled;
      boton.innerHTML =
        '<i class="fa fa-spinner fa-spin cargando"></i> Cargando...';
    }
  });

  // let form = document.querySelector(".form");
  // let erroresHtml = document.querySelector(".errores");

  // form.addEventListener("submit", function (event) {
  //   let errores = [];

  //   if (form.name.value == "") {
  //     errores.push("El nombre no puede estar vacio");
  //     form.name.classList.remove("is-valid");
  //     form.name.classList.add("is-invalid");
  //   } else if (form.name.value.length < 5) {
  //     errores.push("El nombre debe tener al menos 5 caracteres");
  //     form.name.classList.remove("is-valid");
  //     form.name.classList.add("is-invalid");
  //   } else {
  //     form.name.classList.remove("is-invalid");
  //     form.name.classList.add("is-valid");
  //   }

  //   if (form.description.value.length < 20) {
  //     errores.push("La descripcion debe tener al menos 20 caracteres");
  //     form.description.classList.remove("is-valid");
  //     form.description.classList.add("is-invalid");
  //   } else {
  //     form.description.classList.remove("is-invalid");
  //     form.description.classList.add("is-valid");
  //   }

  //   if (form.categories_id.value == "") {
  //     errores.push("Debes que elegir una categoría");
  //     form.categories_id.classList.remove("is-valid");
  //     form.categories_id.classList.add("is-invalid");
  //   } else {
  //     form.categories_id.classList.remove("is-invalid");
  //     form.categories_id.classList.add("is-valid");
  //   }

  //   if (form.pets_id.value == "") {
  //     errores.push("Debes que elegir una mascota");
  //     form.pets_id.classList.remove("is-valid");
  //     form.pets_id.classList.add("is-invalid");
  //   } else {
  //     form.pets_id.classList.remove("is-invalid");
  //     form.pets_id.classList.add("is-valid");
  //   }

  //   if (form.color_id.value == "") {
  //     errores.push("Debes que elegir un color");
  //     form.color_id.classList.remove("is-valid");
  //     form.color_id.classList.add("is-invalid");
  //   } else {
  //     form.color_id.classList.remove("is-invalid");
  //     form.color_id.classList.add("is-valid");
  //   }

  //   if (form.weights_id.value == "") {
  //     errores.push("Debes que elegir el peso");
  //     form.weights_id.classList.remove("is-valid");
  //     form.weights_id.classList.add("is-invalid");
  //   } else {
  //     form.weights_id.classList.remove("is-invalid");
  //     form.weights_id.classList.add("is-valid");
  //   }

  //   if (form.sizes_id.value == "") {
  //     errores.push("Debes que elegir el tamaño");
  //     form.sizes_id.classList.remove("is-valid");
  //     form.sizes_id.classList.add("is-invalid");
  //   } else {
  //     form.sizes_id.classList.remove("is-invalid");
  //     form.sizes_id.classList.add("is-valid");
  //   }

  //   if (form.price.value == "") {
  //     errores.push("Debes ingresar el precio");
  //     form.price.classList.remove("is-valid");
  //     form.price.classList.add("is-invalid");
  //   } else if (isNaN(form.price.value) || parseFloat(form.price.value) < 0) {
  //     errores.push("El precio debe ser un número mayor o igual a 0");
  //     form.price.classList.remove("is-valid");
  //     form.price.classList.add("is-invalid");
  //   } else {
  //     form.price.classList.remove("is-invalid");
  //     form.price.classList.add("is-valid");
  //   }

  //   if (isNaN(form.discount.value) || parseFloat(form.discount.value) < 0 || parseFloat(form.discount.value) > 100) {
  //     errores.push("El descuento debe ser un número entre 0 y 100");
  //     form.discount.classList.remove("is-valid");
  //     form.discount.classList.add("is-invalid");
  //   } else {
  //     form.discount.classList.remove("is-invalid");
  //     form.discount.classList.add("is-valid");
  //   }

  //   let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  //   if (!allowedExtensions.exec(form.img.value)) {
  //     errores.push(
  //       "Tienes que subir una imagen en formato JPG, JPEG, PNG o GIF"
  //     );
  //     form.img.classList.remove("is-valid");
  //     form.img.classList.add("is-invalid");
  //   } else {
  //     form.img.classList.remove("is-invalid");
  //     form.img.classList.add("is-valid");
  //   }

  //   erroresHtml.innerHTML = "";
  //   if (errores.length > 0) {
  //     event.preventDefault();
  //     errores.forEach((error) => {
  //       erroresHtml.innerHTML += "<li>" + error + "</li>";
  //     });
  //   }
  // });
});
