import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons'; // Import biểu tượng Folder

library.add(faFolder); // Thêm biểu tượng Folder vào thư viện

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon); // Đăng ký component FontAwesomeIcon
app.mount('#app');
