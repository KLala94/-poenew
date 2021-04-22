// frontpage cards
const cards = document.createElement('object');
    cards.data = './src/frontpage/cards.html';
    cards.rel = 'text/html';
    cards.style = 'width: 100%;';
    cards.className ='cards';
const memberCards = document.createElement('object');
    memberCards.data = ('./src/frontpage/memberCards.html');
    memberCards.rel = 'text/html';
    memberCards.style = 'width: 100%;';
    memberCards.className ='memberCards';
const news = document.createElement('object');
    news.data = ('./src/frontpage/news.html');
    news.rel = 'text/html';
    news.style = 'width: 100%;';
    news.className ='news';

const styles = document.createElement('link');
styles.href = './menu.css';
styles.rel = 'stylesheet';
// news page ----------------------------------------------------------
import {mainAsk, simpleText} from './src/news/news.js'
const stylesNews = document.createElement('link');
stylesNews.href = './src/news/news.css';
stylesNews.rel = 'stylesheet';
const appNews = document.createElement("div");
appNews.innerHTML += mainAsk();
appNews.innerHTML += simpleText();
appNews.appendChild(stylesNews);
// end news page ------------------------------------------------------
const app = document.getElementById('app');
function displayHash() {
    var theHash = window.location.hash;
    if (theHash.length == 0) { theHash = "_index"; }
    switch (theHash) {
        case "_index":
            // app.appendChild(cards);
            // app.appendChild(news);
            // app.appendChild(memberCards);
            app.replaceChildren(cards, news, memberCards);
            
            break;
        case "#news":
            // console.log(newsSite);
            app.replaceChildren(appNews);
            break;
        case "#img":
            app.replaceChildren();
            break;
        case "#videos":
            app.replaceChildren();
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