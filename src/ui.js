

class UI {

    showStockData(data) {
        const ul = document.querySelector('#ul');
        let html = '';
        data.forEach(elem => {
            html += `<li>${elem.ticker}: ${elem.last}</li>`;
            console.log(elem);
        });
        ul.innerHTML = html;
    }

}

export default UI;


