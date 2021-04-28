// frontpage cards
import cards from './src/frontpage/main-cards.js';
import news from './src/frontpage/main-news.js';

import members from './src/frontpage/main-members.js';
import {mainAsk, simpleText} from './src/news/news.js'
import { photos } from './src/gallery/photos/photos.js';
import videos from './src/gallery/videos/videos.js';
import project from './src/project/project.js';
import contact from './src/contact/contact.js';
import history from './src/aboutUs/history/history.js';
import operate from './src/aboutUs/operate/operate.js';
import partners from './src/aboutUs/partners/partners.js';
import staff from './src/aboutUs/staff/staff.js';
function createPage(url, urlStyle) {
    const eachPage = document.createElement('div');
    const styles = createStyles(urlStyle)
    eachPage.appendChild(styles);
    url.forEach(element => {
        eachPage.innerHTML += element
    });
    return eachPage;
}
function createStyles(url) {
    const styles = document.createElement('link');
    styles.href = url;
    styles.rel = 'stylesheet';
    return styles;
}
// news page ----------------------------------------------------------
// const stylesNews = document.createElement('link');
// stylesNews.href = './src/news/news.css';
// stylesNews.rel = 'stylesheet';

const eachPage = document.createElement('div');
// end projekte -------------------------------------------------------
const app = document.getElementById('app');
let page;
function displayHash() {
    var theHash = window.location.hash;
    if (theHash.length == 0) { theHash = "_index"; }
    switch (theHash) {
        case "_index":
            page = createPage([cards, news, members], './menu.css');
            app.replaceChildren(page);
            
            break;
        case "#news":
            page = createPage([mainAsk(), simpleText()], './src/news/news.css');
            app.replaceChildren( page);
            break;
        case "#img":
            page = createPage([photos()], './src/gallery/photos/photos.css');
            app.replaceChildren(page);
            break;
        case "#videos":
            page = createPage([videos], './src/gallery/videos/videos.css');
            app.replaceChildren(page);
            break;
        case "#projects":
            page = createPage([project], './src/project/project.css');
            app.replaceChildren(page);
        break;
        case "#contact":
            page = createPage([contact], './src/contact/contact.css');
            app.replaceChildren(page);
        break;
        case "#history":
            page = createPage([history], './src/aboutUs/aboutUs.css');
            app.replaceChildren(page);
        break;
        case "#operate":
            page = createPage([operate], './src/aboutUs/aboutUs.css');
            app.replaceChildren(page);
        break;
        case "#partners":
            page = createPage([partners], './src/aboutUs/aboutUs.css');
            app.replaceChildren(page);
        break;
        case "#staff":
            page = createPage([staff], './src/aboutUs/aboutUs.css');
            app.replaceChildren(page);
        break;
        default:
            // app.replaceChildren(cards, news, memberCards);
            break;
    }
	  return true;
	}

	window.addEventListener("hashchange", function() {
	  console.log("hashchange event");
	  displayHash();
	});

	window.addEventListener("DOMContentLoaded", function(ev) {
	  console.log("DOMContentLoaded event");
	  displayHash();
	});