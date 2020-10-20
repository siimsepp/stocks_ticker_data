class UI {

    showStockData(data) {
        const ul = document.querySelector('#ul');
        let html = '';
        data.forEach(elem => {
            const protsMuutusEilsest = ((elem.last - elem.prevClose) / elem.prevClose * 100).toFixed(2);
            html += `<li class="collection-item avatar" aktsia-symbol="${elem.ticker}">
                    <i class="material-icons medium green-text">monetization_on</i>
                    <span class="title">Aktsia: <b><span style="color:blue">${elem.ticker}</span></b></span>
                    <p>Viimane hind: ${elem.last} <br>
                        Muutus eilsest sulgemisest: <b><span style="color:${protsMuutusEilsest > 0 ? 'green' : 'red'}">${protsMuutusEilsest}%</span></b>
                    </p>
                    
                    <a href="#!" class="secondary-content"><i class="medium material-icons orange-text">delete_forever</i></a>
                    
                    </li>`;
        });
        ul.innerHTML = html;
    }
}


export default UI;


