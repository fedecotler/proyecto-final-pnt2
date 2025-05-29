<template>
  <div class="container mt-4">
    <h2 class="mb-4">{{ isEdit ? 'Editar Tarea' : 'Nueva Tarea' }}</h2>

    <TaskForm :modelValue="task" :isEdit="isEdit" @submit="handleSubmit" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import TaskForm from '@/components/TaskForm.vue'

const route = useRoute()
const isEdit = route.name === 'task-edit'

const task = reactive({
  title: '',
  description: '',
  status: '',
  due_date: ''
})

const handleSubmit = (data) => {
  console.log('Datos recibidos:', data)
  // Acá irá la lógica para guardar o actualizar en el backend
}
</script>
