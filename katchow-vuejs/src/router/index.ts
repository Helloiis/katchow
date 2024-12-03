import { createRouter, createWebHistory} from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import LoginSignup from '../components/LoginSignup.vue'; // Importer le composant de connexion/inscription
import Home from '../components/Home.vue'; // Importer la page d'accueil

// Définition des routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LoginSignup',
    component: LoginSignup,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
