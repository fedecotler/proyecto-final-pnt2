<template>
  <div class="container mt-4">
    <h2 class="mb-4">Listado de Tareas</h2>

    <!-- Placeholder para tareas simuladas -->
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="task in tasks" :key="task.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.description }}</p>
            <span class="badge bg-secondary">{{ task.status }}</span>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <router-link :to="`/tasks/edit/${task.id}`" class="btn btn-sm btn-outline-primary">Editar</router-link>
            <button class="btn btn-sm btn-outline-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tasks = ref([
  {
    id: 1,
    title: 'Estudiar para el parcial',
    description: 'Repasar componentes y rutas en Vue',
    status: 'pendiente'
  },
  {
    id: 2,
    title: 'Enviar informe',
    description: 'Enviar resumen del TP final a la profesora',
    status: 'completada'
  }
])
</script>
