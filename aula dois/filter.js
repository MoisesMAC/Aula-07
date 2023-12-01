const array = ["Texto", 15, 58, 85, false, "texto 2"];
// filtra items da array
const somentenumeros = array.filter(function(valor){
    if (typeof valor === 'number'){
        return true;
    }
    return false;
})

console.log (array);
console.log ("Somente números da array:",somentenumeros);


const somentestring = array.filter(function(valor){
    if (typeof valor === 'string'){
        return true;
    }
    return false;
})


console.log ("Somente strings da array:",somentestring);
