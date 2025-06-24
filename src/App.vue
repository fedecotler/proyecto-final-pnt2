<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="navbar navbar-dark bg-dark px-4">
      <span class="navbar-brand">Gestor de Tareas</span>
      <nav>
        <router-link class="nav-link d-inline px-2 text-white" to="/">Inicio</router-link>
        <router-link class="nav-link d-inline px-2 text-white" to="/tasks">Tareas</router-link>
        <router-link class="nav-link d-inline px-2 text-white" to="/tasks/new">Nueva Tarea</router-link>
        <router-link class="nav-link d-inline px-2 text-white" to="/categorias">Categorías</router-link>
        <router-link class="nav-link d-inline px-2 text-white" to="/about">Acerca</router-link>
      </nav>
    </header>

    <main class="container my-4 flex-grow-1">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
    </main>

    <footer class="bg-dark text-white text-center py-3 mt-auto">
      <div>
        © 2025 - Trabajo Práctico Final PNT2 y TP2 - 🗂️
      </div>
      <small>Hecho por Gastón Kopplin Alva, Federico Cotler y Francisco Nicolini</small>
    </footer>
  </div>
</template>

<style>
.__vue-devtools-overlay {
  display: none !important;
}
</style>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

</style>

