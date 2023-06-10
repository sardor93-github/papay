/**  Masalan: findDigits('ad5we34jkf89') return qilishi kerak bolgan qiymat '53489'*/

// function findDigits(ele){
//     let result = '';
//     for (let i = 0; i < ele.length; i++) {
//         let x = ele.charAt(i);
//         if (!isNaN(x)){
//             result += x;
//         }        
//     }
//     return console.log("result: ", result);
// }
// const str = "sdsa5d5sad1dsad3";
// findDigits(str);


/** CHALLENGE 5: MURDER CASE */

const magazine = "Lorem kill ipsum dolor sit amet, consectetur adipiscing elit. Donec you."

const note = "dolor kill you";
const result = canMurderWrite(note);
console.log("Killer yoza oladimi:", result);

function canMurderWrite(note) {
    const words = note.split(" ");
    let result = true;

    for (let i = 0; i < words.length; i++){
        if(!magazine.includes(words[i])){
            result = false;
            break;
        }
    }
    return result;
}




// const detail_list = [12, 23, null, 34, null, 32, null, null, 66, 84];
// const result = moveNullsKeepOrder(detail_list);
// console.log("result:", result);

// function moveNullsKeepOrder(detail_list) {
//     let newArray = [];
//     for (let i = detail_list.length; i >= 0; i--){
//         if (detail_list[i] > 0){
//             newArray.unshift(detail_list[i]);
//         }
//         if (detail_list[i] === null){
//             newArray.push(detail_list[i]);
//         }
//     }
//     return newArray;
// }

// moveNullsKeepOrder(detail_list);

// isPrime sonni aniqlash
// console.log("Sonning tub yoki tub emasligini aniqlash!!!");

// function tubSon(raqam){
//     if(raqam <= 1){
//         return false;
//     }
//     for(let i = 2; i <= raqam/2; i++){
//         if(raqam % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(tubSon(11));
// console.log(tubSon(25));
// console.log(tubSon(67));
// console.log(tubSon(43));



// challenge 3 ning code i
// console.log("Challenge 3ni Boshladik!!!");
// const pricess = [2, 3, 6, 1, 5, 4, 20, 30];
// console.log("You should buy stock => ", buyStock(pricess));


// function buyStock(stock) {
//     let buy_qiymat = pricess[0];
//     let buy_qiymat_max = pricess[0];
//     for (let i = 0; i <= pricess.length; i++) {
//         if (buy_qiymat >= pricess[i]) {
//             buy_qiymat = pricess[i];
//         }
//         if (buy_qiymat_max <= pricess[i]) {
//             buy_qiymat_max = pricess[i];
//         }
//     }
//     let diff = buy_qiymat_max - buy_qiymat;
//     const index = pricess.indexOf(buy_qiymat);
//     return  `{ index: ${index}, profit: ${diff} }`;
// }
