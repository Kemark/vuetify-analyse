/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp, defineCustomElement } from 'vue';
import Component from './components/Components.vue';


// create a custom component
const myApp = defineCustomElement(Component);
customElements.define('my-app', myApp);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
