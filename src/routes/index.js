import { createRouter } from '../core/core'
import NotFound from "./NotFound";
import Home from './Home';
import About from './About';

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/about', component: About },
  { path: '#/404', component: NotFound },
]);
