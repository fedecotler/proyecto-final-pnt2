import { defineStore } from 'pinia'
import { getTareas, deleteTarea } from '@/services/taskService.js'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tareas: []
  }),
  actions: {
    async cargarTareas() {
      this.tareas = await getTareas()
    },
    async eliminarTarea(id) {
      await deleteTarea(id)
      this.tareas = this.tareas.filter(t => t.id !== id)
    },
    addTarea(tarea) {
      this.tareas.push(tarea)
    },
    updateTareaEnStore(tareaActualizada) {
      const index = this.tareas.findIndex(t => t.id === tareaActualizada.id)
      if (index !== -1) this.tareas[index] = tareaActualizada
    }
  },
  getters: {
    cantidadTareas: (state) => state.tareas.length
  }
})
