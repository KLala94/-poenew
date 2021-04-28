import banner from '../../main/views/menu.js';
import footer from '../../main/views/footer.js'
import partners from './partners.js'

const appPartners = document.getElementById('partners');

appPartners.innerHTML += banner;
appPartners.innerHTML += partners;
appPartners.innerHTML += footer;
