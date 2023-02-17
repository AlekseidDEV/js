// задание 1
let getAllServicePrices 
let screenPrive = 20000;
let rollBack = 2900;
let screens = "простые, сложные, интерактивныe";

console.log(screens.split(" , "));


let allServicePrices = function(serv1, serv2) {
    return serv1 + serv2 
}

getAllServicePrices = allServicePrices(4500, 2200)

console.log(getAllServicePrices);



// задание 2

function getFullPrice () {
    function step(str) {
        console.log(str);
    }

    step(getAllServicePrices + screenPrive)
}

getFullPrice()

// задание 3

let titleText = 'MuThErFucKeR'
function getTitle() {
    return titleText[0].toUpperCase() + titleText.slice(1 , 12).toLocaleLowerCase()
}

console.log(getTitle());

// задание 4

function getServicePercentPrices () {
    function step(str) {
        console.log(str);
    }

    step(getAllServicePrices - rollBack)
}

getServicePercentPrices()


// задание 5
console.log(screens.split(' '));



















