let title = prompt ('как называется твой проект ?');
let screens = prompt ('какие типы экранов нужно разработать?');
let rollback = 2900;
let fullPrice = 120000;
let adaptive = confirm('адаптив нужен?');


let screenPrice = +prompt("сколько будет стоить данная работа?")
console.log(screenPrice);

let service = prompt('какой дополнительный тип услуги нужен?' , 'услуга 1 или услуга 2?')
console.log(service);
if (service == "услуга 1") {
    let servPrice1 = +prompt("сколько будет стоить услуга 1?")
    console.log(servPrice1);
let fullPrice = screenPrice+servPrice1-rollback
    console.log("итоговая сумма с учетом отката посреднику:");
    console.log(fullPrice);

} else if (service == "услуга 2") {
let servPrice2 = +prompt("сколько будет стоить услуга 2? ")
    console.log(servPrice2);
let fullPrice = screenPrice+servPrice2-rollback
    console.log("итоговая сумма с учетом отката посреднику:");
    console.log(fullPrice);
} else {
    console.log("ты чо дурак? нормально напиши!");
}  

let saleFull = +prompt('введите итоговую стоимость, для получения скидки')
    switch (true) {
        case saleFull < 0:
            console.log("ты чо бальной?");
            break
        case saleFull > 0 && saleFull < 15000:
            console.log("скидка не предусмотрена");
            break
        case saleFull > 15000 && saleFull <30000:
            console.log("скидка 5%");
            break
        case saleFull > 30000:
            console.log("скидка 10%");
            break
    }














// задание 7

// let service = prompt('какой дополнительный тип услуги нужен?' , 'услуга 1 или услуга 2?')
// console.log(service);
// if (service == "услуга 1") {
//     let servPrice1 = prompt("сколько будет стоить услуга 1?")
//     console.log(servPrice1);
// } else if (service == "услуга 2") {
//     let servPrice2 = prompt("сколько будет стоить услуга 2? ")
//     console.log(servPrice2);
// } else {
//     console.log("ты чо дурак? нормально напиши");
// }  // я захотел это сделать как условие, так лучше выглядит





// // задание 8 + 9 + 10

