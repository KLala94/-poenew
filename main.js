import menu from './menu.css';
import cards from './src/frontpage/cards.html';
import memberCards from './src/frontpage/memberCards.html';
import news from './src/frontpage/news.html'
const app = document.getElementById('app');

app.appendChild(cards);
app.appendChild(news);
app.appendChild(memberCards);
// app.innerHTML += cards;
// app.innerHTML += news;
// app.innerHTML += memberCards;
