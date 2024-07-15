import { createApp } from 'vue';
import App from './components/app.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faPlusSquare, faTrash);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

createApp({
  components: {
    App
  }
}).mount('#app');
