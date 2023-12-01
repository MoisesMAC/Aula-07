//arrays

const array =  [ 5, 2, 3, 4];
console.log("item original:", array);

//push adiciona um item no final do array
array.push("Ultimo item")
console.log("Adicionou ultimo item:", array);


// pop remove ultimo item 
array.pop();
console.log("Removeu ultimo item:", array);

// unshift adiciona item no começo 
array.unshift("Primeiro item");
console.log("Adicionou primeiro item:", array);

// shift remove o primeiro item
array.shift();
console.log("Removeu o primeiro item:", array);

console.log(array);
