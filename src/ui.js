class UI {

    showStockData(data) {
        const ul = document.querySelector('#ul');
        let html = '';
        data.forEach(elem => {
            // console.log(elem);
            const protsMuutusEilsest = ((elem.last - elem.prevClose) / elem.prevClose * 100).toFixed(2);
            html += `<li class="collection-item avatar">
                    <i class="material-icons circle red">play_arrow</i>
                    <span class="title">Aktsia: ${elem.ticker}</span>
                    <p>Viimane hind: ${elem.last} <br>
                        Muutus eilsest sulgemisest: ${protsMuutusEilsest}%
                    </p>
                    <i class="material-icons">delete_forever</i>
                    
                    </li>`;
        });
        ul.innerHTML = html;
    }
}

export default UI;


