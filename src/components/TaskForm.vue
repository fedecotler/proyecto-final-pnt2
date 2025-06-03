<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="title" class="form-label">Título</label>
      <input
        v-model="formData.title"
        type="text"
        class="form-control"
        id="title"
        :class="{ 'is-invalid': errors.title }"
        required
      />
      <div v-if="errors.title" class="invalid-feedback">{{ errors.title }}</div>
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Descripción</label>
      <textarea
        v-model="formData.description"
        class="form-control"
        id="description"
        rows="3"
        :class="{ 'is-invalid': errors.description }"
      ></textarea>
      <div v-if="errors.description" class="invalid-feedback">{{ errors.description }}</div>
    </div>

    <div class="mb-3">
      <label for="status" class="form-label">Estado</label>
      <select
        v-model="formData.status"
        class="form-select"
        id="status"
        required
        :class="{ 'is-invalid': errors.status }"
      >
        <option disabled value="">Seleccioná un estado</option>
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
        <option value="vencida">Vencida</option>
      </select>
      <div v-if="errors.status" class="invalid-feedback">{{ errors.status }}</div>
    </div>

    <div class="mb-3">
      <label for="due_date" class="form-label">Fecha límite</label>
      <input
        v-model="formData.due_date"
        :min="hoy"
        type="date"
        class="form-control"
        id="due_date"
        :class="{ 'is-invalid': errors.due_date }"
      />
      <div v-if="errors.due_date" class="invalid-feedback">{{ errors.due_date }}</div>
    </div>

    <div class="mb-3">
      <label for="categoryId" class="form-label">Categoría</label>
      <select
        v-model="formData.categoryId"
        class="form-select"
        id="categoryId"
        :class="{ 'is-invalid': errors.categoryId }"
      >
        <option disabled value="">Seleccioná una categoría</option>
        <option v-for="cat in categorias" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
      <div v-if="errors.categoryId" class="invalid-feedback">{{ errors.categoryId }}</div>
    </div>

    <button type="submit" class="btn btn-success">
      {{ isEdit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>

<script setup>
import { reactive, computed, watch, onMounted } from 'vue'
import { getCategorias } from '@/services/categoryService.js'

const props = defineProps({
  modelValue: Object,
  isEdit: Boolean
})

const emit = defineEmits(['submit'])

const formData = reactive({ ...props.modelValue })

watch(() => props.modelValue, (newValue) => {
  Object.assign(formData, newValue)
})

const hoy = computed(() => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date.toISOString().split('T')[0]
})

const categorias = reactive([])

onMounted(async () => {
  const data = await getCategorias()
  categorias.splice(0, categorias.length, ...data)
})

const errors = reactive({
  title: '',
  description: '',
  status: '',
  due_date: '',
  categoryId: ''
})

const validar = () => {
  let valido = true

  if (!formData.title || !formData.title.trim()) {
    errors.title = 'El título es obligatorio.'
    valido = false
  } else {
    errors.title = ''
  }

  if (!formData.description || !formData.description.trim()) {
    errors.description = 'La descripción es obligatoria.'
    valido = false
  } else {
    errors.description = ''
  }

  if (!formData.status) {
    errors.status = 'Seleccioná un estado.'
    valido = false
  } else {
    errors.status = ''
  }

  if (!formData.due_date) {
    errors.due_date = 'La fecha es obligatoria.'
    valido = false
  } else {
    const hoyDate = new Date(hoy.value)
    const dueDate = new Date(formData.due_date)
    if (dueDate < hoyDate) {
      errors.due_date = 'La fecha debe ser igual o posterior a hoy.'
      valido = false
    } else {
      errors.due_date = ''
    }
  }

  if (!formData.categoryId) {
    errors.categoryId = 'Seleccioná una categoría.'
    valido = false
  } else {
    errors.categoryId = ''
  }

  return valido
}

const handleSubmit = () => {
  if (!validar()) return

  const completed = formData.status === 'completada'
  emit('submit', { ...formData, completed })
}
</script>
