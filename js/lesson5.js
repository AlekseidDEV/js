'use strict'

let title 
let screens 
let adaptive 
let screenPrice 
let rollback = 2900;
let fullPrice
let service1 
let service2
let allServicePrices
let servicePercentPrices
let SumOff



const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
     title = prompt ('как называется твой проект ?');
     screens = prompt ('какие типы экранов нужно разработать?');
     adaptive = confirm('адаптив нужен?');
     screenPrice = prompt("сколько будет стоить данная работа?")

     while(!isNumber(screenPrice)) {
        screenPrice = prompt("сколько будет стоить данная работа?")
     }
}

let getAllServicePrices = function () {
    let Sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('какой дополнительный тип услуги нужен?')
        } else if(i === 1) {
            service2 = prompt('какой дополнительный тип услуги нужен?')
        }

        Sum += +prompt('сколько это будет стоить?')
    }
    return Sum
}

function getFullPrice () {
    return +screenPrice + allServicePrices
}

function getServicePercentPrices() {
    return fullPrice - rollback;
}

const getTitle = function() {
    return title[0].toUpperCase() + title.substring(" ").toLocaleLowerCase()
}

function getRollMessege() {
        
switch (true) {
    case servicePercentPrices < 0:
         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';

    case servicePercentPrices > 0 && servicePercentPrices < 10000:
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка не предусмотрена';
            
    case servicePercentPrices > 10000 && servicePercentPrices < 15000:
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка 5%';
            
    case servicePercentPrices > 15000 && servicePercentPrices < 30000:
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка 10%';
            
    case servicePercentPrices > 30000:
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка 15%';

        }
}

function infoScrenn () {
    return 'выбранные вами экраны: ' + screens
}


infoScrenn()
asking()


title = getTitle()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrices = getServicePercentPrices()
SumOff = getRollMessege()


console.log(title);
console.log(infoScrenn());
console.log(SumOff);