<template>
  <div class="container mt-4">
    <h2 class="mb-2">Listado de Tareas</h2>

    <p class="mb-3">
      Mostrando {{ tareasFiltradas.length }} tarea{{ tareasFiltradas.length !== 1 ? 's' : '' }}
      <span v-if="filtro !== 'todas'">({{ filtro }})</span>
    </p>

    <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
      <div class="btn-group">
        <button
          v-for="estado in estados"
          :key="estado.valor"
          @click="setFiltro(estado.valor)"
          :class="['btn', filtro === estado.valor ? 'btn-dark' : 'btn-outline-dark']"
        >
          {{ estado.texto }}
        </button>
      </div>

      <div class="ms-auto">
        <select class="form-select" v-model="filtroCategoriaId">
          <option value="">Todas las categorías</option>
          <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-2">Cargando tareas...</p>
    </div>

    <div v-else>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col" v-for="task in tareasFiltradas" :key="task.id">
          <TaskCard :task="task" @delete="handleDelete" />
        </div>
      </div>

      <div v-if="tareasFiltradas.length === 0" class="alert alert-info text-center w-100 mt-4">
        No hay tareas que coincidan con los filtros seleccionados.
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import Swal from 'sweetalert2'
import TaskCard from '@/components/TaskCard.vue'
import { useTaskStore } from '@/stores/taskStore'
import { getCategorias } from '@/services/categoryService'

const taskStore = useTaskStore()
const tareas = computed(() => taskStore.tareas)

const filtro = ref('todas')
const filtroCategoriaId = ref('')
const categorias = ref([])
const loading = ref(true)

const estados = [
  { texto: 'Todas', valor: 'todas' },
  { texto: 'Pendientes', valor: 'pendiente' },
  { texto: 'Completadas', valor: 'completada' },
  { texto: 'Vencidas', valor: 'vencida' }
]

const setFiltro = (estado) => {
  filtro.value = estado
}

const tareasFiltradas = computed(() => {
  let resultado = tareas.value.filter(t => {
    const coincideEstado = filtro.value === 'todas' || t.status === filtro.value
    const coincideCategoria = !filtroCategoriaId.value || t.categoryId == filtroCategoriaId.value
    return coincideEstado && coincideCategoria
  })

  return resultado.slice().sort((a, b) => {
    if (!a.due_date) return 1
    if (!b.due_date) return -1
    return new Date(a.due_date) - new Date(b.due_date)
  })
})

const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  })

  if (result.isConfirmed) {
    try {
      await taskStore.eliminarTarea(id)
      await taskStore.cargarTareas()
      Swal.fire('Eliminada', 'La tarea fue eliminada correctamente', 'success')
    } catch (error) {
      console.error('Error al eliminar tarea:', error)
      Swal.fire('Error', 'No se pudo eliminar la tarea', 'error')
    }
  }
}

onMounted(async () => {
  loading.value = true
  await taskStore.cargarTareas()
  categorias.value = await getCategorias()
  loading.value = false
})
</script>
