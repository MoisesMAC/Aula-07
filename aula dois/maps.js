const array = [ 1, 2, 3, 4, 5];

const arrayMultiplicado = array.map(function (valor){
    return valor * 5
});

console.log ("array:", array);
console.log ("arrayMultiplicado:", arrayMultiplicado);

const arrayString = [ "Maria", "João", "Fulano"];
const novoArrayString = arrayString.map(function (valor){
    if (valor === "Maria") {
        return "Joana";
    }
    return valor;
})

console.log ("arrayString:", arrayString);
console.log ("novoarrayString:", novoArrayString);

const somentestring = novoArrayString.filter(function(valor){
    if (typeof valor === 'string'){
        return true;
    }
    return false;
})


console.log ("Somente strings da array:",somentestring);
