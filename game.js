let money = 0;
let bread = 0;
let pao = 0;
let patties = 0;
let creamRoll = 0;
let workers = 0;
let level = 1;

function updateUI(){

    document.getElementById("money").innerText =
        "₹" + money;

    document.getElementById("bread").innerText =
        bread;

    document.getElementById("workers").innerText =
        workers;

    document.getElementById("level").innerText =
        level;

    saveGame();
}

function bakeBread(){
    function makePao(){

    pao++;

    updateUI();
}

function makePatties(){

    patties++;

    updateUI();
}

function makeCreamRoll(){

    creamRoll++;

    updateUI();
}

    bread += level;

    updateUI();
}

function sellBread(){

    if(bread > 0){

        money += bread * 10;

        bread = 0;

        updateUI();
    }
}

function buyWorker(){

    if(money >= 100){

        money -= 100;

        workers++;

        updateUI();
    }
}

function upgradeBakery(){

    if(money >= 500){

        money -= 500;

        level++;

        updateUI();
    }
}

setInterval(() => {

    bread += workers;

    updateUI();

},1000);

function saveGame(){

    localStorage.setItem(
        "bakerySave",
        JSON.stringify({
            money,
            bread,
            workers,
            level
        })
    );
}

function loadGame(){

    let save =
        JSON.parse(
            localStorage.getItem("bakerySave")
        );

    if(save){

        money = save.money;
        bread = save.bread;
        workers = save.workers;
        level = save.level;
    }

    updateUI();
}
function sellPao(){

    money += pao * 15;

    pao = 0;

    updateUI();
}

function sellPatties(){

    money += patties * 25;

    patties = 0;

    updateUI();
}

function sellCreamRoll(){

    money += creamRoll * 40;

    creamRoll = 0;

    updateUI();
}

loadGame();
