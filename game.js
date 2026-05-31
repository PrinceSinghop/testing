let money = 1000;
let bread = 10;
let pao = 10;
let patties = 10;
let creamRoll = 10;
let workers = 1;
let level = 1;

function updateUI() {

```
document.getElementById("money").innerText = "₹" + money;
document.getElementById("bread").innerText = bread;

document.getElementById("pao").innerText = pao;
document.getElementById("patties").innerText = patties;
document.getElementById("creamRoll").innerText = creamRoll;

document.getElementById("workers").innerText = workers;
document.getElementById("level").innerText = level;

saveGame();
```

}

function bakeBread() {
bread += level;
updateUI();
}

function makePao() {
pao += level;
updateUI();
}

function makePatties() {
patties += level;
updateUI();
}

function makeCreamRoll() {
creamRoll += level;
updateUI();
}

function sellBread() {

```
if (bread > 0) {
    money += bread * 10;
    bread = 0;
    updateUI();
}
```

}

function sellPao() {

```
if (pao > 0) {
    money += pao * 15;
    pao = 0;
    updateUI();
}
```

}

function sellPatties() {

```
if (patties > 0) {
    money += patties * 25;
    patties = 0;
    updateUI();
}
```

}

function sellCreamRoll() {

```
if (creamRoll > 0) {
    money += creamRoll * 40;
    creamRoll = 0;
    updateUI();
}
```

}

function buyWorker() {

```
if (money >= 100) {
    money -= 100;
    workers++;
    updateUI();
}
```

}

function upgradeBakery() {

```
if (money >= 500) {
    money -= 500;
    level++;
    updateUI();
}
```

}

setInterval(() => {

```
bread += workers;
pao += Math.floor(workers / 2);
patties += Math.floor(workers / 3);
creamRoll += Math.floor(workers / 5);

updateUI();
```

}, 1000);


function saveGame() {

```
localStorage.setItem(
    "bakerySave",
    JSON.stringify({
        money,
        bread,
        pao,
        patties,
        creamRoll,
        workers,
        level
    })
);
```

}

function loadGame() {

```
let save = JSON.parse(
    localStorage.getItem("bakerySave")
);

if (save) {

    money = save.money || 0;
    bread = save.bread || 0;
    pao = save.pao || 0;
    patties = save.patties || 0;
    creamRoll = save.creamRoll || 0;
    workers = save.workers || 0;
    level = save.level || 1;
}

updateUI();
```

}

loadGame();
