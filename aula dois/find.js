const array = ["51",false, 55, "fulano", "sei lá"];
// typepf: tipo de ....
const numero = array.find (function(valor){
    if (typeof valor === 'number'){
        return true;
    }
    return false;
})

console.log(numero);

const booleano = array.find(function(valor){
    if (typeof valor === 'boolean'){
        return true;
        }
        return false;
})

console.log(booleano);

const string = array.find(function(valor){
    if (typeof valor === 'string'){
        return true;
        }
        return false;
})

console.log(string);

