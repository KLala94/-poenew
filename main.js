// frontpage cards
import cards from './src/frontpage/main-cards.js';
import news from './src/frontpage/main-news.js';
import members from './src/frontpage/main-members.js';
function createAll(url) {
    const app = document.createElement("div");
    // import  * AS url from 'url';
    app.innerHTML += url;
}
const styles = document.createElement('link');
styles.href = './menu.css';
styles.rel = 'stylesheet';
// news page ----------------------------------------------------------
import {mainAsk, simpleText} from './src/news/news.js'
const stylesNews = document.createElement('link');
stylesNews.href = './src/news/news.css';
stylesNews.rel = 'stylesheet';
// const appNews = document.createElement("div");
// appNews.innerHTML += mainAsk();
// appNews.innerHTML += simpleText();
// appNews.appendChild(stylesNews);
// end news page ------------------------------------------------------
// projekte page ------------------------------------------------------
// const projekte = document.createElement('object');
//     projekte.data = './src/projekte/projekte.html';
//     projekte.rel = 'text/html';
//     projekte.style = 'width: 100%; height: 100vh;';
//     projekte.className ='projekte';
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
            // app.innerHTML = cardsPage + newsPage + memberCardsPage
            // app.appendChild(cards);
            // app.appendChild(news);
            // app.appendChild(memberCards);
            app.replaceChildren(eachPage);
            
            break;
        case "#news":
            // console.log(newsSite);
            app.replaceChildren(appNews);
            break;
        case "#projekte":
            app.replaceChildren(projekte);
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