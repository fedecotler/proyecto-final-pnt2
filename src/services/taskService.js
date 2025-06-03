import axios from 'axios'

const API_URL = 'http://localhost:3000/api/tareas'

export const getTareas = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

export const createTarea = async (tarea) => {
  const res = await axios.post(API_URL, tarea)
  return res.data
}

export const deleteTarea = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`)
  return res.data
}

export const getTareaPorId = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`)
  return res.data
}

export const updateTarea = async (id, tarea) => {
  const res = await axios.put(`${API_URL}/${id}`, tarea)
  return res.data
}
