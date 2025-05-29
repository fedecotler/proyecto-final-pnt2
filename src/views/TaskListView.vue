<template>
  <div class="container mt-4">
    <h2 class="mb-4">Listado de Tareas</h2>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="task in tasks" :key="task.id">
        <TaskCard :task="task" @delete="handleDelete" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskCard from '@/components/TaskCard.vue'

const tasks = ref([
  {
    id: 1,
    title: 'Estudiar para el parcial',
    description: 'Repasar componentes y rutas en Vue',
    status: 'pendiente',
    due_date: '2025-06-05'
  },
  {
    id: 2,
    title: 'Enviar informe',
    description: 'Resumen del TP final',
    status: 'completada',
    due_date: '2025-05-20'
  }
])

const handleDelete = (id) => {
  tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>
