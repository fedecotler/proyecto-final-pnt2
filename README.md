# 🗂️ Gestor de Tareas - Frontend

Este es el frontend del proyecto final de Programación en Nuevas Tecnologías 2. Se trata de una aplicación web desarrollada con **Vue 3 + Vite**, que permite gestionar tareas con filtros, categorías y validaciones personalizadas.

---

## 🚀 Requisitos

- Node.js
- npm 

---

## ⚙️ Instalación

1. Cloná el repositorio:

git clone https://github.com/fedecotler/proyecto-final-pnt2.git

2. Entrá al directorio del proyecto:

cd proyecto-final-pnt2

3. Instalá las dependencias:

npm install

## ▶️ Uso
Asegurate de tener corriendo el backend (puerto 3000 por defecto).

Iniciá el servidor de desarrollo:

npm run dev

Accedé a la app desde: http://localhost:5173

## 🧩 Funcionalidades principales

-Crear, editar y eliminar tareas.

-Asignar estado y fecha límite a cada tarea.

-Asignar categoría a cada tarea.

-Filtrar tareas por estado o por categoría.

-Ver tareas ordenadas por fecha de vencimiento.

-Gestión de categorías: crear y eliminar.

-Validaciones visuales y funcionales en formularios.

## 👥 Integrantes

-Gastón Kopplin Alva

-Federico Cotler

-Francisco Nicolini

## 📁 Estructura de carpetas
src/
├── components/ → Componentes Vue reutilizables
├── views/ → Vistas principales del router
├── services/ → Axios y servicios externos
├── stores/ → Pinia (estado global)
├── router/ → Configuración de rutas
└── App.vue → Layout principal

## 🔗 Notas

Este frontend está conectado a un backend desarrollado con Node.js, Express y Sequelize.

Las tareas y categorías se almacenan en una base de datos MySQL a través del backend.

👉 Podés encontrar el repositorio del backend en:
https://github.com/GastiKopp/backend-proyecto-final-tp2.git