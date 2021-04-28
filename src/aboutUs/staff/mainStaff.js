import banner from '../../main/views/menu.js';
import footer from '../../main/views/footer.js'
import staff from './staff.js'

const appStaff = document.getElementById('staff');

appStaff.innerHTML += banner;
appStaff.innerHTML += staff;
appStaff.innerHTML += footer;
