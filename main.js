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
const styles = document.createElement('link');
styles.href = './menu.css';
styles.rel = 'stylesheet';
// news page ----------------------------------------------------------
const stylesNews = document.createElement('link');
stylesNews.href = './src/news/news.css';
stylesNews.rel = 'stylesheet';

const eachPage = document.createElement('div');
// end projekte -------------------------------------------------------
const app = document.getElementById('app');
function displayHash() {
    var theHash = window.location.hash;
    if (theHash.length == 0) { theHash = "_index"; }
    switch (theHash) {
        case "_index":
            eachPage.innerHTML = "";
            eachPage.innerHTML += cards;
            eachPage.innerHTML += news;
            eachPage.innerHTML += members;
            app.replaceChildren(eachPage);
            
            break;
        case "#news":
            // console.log(newsSite);
            eachPage.innerHTML = "";
            eachPage.innerHTML += mainAsk();
            eachPage.innerHTML += simpleText();
            app.replaceChildren(eachPage);
            break;
        case "#img":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = photos();
            app.replaceChildren(eachPage);
            break;
        case "#videos":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = videos;
            app.replaceChildren(eachPage);
            break;
        case "#projects":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = project;
            app.replaceChildren(eachPage);
        break;
        case "#contact":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = contact;
            app.replaceChildren(eachPage);
        break;
        case "#history":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = history;
            app.replaceChildren(eachPage);
        break;
        case "#operate":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = operate;
            app.replaceChildren(eachPage);
        break;
        case "#partners":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = partners;
            app.replaceChildren(eachPage);
        break;
        case "#staff":
            // eachPage.innerHTML = "";
            eachPage.innerHTML = staff;
            app.replaceChildren(eachPage);
        break;
        default:
            // app.replaceChildren(cards, news, memberCards);
            break;
    }
    console.log("H",theHash);
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