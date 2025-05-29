<template>
  <div class="container mt-4">
    <h2 class="mb-4">{{ isEdit ? 'Editar Tarea' : 'Nueva Tarea' }}</h2>

    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Título</label>
        <input v-model="task.title" type="text" class="form-control" id="title" required />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Descripción</label>
        <textarea v-model="task.description" class="form-control" id="description" rows="3"></textarea>
      </div>

      <div class="mb-3">
        <label for="status" class="form-label">Estado</label>
        <select v-model="task.status" class="form-select" id="status" required>
          <option disabled value="">Seleccioná un estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
          <option value="vencida">Vencida</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="due_date" class="form-label">Fecha límite</label>
        <input v-model="task.due_date" type="date" class="form-control" id="due_date" />
      </div>

      <button type="submit" class="btn btn-success">{{ isEdit ? 'Actualizar' : 'Guardar' }}</button>
    </form>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

const route = useRoute()
const isEdit = route.name === 'task-edit'

const task = reactive({
  title: '',
  description: '',
  status: '',
  due_date: ''
})

const handleSubmit = () => {
  console.log('Tarea enviada:', task)
  // Acá va la lógica para guardar o actualizar
}
</script>
