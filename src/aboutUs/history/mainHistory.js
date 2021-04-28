import banner from '../../main/views/menu.js';
import footer from '../../main/views/footer.js'
import history from './history.js'

const appHistory = document.getElementById('history');

appHistory.innerHTML += banner;
appHistory.innerHTML += history;
appHistory.innerHTML += footer;
