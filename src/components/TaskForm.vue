<template>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Título</label>
        <input v-model="formData.title" type="text" class="form-control" id="title" required />
      </div>
  
      <div class="mb-3">
        <label for="description" class="form-label">Descripción</label>
        <textarea v-model="formData.description" class="form-control" id="description" rows="3"></textarea>
      </div>
  
      <div class="mb-3">
        <label for="status" class="form-label">Estado</label>
        <select v-model="formData.status" class="form-select" id="status" required>
          <option disabled value="">Seleccioná un estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
          <option value="vencida">Vencida</option>
        </select>
      </div>
  
      <div class="mb-3">
        <label for="due_date" class="form-label">Fecha límite</label>
        <input v-model="formData.due_date" type="date" class="form-control" id="due_date" />
      </div>
  
      <button type="submit" class="btn btn-success">
        {{ isEdit ? 'Actualizar' : 'Guardar' }}
      </button>
    </form>
  </template>
  
  <script setup>
  import { reactive, watch, toRefs } from 'vue'
  import { useRoute } from 'vue-router'
  
  const props = defineProps({
    modelValue: Object,
    isEdit: Boolean
  })
  
  const emit = defineEmits(['submit'])
  
  const formData = reactive({ ...props.modelValue })
  
  watch(() => props.modelValue, (newValue) => {
    Object.assign(formData, newValue)
  })
  
  const handleSubmit = () => {
    emit('submit', { ...formData })
  }
  </script>
  