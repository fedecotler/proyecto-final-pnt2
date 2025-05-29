<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/tasks">Tareas</router-link> |
      <router-link to="/tasks/new">Nueva</router-link> |
      <router-link to="/about">Acerca</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>
