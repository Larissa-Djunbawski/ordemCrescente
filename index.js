let numeros = [4,3,1,5,5,7,,2,-47,2001]

for(let i = 0; i < numeros.length; i++){
    console.log("no primeiro laço", + numeros[i])
    for (let j = i + 1; j < numeros.length; j++){
        console.log("no segundo laço "+ numeros[j])

        if (numeros[i]>numeros[j]){

         let auxiliar = numeros[i]
         numeros[i] = numeros[j]
         numeros[j] = auxiliar


        }
    }
}
console.log(numeros)