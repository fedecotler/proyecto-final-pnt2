<template>
  <div class="container mt-5 text-center animate__animated animate__fadeIn">
    <h1 class="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
      📋 Administrador de Tareas
    </h1>
    <div class="row mt-5 animate__animated animate__fadeInUp animate__delay-2s">
      <div class="col-md-4">
        <i class="bi bi-check-circle-fill display-4 text-success"></i>
        <h4 class="mt-3">Control total</h4>
        <h5>
          Gestioná tareas con fechas, categorías y estados personalizados.
        </h5>
      </div>
      <div class="col-md-4">
        <i class="bi bi-funnel-fill display-4 text-warning"></i>
        <h4 class="mt-3">Filtrados flexibles</h4>
        <h5>
          Buscá por estado o categoría y encontrá lo que necesitás en segundos.
        </h5>
      </div>
      <div class="col-md-4">
        <i class="bi bi-bar-chart-line-fill display-4 text-info"></i>
        <h4 class="mt-3">Organización eficiente</h4>
        <h5>Mantené tus tareas al día con alertas visuales y vencimientos.</h5>
      </div>
    </div>

    <router-link
      to="/tasks"
      class="btn btn-primary btn-lg mt-4 animate__animated animate__fadeInUp animate__delay-2s"
    >
      Comenzar
    </router-link>
  </div>
</template>
<style scoped>
.container {
  background: linear-gradient(-45deg, #1a73e8, #34a853, #fbbc05, #ea4335);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  padding: 3rem;
  border-radius: 15px;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
