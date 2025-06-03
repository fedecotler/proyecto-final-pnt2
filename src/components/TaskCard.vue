<template>
  <div :class="['card', 'h-100', borderClass(task.status)]">
    <div class="card-body">
      <h5 class="card-title">{{ task.title }}</h5>
      <p class="card-text">{{ task.description }}</p>
      <p v-if="task.category" class="mb-2 text-muted">
        <i class="bi bi-tag-fill me-1"></i>
        <strong>Categoría:</strong> {{ task.category.name }}
      </p>

      <p>
        <span
          class="badge d-flex align-items-center gap-1"
          :class="statusClass(task.status)"
        >
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
      <router-link
        :to="`/tasks/edit/${task.id}`"
        class="btn btn-sm btn-outline-primary"
      >
        Editar
      </router-link>
      <button
        @click="$emit('delete', task.id)"
        class="btn btn-sm btn-outline-danger"
      >
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
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-AR");
};

const statusClass = (status) => {
  switch (status) {
    case "pendiente":
      return "bg-warning text-dark";
    case "completada":
      return "bg-success";
    case "vencida":
      return "bg-danger";
    default:
      return "bg-secondary";
  }
};

const iconClass = (status) => {
  switch (status) {
    case "pendiente":
      return "bi bi-hourglass-split";
    case "completada":
      return "bi bi-check-circle-fill";
    case "vencida":
      return "bi bi-exclamation-triangle-fill";
    default:
      return "bi bi-question-circle";
  }
};

const borderClass = (status) => {
  switch (status) {
    case "completada":
      return "border-success";
    case "pendiente":
      return "border-warning";
    case "vencida":
      return "border-danger";
    default:
      return "border-secondary";
  }
};
</script>
