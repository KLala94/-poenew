// frontpage cards
function createAll(url) {
    const app = document.createElement("div");
    app.innerHTML = url;
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

// end projekte -------------------------------------------------------
const app = document.getElementById('app');
function displayHash() {
    var theHash = window.location.hash;
    if (theHash.length == 0) { theHash = "_index"; }
    switch (theHash) {
        case "_index":
            const cards = createAll('./src/frontpage/main-cards.js');
            const news = createAll('./src/frontpage/main-news.js');
            const memberCards = createAll('./src/frontpage/main-members.js');
            // app.appendChild(cards);
            // app.appendChild(news);
            // app.appendChild(memberCards);
            app.replaceChildren(cards, news, memberCards);
            
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