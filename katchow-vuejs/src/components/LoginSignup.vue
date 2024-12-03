<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      isLogin: true,
      loginEmail: '',
      loginPassword: '',
      signupName: '',
      signupEmail: '',
      signupPassword: '',
    };
  },
  methods: {
    submitLogin(): void {
      if (this.loginEmail && this.loginPassword) {
        console.log('Connexion réussie !');
        this.$router.push('/home'); // Redirige vers la page d'accueil
      } else {
        alert('Veuillez remplir les champs !');
      }
    },
    submitSignup(): void {
      console.log('Inscription avec', this.signupName, this.signupEmail, this.signupPassword);
    },
  },
});
</script>
