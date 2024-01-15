import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (htmlElement) => {
  const app = createApp(Dashboard);
  app.mount(htmlElement);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
