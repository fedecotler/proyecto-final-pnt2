<template>
  <div :class="['card', 'h-100', borderClass(task.status), backgroundClass(task.status), 'task-card']">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <p class="card-text">{{ task.description }}</p>
      <p v-if="task.category" class="mb-2 text-muted">
        <i class="bi bi-tag-fill me-1"></i>
        <strong>Categoría:</strong> {{ task.category.name }}
      </p>

      <p>
        <span class="badge d-flex align-items-center gap-1" :class="statusClass(task.status)">
          <i :class="iconClass(task.status)"></i>
          {{ task.status }}
        </span>
      </p>

      <small v-if="task.due_date" class="text-muted">
        <i class="bi bi-calendar-event me-1"></i>
        Vence: {{ formatDate(task.due_date) }}
      </small>
    </div>

    <div class="card-footer d-flex justify-content-between">
      <router-link :to="`/tasks/edit/${task.id}`" class="btn btn-sm btn-outline-primary">
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
    required: true,
  },
});

const formatDate = (dateStr) => {
  if (!dateStr) return 'Fecha no válida';
  const date = new Date(dateStr);
  if (isNaN(date)) return 'Fecha no válida';
  return date.toLocaleDateString('es-AR', { timeZone: 'UTC' });
};

const statusClass = (status) => {
  switch (status) {
    case "pendiente": return "bg-warning text-dark";
    case "completada": return "bg-success";
    case "vencida": return "bg-danger";
    default: return "bg-secondary";
  }
};

const iconClass = (status) => {
  switch (status) {
    case "pendiente": return "bi bi-hourglass-split";
    case "completada": return "bi bi-check-circle-fill";
    case "vencida": return "bi bi-exclamation-triangle-fill";
    default: return "bi bi-question-circle";
  }
};

const borderClass = (status) => {
  switch (status) {
    case "completada": return "border-success";
    case "pendiente": return "border-warning";
    case "vencida": return "border-danger";
    default: return "border-secondary";
  }
};

const backgroundClass = (status) => {
  switch (status) {
    case "completada": return "bg-success bg-opacity-25";
    case "pendiente": return "bg-warning bg-opacity-25";
    case "vencida": return "bg-danger bg-opacity-25";
    default: return "";
  }
};
</script>

<style scoped>
.task-card {
  transition: all 0.3s ease;
  cursor: pointer;
}
.task-card:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
</style>
