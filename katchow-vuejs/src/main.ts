import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le routeur

const app = createApp(App);

app.use(router); // Utilisation du routeur dans l'application Vue
app.mount('#app');
