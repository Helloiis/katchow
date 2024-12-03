<template>
  <div class="home-container">
    <h1>Bienvenue sur la page d'accueil !</h1>
    <p>Vous êtes connecté.</p>
    <button @click="logout">Déconnexion</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  methods: {
    logout(): void {
      this.$router.push('/'); // Redirige vers la page de connexion/inscription
    },
  },
});
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
  color: #333;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>
