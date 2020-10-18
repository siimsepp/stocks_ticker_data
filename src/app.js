import './css/style.css';
import StocksData from './stocksData';
import UI from './ui';

const data = new StocksData();
const ui = new UI();

const form = document.querySelector('#form');

const tickers = [];



form.addEventListener('submit', e => {
    const ticker = form.ticker.value.trim();
    tickers.push(ticker);
    data.getData(tickers).then(andm => {
        ui.showStockData(andm);
    });

    e.preventDefault();
});

