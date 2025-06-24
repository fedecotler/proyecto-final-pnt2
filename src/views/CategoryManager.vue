<template>
  <div class="container mt-4">
    <h2 class="mb-4"><u>Gestión de Categorías</u></h2>

    <form @submit.prevent="crearCategoria" class="mb-3 d-flex gap-2">
      <input
        v-model="nuevaCategoria"
        class="form-control"
        placeholder="Nombre de la nueva categoría"
        required
      />
      <button class="btn btn-success">Crear</button>
    </form>

    <ul class="list-group">
      <li
        v-for="cat in categorias"
        :key="cat.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        {{ cat.name }}
        <button @click="eliminarCategoria(cat.id)" class="btn btn-sm btn-danger">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getCategorias } from '@/services/categoryService'
import axios from 'axios'
import Swal from 'sweetalert2'

const categorias = ref([])
const nuevaCategoria = ref('')

const cargarCategorias = async () => {
  categorias.value = await getCategorias()
}

const crearCategoria = async () => {
  try {
    await axios.post('http://localhost:3000/api/categorias', {
      name: nuevaCategoria.value.trim()
    })
    nuevaCategoria.value = ''
    await cargarCategorias()
    Swal.fire('¡Creada!', 'Categoría añadida correctamente.', 'success')
  } catch (error) {
    console.error(error)
    Swal.fire('Error', 'No se pudo crear la categoría.', 'error')
  }
}

const eliminarCategoria = async (id) => {
  const confirm = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'Se eliminará la categoría',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  })

  if (confirm.isConfirmed) {
    try {
      await axios.delete(`http://localhost:3000/api/categorias/${id}`)
      await cargarCategorias()
      Swal.fire('Eliminada', 'Categoría eliminada correctamente.', 'success')
    } catch (error) {
      console.error(error)
      Swal.fire('Error', 'No se pudo eliminar la categoría.', 'error')
    }
  }
}

onMounted(() => {
  cargarCategorias()
})
</script>
