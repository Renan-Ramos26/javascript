let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`O primeiro valor é ${num[0]}`)
console.log(`O ultimo valor é ${num[4]}`)
num.sort() // Organizei em ordem crescente
console.log(`O ultimo valor é ${num[4]}`)
num.push(1) // Adicionei o valor 1 no final
//console.log(`O primeiro valor é ${num[0]}`)
//console.log(num)

/*for (let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} */
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(`O valor 8 está na posição ${num.indexOf(8)}`)