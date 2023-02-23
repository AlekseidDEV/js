let title = prompt ('как называется твой проект ?');
let screens = prompt ('какие типы экранов нужно разработать?');
let rollback = 2900;
let adaptive = confirm('адаптив нужен?');
let screenPrice = +prompt("сколько будет стоить данная работа?")
let service1 = prompt('какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('сколько это будет стоить?')
let service2 = prompt('какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('сколько это будет стоить?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let allServicePrices
let servicePercentPrices

let getAllServicePrices = function (serv1, serv2) {
    return serv1 + serv2
}
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);


function getFullPrice (serv1, serv2) {
return screenPrice + serv1 + serv2
}

fullPrice = getFullPrice(servicePrice1, servicePrice2);


function getServicePercentPrices(screnSum, serv1, serv2) {
    return screnSum + serv1 + serv2 - rollback ; 
}


const getTitle = function() {
    return title[0].toUpperCase() + title.substring(1).toLocaleLowerCase()
}

function infoScrenn () {
    return 'выбранные вами экраны: ' + screens
}
infoScrenn()

console.log(getTitle());
console.log(infoScrenn());



function getRollMessege(a = 0, b = 10000, c = 15000, d = 30000) {
   return function(total){
    if(total < a) {
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , за такие деньги не работаем';
    } else if (total > a && total < b) {
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , скидка не предусмотрена';
    } else if(total > c && total < d){
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 5%';
    } else if (total > b && total < c) {
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 10%';
    } else if (total > c){
        return 'итоговая сумма, с учетом вычета суммы посреднику, суммы дополнительных услуг : ' + servicePercentPrices + ' , вам доступен купон на скидку 15%';
    }
   }
}



console.log(getRollMessege(0)(servicePercentPrices = getServicePercentPrices(screenPrice, servicePrice1, servicePrice2)));
servicePercentPrices = getServicePercentPrices(screenPrice, servicePrice1, servicePrice2);


















































// задание 1
// let getAllServicePrices 
// let screenPrive = 20000;
// let rollBack = 2900;
// let screens = "простые, сложные, интерактивныe";

// console.log(screens.split(" , "));


// let allServicePrices = function(serv1, serv2) {
//     return serv1 + serv2 
// }

// getAllServicePrices = allServicePrices(4500, 2200)

// console.log(getAllServicePrices);



// // задание 2

// function getFullPrice () {
//     function step(str) {
//         return str
//     }

//     step(getAllServicePrices + screenPrive)
// }

// getFullPrice()



// // задание 3

// // let titleText = prompt()
// // function getTitle() {
// //     return titleText[0].toUpperCase() + titleText.slice(1 , 12).toLocaleLowerCase()
// // }

// const promVop = prompt('')


// const examination = function (promVop) {
//      if (promVop == []) {
//         return 'ты чо лох ? '
//      }  
//         return promVop[0].toUpperCase() + promVop.slice(1 , 12).toLocaleLowerCase()
// }

// console.log(examination(promVop));


// // задание 4

// function getServicePercentPrices () {
//     function step(str) {
//         console.log(str);
//     }

//     step(getAllServicePrices - rollBack)
// }

// getServicePercentPrices()


// // задание 5
// console.log(screens.split(' '));
