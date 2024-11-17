import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createMetaManager } from 'vue-meta'; // Импортируем vue-meta


const app = createApp(App);
const metaManager = createMetaManager(); // Создаем менеджер мета-информации

app.use(router);
app.use(metaManager); // Используем менеджер

app.mount('#app');
