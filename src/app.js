import './css/style.css';
import StocksData from './stocksData';
import UI from './ui';

const data = new StocksData();
const ui = new UI();

const tickerInput = document.querySelector('#ticker');
const submitNupp = document.querySelector('#lisa-ticker-btn');
const ul = document.querySelector('#ul');


// Tõmba andmed listis olevate tickerite kohta ja kuva need DOMis.
const loadData = tickers => {
    data.getData(tickers).then(andm => {
        ui.showStockData(andm);
    });
}

// Kui tickersList on localStorage'is olemas, siis lae list sealt. Kui pole, siis on list tühi.
let tickers = localStorage.getItem('tickersList') ? JSON.parse(localStorage.getItem("tickersList")) : [];
loadData(tickers);

// Kui lisatakse uus ticker, siis lisa ta listi, salvesta LSi ja lae uuesti andmed.
submitNupp.addEventListener('click', e => {
    const ticker = tickerInput.value.trim();
    tickers.push(ticker);
    const tickersUnique = [...new Set(tickers)];
    localStorage.setItem('tickersList', JSON.stringify(tickersUnique));
    loadData(tickers);
    e.preventDefault();
});

ul.addEventListener('click', e => {

});


