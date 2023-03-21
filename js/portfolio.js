function toggleClass(className){
    disablePortfolioClasses();
    var element = document.getElementById("portfolio_"+className);
    element.className = 'enable-div';
    var subline = document.getElementById("subline_"+className);
    subline.className = 'my-4';
    indiceSecaoAtualPortfolio = indicePortfolio();
}

function indicePortfolio(className){
    var indice =  secoesPortfolio.filter((item, index) => { if(className == item) return index; });
    return indice;
}

function disablePortfolioClasses(){
    var portfolioClasses = secoesPortfolio.map(classe => {
        var element = document.getElementById("portfolio_"+classe);
        if(element.className === 'enable-div'){
            element.className = 'disable-div';
            var subline = document.getElementById("subline_"+classe);
            subline.className = 'disable-div';
        }
    });
}


function initMouseListeners(){
    secoesPortfolio.map(classe => {
        var element = document.getElementById("label_"+classe);
        element.addEventListener("mouseover", exibirSubline);
        element.addEventListener("mouseout", ocultarSubline);
    });
}

function exibirSubline(event){
    var item = event.target.id;
    var className = item.split('_')[1];
    var subline = document.getElementById("subline_"+className);
    subline.className = 'my-4';
}

function ocultarSubline(event){
    var item = event.target.id;
    var className = item.split('_')[1];
    if(indicePortfolio(className) != indiceSecaoAtualPortfolio){
        var subline = document.getElementById("subline_"+className);
        subline.className = 'disable-div';
    }
}

const secoesPortfolio = ['jogos','web','acadêmicos','empty'];
let indiceSecaoAtualPortfolio = 0;

toggleClass('empty');
initMouseListeners();