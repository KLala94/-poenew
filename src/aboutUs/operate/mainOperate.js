import banner from '../../main/views/menu.js';
import footer from '../../main/views/footer.js'
import operate from './operate.js'

const appOperate = document.getElementById('operate');

appOperate.innerHTML += banner;
appOperate.innerHTML += operate;
appOperate.innerHTML += footer;

