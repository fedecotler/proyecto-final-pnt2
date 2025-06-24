<template>
  <div class="container mt-4">
    <h2 class="mb-4"><u>{{ isEdit ? "Editar Tarea" : "Nueva Tarea" }}</u></h2>

    <TaskForm
      v-if="!isEdit || task.title !== ''"
      :modelValue="task"
      :isEdit="isEdit"
      @submit="handleSubmit"
    />

    <router-link to="/tasks" class="btn btn-secondary mt-3">
      ← Volver al listado
    </router-link>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import TaskForm from "@/components/TaskForm.vue";
import { createTarea, getTareaPorId, updateTarea } from "@/services/taskService.js";
import { useTaskStore } from '@/stores/taskStore'
import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter();
const taskStore = useTaskStore()
const id = route.params.id;
const isEdit = route.name === "task-edit";

const task = reactive({
  title: "",
  description: "",
  completed: false,
  status: "",
  due_date: "",
  categoryId: ""
});

onMounted(async () => {
  if (isEdit && id) {
    try {
      const tareaBackend = await getTareaPorId(id)
      Object.assign(task, {
        ...tareaBackend,
        status: tareaBackend.completed ? 'completada' : 'pendiente',
        categoryId: tareaBackend.categoryId || ""
      })
    } catch (error) {
      console.error('Error al obtener tarea:', error)
      Swal.fire('Error', 'No se pudo cargar la tarea para editar', 'error')
    }
  }
});

const handleSubmit = async (data) => {
  try {
    if (!isEdit) {
      const nueva = await createTarea(data)
      taskStore.addTarea(nueva)
      Swal.fire('¡Éxito!', 'Tarea creada correctamente', 'success')
    } else {
      const actualizada = await updateTarea(id, data)
      taskStore.updateTareaEnStore(actualizada)
      Swal.fire('Actualizado', 'Tarea actualizada con éxito', 'success')
    }
    router.push('/tasks')
  } catch (error) {
    console.error('Error al guardar la tarea:', error)
    Swal.fire('Error', 'No se pudo guardar la tarea', 'error')
  }
}
</script>
