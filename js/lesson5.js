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
        // if (servicePercentPrices < 0) {
        //     return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';
        // } 

        switch (true) {
            case servicePercentPrices < 0:
                 return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';

            // case servicePercentPrices < 0:
            //     return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';
        }

       
//    return function(total){
//     if(total < a) {
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';
//     } else if (total > a && total < b) {
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка не предусмотрена';
//     } else if(total > c && total < d){
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 5%';
//     } else if (total > b && total < c) {
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 10%';
//     } else if (total > c){
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 15%';
//     }
//    }
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











// function getRollMessege(a = 0, b = 10000, c = 15000, d = 30000) {
//    return function(total){
//     if(total < a) {
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';
//     } else if (total > a && total < b) {
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка не предусмотрена';
//     } else if(total > c && total < d){
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 5%';
//     } else if (total > b && total < c) {
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 10%';
//     } else if (total > c){
//         return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 15%';
//     }
//    }
// }

// fullPrice = getFullPrice(servicePrice1, servicePrice2);
// allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
// servicePercentPrices = getServicePercentPrices(screenPrice, servicePrice1, servicePrice2);

// infoScrenn()

// console.log(getTitle());
// console.log(infoScrenn());
// console.log(getRollMessege(0)(servicePercentPrices = getServicePercentPrices(screenPrice, servicePrice1, servicePrice2)));

