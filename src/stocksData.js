const token = 'fa3e1a7fb1dfc9ab4871e74c93afb4c2eb9beb40';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

class StockData {

    async getData(tickers) {
        try {
            const response = await fetch(`${corsAnywhere}https://api.tiingo.com/iex/?tickers=${tickers.join(',')}&token=${token}`);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    };

}
export default StockData;