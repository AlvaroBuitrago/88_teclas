---
layout: default
title: Memoria de pez - Piano
---

<div class="memoria-container">

  <!-- Título y descripción -->
  <h1>Memoria de pez 🎹</h1>
  <p>Ejercicios de lectura a primera vista para piano. Toca las imágenes para ampliar.</p>

  <!-- Selector de partitura (dropdown) -->
  <div class="selector">
    <label for="partitura-select">Ir a ejercicio:</label>
    <select id="partitura-select" onchange="cargarPartitura(this.value)">
      {% for i in (1..42) %}
        <option value="{{ i }}">Ejercicio {{ i }}</option>
      {% endfor %}
    </select>
  </div>

  <!-- Contenedor de la partitura actual -->
  <div class="partitura-actual">
    <img 
      id="partitura-img" 
      src="img/memoria1.png" 
      alt="Partitura" 
      class="partitura-img"
      onclick="toggleZoom()"
    >
  </div>

  <!-- Botones de navegación -->
  <div class="navegacion">
    <button id="btn-anterior" onclick="cambiarPartitura(-1)">← Anterior</button>
    <span id="contador">1 / 42</span>
    <button id="btn-siguiente" onclick="cambiarPartitura(1)">Siguiente →</button>
  </div>

</div>

<!-- Estilos CSS -->
<style>
  .memoria-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  .partitura-img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    cursor: zoom-in;
    transition: transform 0.3s;
    margin: 20px 0;
  }
  .partitura-img.zoom {
    transform: scale(1.8);
    cursor: zoom-out;
  }
  .navegacion {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  button {
    padding: 8px 16px;
    background: #0366d6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #0550a8;
  }
  .selector {
    margin: 15px 0;
  }
  select {
    padding: 5px;
    border-radius: 4px;
  }
  @media (max-width: 600px) {
    .partitura-img {
      max-width: 100%;
    }
    .navegacion {
      flex-direction: column;
    }
  }
</style>

<!-- JavaScript para la navegación -->
<script>
  let partituraActual = 1;
  const totalPartituras = 42;

  // Cargar partitura seleccionada
  function cargarPartitura(num) {
    partituraActual = parseInt(num);
    document.getElementById('partitura-img').src = `img/memoria${partituraActual}.png`;
    document.getElementById('contador').textContent = `${partituraActual} / ${totalPartituras}`;
    document.getElementById('partitura-select').value = partituraActual;
  }

  // Cambiar partitura (avanzar/retroceder)
  function cambiarPartitura(delta) {
    const nuevaPartitura = partituraActual + delta;
    if (nuevaPartitura >= 1 && nuevaPartitura <= totalPartituras) {
      cargarPartitura(nuevaPartitura);
    }
  }

  // Zoom al tocar la imagen
  function toggleZoom() {
    document.getElementById('partitura-img').classList.toggle('zoom');
  }

  // Inicializar
  document.addEventListener('DOMContentLoaded', () => {
    cargarPartitura(1);
  });
</script>
