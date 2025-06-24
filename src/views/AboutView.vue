<template>
  <div class="container mt-4">
    <div class="card shadow p-4 border-0 rounded-4 animate__animated animate__fadeIn">
      <h1 class="mb-4 text-center text-primary animate__animated animate__fadeInDown">
        <i class="bi bi-info-circle me-2"></i><u>Acerca del Proyecto</u>
      </h1>

      <p class="text-justify animate__animated animate__fadeInUp animate__delay-1s">
        Este proyecto es un <strong>Gestor de Tareas</strong> desarrollado como
        parte del
        <strong>Trabajo Práctico Final de Programación en Nuevas Tecnologías 2 y Taller de Programación 2</strong>.
      </p>

      <h3 class="mt-4 animate__animated animate__fadeInUp animate__delay-2s">
        <u><strong>La aplicación permite:</strong></u>
      </h3>

      <ul class="animate__animated animate__fadeInUp animate__delay-2s">
        <li>Crear, editar y eliminar tareas.</li>
        <li>Asignar una categoría a cada tarea.</li>
        <li>Filtrar tareas por estado (pendiente, completada, vencida) y por categoría.</li>
        <li>Visualizar fecha de vencimiento y alertas visuales.</li>
      </ul>

      <h3 class="mt-4 animate__animated animate__fadeInUp animate__delay-3s">
        <u><strong>Tecnologías utilizadas:</strong></u>
      </h3>

      <ul class="animate__animated animate__fadeInUp animate__delay-3s">
        <li><strong>Frontend:</strong> Vue 3 (Vite), Vue Router, Pinia, Bootstrap 5, SweetAlert2, Axios.</li>
        <li><strong>Backend:</strong> Node.js, Express, Sequelize ORM, MySQL.</li>
      </ul>

      <h3 class="mt-4 animate__animated animate__fadeInUp animate__delay-4s">
        <u><strong>Integrantes del equipo:</strong></u>
      </h3>

      <ul class="animate__animated animate__fadeInUp animate__delay-4s">
        <li>
          Gastón Kopplin Alva — 
          <a href="https://github.com/GastiKopp" target="_blank"><i class="bi bi-github"></i> GitHub</a>
        </li>
        <li>
          Federico Cotler — 
          <a href="https://github.com/fedecotler" target="_blank"><i class="bi bi-github"></i> GitHub</a>
        </li>
        <li>
          Francisco Nicolini — 
          <a href="https://github.com/nicolinif" target="_blank"><i class="bi bi-github"></i> GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.text-justify {
  text-align: justify;
}
</style>
