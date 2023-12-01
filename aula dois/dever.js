const array =  [ "João", "Maria", "Pedro"];

array.splice(1,0, "Moisés");

console.log(array);

const novoArray = array.map(function (nome){
    if (nome === "Pedro") {
        return "Jack";
    }
    return nome;
})
console.log ( "Novo Array é", novoArray);

const filtroArray = novoArray.filter(function (nome){
    if (nome === "Maria") {
        return false;
    }
    return true;
})

console.log ("Array filtrada é", filtroArray.join("/"));

