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
    const ticker = tickerInput.value.trim().toUpperCase();
    if (ticker) tickers.push(ticker); // Tühje stringe mitte lisada
    const tickersUnique = [...new Set(tickers)]; // Kui ticker on olemas, siis ära teda uuesti lisa ehk viska duplikaadid array'st välja
    localStorage.setItem('tickersList', JSON.stringify(tickersUnique));
    loadData(tickers);
    e.preventDefault();
});

// Kustuta aktsia, mille prügikastil klikiti
ul.addEventListener('click', e => {
    if (e.target.textContent === 'delete_forever') {
        e.target.parentElement.parentElement.remove();
        const eemaldatavAktsia = e.target.parentElement.parentElement.getAttribute('aktsia-symbol'); // Annab aktsia tickeri, mille prügikastil klikiti
        tickers = tickers.filter(aktsia => aktsia !== eemaldatavAktsia); // Jäta alles vaid mitteeemaldatavad aktsiad
        localStorage.setItem('tickersList', JSON.stringify(tickers));
    } 
    e.preventDefault();
});

