let money = 0;
let bread = 0;
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

loadGame();
