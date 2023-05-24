console.log("Sonning tub yoki tub emasligini aniqlash!!!");

function tubSon(raqam){
    if(raqam <= 1){
        return false;
    }
    for(let i = 2; i <= raqam/2; i++){
        if(raqam % i === 0){
            return false;
        }
    }
    return true;
}

console.log(tubSon(11));
console.log(tubSon(25));
console.log(tubSon(67));
console.log(tubSon(43));