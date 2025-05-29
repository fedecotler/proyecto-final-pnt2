<template>
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title">{{ task.title }}</h5>
        <p class="card-text">{{ task.description }}</p>
        <p>
          <span class="badge"
                :class="statusClass(task.status)">
            {{ task.status }}
          </span>
        </p>
        <small v-if="task.due_date" class="text-muted">Vence: {{ task.due_date }}</small>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <router-link
          :to="`/tasks/edit/${task.id}`"
          class="btn btn-sm btn-outline-primary"
        >
          Editar
        </router-link>
        <button @click="$emit('delete', task.id)" class="btn btn-sm btn-outline-danger">
          Eliminar
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    task: {
      type: Object,
      required: true
    }
  })
  
  const statusClass = (status) => {
    switch (status) {
      case 'pendiente': return 'bg-warning text-dark'
      case 'completada': return 'bg-success'
      case 'vencida': return 'bg-danger'
      default: return 'bg-secondary'
    }
  }
  </script>
  