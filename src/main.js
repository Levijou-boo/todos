import "./main.scss"
import App from './App';
import router from './routes';
import Loading from './components/Loading';

const root = document.querySelector('#root');
root.appendChild(new App().el);
document.body.appendChild(new Loading().el);
router();
