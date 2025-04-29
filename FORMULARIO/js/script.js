//agregue razas comunes 
const razas = {
    Perro: ["Labrador", "Bulldog", "Poodle", "Pastor Alemán", "Chihuahua"],
    Gato: ["Persa", "Siamés", "Maine Coon", "Bengalí", "Sphynx"],
    Ave: ["Canario", "Periquito", "Cacatúa", "Loro", "Agapornis"]
  };
  //edad maaax
  const edadMaxima = {
    Perro: 18,
    Gato: 20,
    Ave: 10
  };
  
  // Cambiar razas y edad 
  document.getElementById("especie").addEventListener("change", function() {
    const especieSeleccionada = this.value;
    const razaSelect = document.getElementById("raza");
    const edadInput = document.getElementById("edad");
    const mensajeEdad = document.getElementById("mensajeEdad");
  //chat gpt dice que es para eliminar razas 
    razaSelect.innerHTML = '<option value="">Seleccione una raza</option>';
  
    if (razas[especieSeleccionada]) {
      razas[especieSeleccionada].forEach(function(raza) {
        const option = document.createElement("option");
        option.value = raza;
        option.textContent = raza;
        razaSelect.appendChild(option);
      });
    }
  
    // Cambiar máximo de edad
    if (edadMaxima[especieSeleccionada]) {
      edadInput.max = edadMaxima[especieSeleccionada];
      edadInput.placeholder = `Máx: ${edadMaxima[especieSeleccionada]} años`;
      mensajeEdad.textContent = `Recuerda: Un ${especieSeleccionada.toLowerCase()} vive hasta ${edadMaxima[especieSeleccionada]} años.`;
    } else {
      edadInput.max = 20;
      edadInput.placeholder = "Edad";
      mensajeEdad.textContent = "";
    }
  });
  
  // Registrar formulario
  document.getElementById("formMascota").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombreMascota").value.trim();
    const especie = document.getElementById("especie").value;
    const raza = document.getElementById("raza").value;
    const genero = document.getElementById("genero").value;
    const edad = parseInt(document.getElementById("edad").value);
    const observaciones = document.getElementById("observaciones").value.trim();
  
    const maxEdadPermitida = edadMaxima[especie] || 20;
  
    if (isNaN(edad) || edad < 0 || edad > maxEdadPermitida) {
      alert(`Por favor, ingrese una edad válida entre 0 y ${maxEdadPermitida} años para un ${especie}.`);
      return;
    }
  
    const resultado = `
      <h3>Mascota Registrada:</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Especie:</strong> ${especie}</p>
      <p><strong>Raza:</strong> ${raza}</p>
      <p><strong>Género:</strong> ${genero}</p>
      <p><strong>Edad:</strong> ${edad} años</p>
      <p><strong>Observaciones:</strong> ${observaciones || "Ninguna"}</p>
    `;
  
    document.getElementById("resultado").innerHTML = resultado;
  });
  